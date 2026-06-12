/* ============================================================
   main.js — Code chức năng (KHÔNG cần chỉnh thường xuyên)
   ============================================================ */

/* ── NAVIGATION ── */
const PAGES = ['home','about','activity','join','donate'];
function goTo(id) {
  PAGES.forEach(p => {
    document.getElementById('page-'+p).classList.remove('active');
    const b = document.getElementById('nav-'+p);
    const d = document.getElementById('drawer-'+p);
    if(b) b.classList.remove('active');
    if(d) d.classList.remove('active');
  });
  document.getElementById('page-'+id).classList.add('active');
  const b = document.getElementById('nav-'+id);
  const d = document.getElementById('drawer-'+id);
  if(b) b.classList.add('active');
  if(d) d.classList.add('active');
  window.scrollTo({top:0, behavior:'smooth'});
  if(id === 'about') initTimeline();
}

const toggle = document.getElementById('navToggle');
const drawer = document.getElementById('navDrawer');
toggle.addEventListener('click', () => {
  toggle.classList.toggle('open');
  drawer.classList.toggle('open');
});
function closeMenu() {
  toggle.classList.remove('open');
  drawer.classList.remove('open');
}

/* ── TABS (Hoạt động) ── */
function switchTab(id, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tab-'+id).classList.add('active');
}

/* ── JOIN TABS ── */
function switchJoinTab(id, btn) {
  document.querySelectorAll('.join-tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.join-tab-content').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('join-tab-'+id).classList.add('active');
}

/* ── TIMELINE ANIMATION ── */
function initTimeline() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
  }, {threshold: 0.12});
  document.querySelectorAll('.timeline-item').forEach(i => {
    i.classList.remove('visible');
    obs.observe(i);
  });
}
initTimeline();

/* ── DONATE LEVEL SELECT ── */
function selectLevel(el) {
  document.querySelectorAll('.level-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
}

/* ── SLIDER ── */
let sliderIndex = 0;
const sliderTotal = 14; // ← Đổi số này nếu thêm/bớt ảnh slider
const sliderTrack = document.getElementById('sliderTrack');
const sliderDotsWrap = document.getElementById('sliderDots');
for(let i = 0; i < sliderTotal; i++) {
  const d = document.createElement('button');
  d.className = 'slider-dot' + (i === 0 ? ' active' : '');
  d.onclick = () => goSlide(i);
  sliderDotsWrap.appendChild(d);
}
function updateSlider() {
  sliderTrack.style.transform = `translateX(-${sliderIndex * 100}%)`;
  document.querySelectorAll('.slider-dot').forEach((d,i) => d.classList.toggle('active', i === sliderIndex));
}
function moveSlider(dir) { sliderIndex = (sliderIndex + dir + sliderTotal) % sliderTotal; updateSlider(); }
function goSlide(i) { sliderIndex = i; updateSlider(); }
setInterval(() => moveSlider(1), 3000);

/* ── BLOG CAROUSEL ── */
let blogPage = 0;
function getBlogPerPage() { return window.innerWidth <= 600 ? 1 : window.innerWidth <= 900 ? 2 : 3; }
function initBlogCarousel() {
  const cards = [...document.querySelectorAll('#blogTrack .blog-card')].filter(c => !c.classList.contains('hidden'));
  const perPage = getBlogPerPage();
  const total = Math.ceil(cards.length / perPage);
  blogPage = Math.min(blogPage, Math.max(0, total - 1));
  const cardWidth = cards[0] ? cards[0].offsetWidth + 24 : 0;
  document.getElementById('blogTrack').style.transform = `translateX(-${blogPage * perPage * cardWidth}px)`;
  const dotsEl = document.getElementById('blogDots');
  dotsEl.innerHTML = '';
  for(let i = 0; i < total; i++) {
    const d = document.createElement('button');
    d.className = 'blog-nav-dot' + (i === blogPage ? ' active' : '');
    d.onclick = () => { blogPage = i; initBlogCarousel(); };
    dotsEl.appendChild(d);
  }
}
function moveBlog(dir) {
  const cards = [...document.querySelectorAll('#blogTrack .blog-card')].filter(c => !c.classList.contains('hidden'));
  const total = Math.ceil(cards.length / getBlogPerPage());
  blogPage = (blogPage + dir + total) % total;
  initBlogCarousel();
}
window.addEventListener('resize', initBlogCarousel);
setTimeout(initBlogCarousel, 100);

/* ── BỘ LỌC BLOG ── */
let activeYear = 'all', activeMonth = 'all', activeTag = 'all';
function filterBlogSelect(sel, type) {
  if(type === 'year') activeYear = sel.value;
  if(type === 'month') activeMonth = sel.value;
  if(type === 'tag') activeTag = sel.value;
  const cards = document.querySelectorAll('.blog-card');
  let count = 0;
  cards.forEach(card => {
    const ok = (activeYear === 'all' || card.dataset.year === activeYear)
            && (activeMonth === 'all' || card.dataset.month === activeMonth)
            && (activeTag === 'all' || card.dataset.tag === activeTag);
    card.classList.toggle('hidden', !ok);
    if(ok) count++;
  });
  blogPage = 0;
  initBlogCarousel();
  const trackEl = document.getElementById('blogTrack');
  const empty = trackEl ? trackEl.querySelector('.blog-empty') : null;
  if(count === 0) {
    if(trackEl && !empty) {
      const el = document.createElement('p');
      el.className = 'blog-empty';
      el.style.cssText = 'text-align:center;color:#8A7A60;font-style:italic;padding:40px 0;font-size:0.9rem;width:100%';
      el.textContent = 'Chưa có bài viết nào trong mục này.';
      trackEl.appendChild(el);
    }
  } else {
    if(empty) empty.remove();
  }
}

/* ── BLOG MODAL ── */
/* ── ĐIỀU HƯỚNG THEO HASH (link riêng cho trang & bài blog) ── */
function handleHashRoute() {
  const hash = location.hash;

  // Link bài blog: #blog-0, #blog-1...
  const blogMatch = hash.match(/^#blog-(\d+)$/);
  if(blogMatch) {
    const index = parseInt(blogMatch[1]);
    if(blogData[index]) {
      goToSilent('activity');
      const eventsTab = document.querySelector('.tab-btn[onclick*="events"]');
      if(eventsTab) switchTab('events', eventsTab);
      setTimeout(() => openBlogModal(index), 200);
    }
    return;
  }

  // Link trang: #about, #activity, #join, #donate
  const pageId = hash.replace('#', '');
  if(PAGES.includes(pageId)) {
    goToSilent(pageId);
    return;
  }

  // Không có hash → trang chủ
  goToSilent('home');
}

// Giống goTo nhưng KHÔNG ghi đè lại URL (tránh lặp vô hạn)
function goToSilent(id) {
  PAGES.forEach(p => {
    document.getElementById('page-'+p).classList.remove('active');
    const b = document.getElementById('nav-'+p);
    const d = document.getElementById('drawer-'+p);
    if(b) b.classList.remove('active');
    if(d) d.classList.remove('active');
  });
  document.getElementById('page-'+id).classList.add('active');
  const b = document.getElementById('nav-'+id);
  const d = document.getElementById('drawer-'+id);
  if(b) b.classList.add('active');
  if(d) d.classList.add('active');
  window.scrollTo({top:0, behavior:'smooth'});
  if(id === 'about') initTimeline();
}

window.addEventListener('load', handleHashRoute);
window.addEventListener('hashchange', handleHashRoute);

function closeBlogModal() {
  document.getElementById('blogModal').classList.remove('open');
  document.body.style.overflow = '';
  if(location.hash.startsWith('#blog-')) {
    history.pushState(null, '', '#activity');
  }
}
/* ── DONORS CAROUSEL (render từ data.js) ── */
function renderDonors() {
  const track = document.getElementById('donorsTrack');
  if(!track || !donorsData) return;
  // Render 2 lần để cuộn vô tận
  const renderSet = () => donorsData.map(d => `
    <div class="donor-card">
      ${d.img
        ? `<img class="donor-avatar" src="${d.img}" alt="${d.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
           <div class="donor-avatar-placeholder" style="display:none">${d.initials}</div>`
        : `<div class="donor-avatar-placeholder">${d.initials}</div>`
      }
      <div class="donor-name">${d.name}</div>
      <div class="donor-role">${d.role}</div>
    </div>
  `).join('');
  track.innerHTML = renderSet() + renderSet();
}
renderDonors();

/* ── SEARCH ── */
function toggleSearch() {
  const box = document.getElementById('searchBox');
  const inp = document.getElementById('searchInput');
  if(box.classList.contains('open')) { closeSearch(); }
  else { box.classList.add('open'); setTimeout(() => inp.focus(), 350); }
}
function closeSearch() {
  document.getElementById('searchBox').classList.remove('open');
  document.getElementById('searchInput').value = '';
  document.getElementById('searchResults').classList.remove('open');
  document.getElementById('searchResults').innerHTML = '';
}
function runSearch(q) {
  const res = document.getElementById('searchResults');
  if(!q.trim()) { res.classList.remove('open'); return; }
  const hits = searchIndex.filter(item =>
    item.title.toLowerCase().includes(q.toLowerCase()) ||
    item.desc.toLowerCase().includes(q.toLowerCase()) ||
    item.tag.toLowerCase().includes(q.toLowerCase())
  );
  if(hits.length === 0) {
    res.innerHTML = '<div class="search-empty">Không tìm thấy kết quả nào.</div>';
  } else {
    res.innerHTML = hits.map(h => `
      <div class="search-result-item" onclick="goTo('${h.page}');closeSearch()">
        <div class="search-result-tag">${h.tag}</div>
        <div class="search-result-title">${h.title}</div>
        <div class="search-result-desc">${h.desc}</div>
      </div>
    `).join('');
  }
  res.classList.add('open');
}
document.addEventListener('click', e => {
  const wrap = document.getElementById('searchWrap');
  const res = document.getElementById('searchResults');
  if(wrap && !wrap.contains(e.target) && res && !res.contains(e.target)) closeSearch();
});
function goTo(id) {
  PAGES.forEach(p => {
    document.getElementById('page-'+p).classList.remove('active');
    const b = document.getElementById('nav-'+p);
    const d = document.getElementById('drawer-'+p);
    if(b) b.classList.remove('active');
    if(d) d.classList.remove('active');
  });
  document.getElementById('page-'+id).classList.add('active');
  const b = document.getElementById('nav-'+id);
  const d = document.getElementById('drawer-'+id);
  if(b) b.classList.add('active');
  if(d) d.classList.add('active');
  window.scrollTo({top:0, behavior:'smooth'});
  if(id === 'about') initTimeline();

  // ← thêm: cập nhật URL theo trang (trang chủ thì xoá hash)
  if(id === 'home') {
    history.pushState(null, '', location.pathname + location.search);
  } else {
    history.pushState(null, '', '#' + id);
  }
}

/* ── DECAP CMS OAuth ── */
if(window.location.hash && window.location.hash.startsWith("#access_token")) {
  window.location.href = "/admin/#" + window.location.hash.substring(1);
}
