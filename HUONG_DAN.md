# 📖 HƯỚNG DẪN CẬP NHẬT WEBSITE VĐTV

## Cấu trúc file sau khi tách

```
Vietdungtiengviet/
├── index.html          ← Bố cục trang (ít chỉnh)
├── css/
│   └── style.css       ← Giao diện, màu sắc, font
├── data/
│   └── data.js         ← NỘI DUNG (thầy chỉnh nhiều nhất)
└── js/
    └── main.js         ← Code chức năng (không cần chỉnh)
```

---

## 1. THÊM BÀI BLOG MỚI

### Bước 1 — Mở file `data/data.js`, tìm dòng:
```
/* ── THÊM BÀI BLOG MỚI BÊN DƯỚI ──
```

Thêm object mới vào mảng `blogData` trước dấu `];`:

```javascript
,{
  tag: "Sự kiện",                          // Sự kiện / Phương pháp / Cộng đồng / Học liệu
  title: "Tiêu đề bài viết mới",
  meta: "Tháng 6, 2026 · Tên tác giả",
  img: "images/events/ten-anh.jpg",        // Ảnh bìa (để "" nếu không có)
  body: `
    <p>Nội dung bài viết...</p>
    <h2>Tiêu đề phần</h2>
    <p>Nội dung...</p>
  `
}
```

### Bước 2 — Mở file `index.html`, tìm comment:
```
<!-- ★ THÊM BÀI BLOG MỚI TẠI ĐÂY
```

Thêm thẻ blog-card mới — **số trong openBlogModal phải là số tiếp theo**:

```html
<div class="blog-card" onclick="openBlogModal(3)"
     data-year="2026" data-month="6" data-tag="su-kien">
  <img class="blog-card-img" src="images/events/ten-anh.jpg" alt="..."
       onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
  <div class="blog-card-img-placeholder" style="display:none">🖥️</div>
  <div class="blog-card-body">
    <div class="blog-date">6/2026</div>
    <div class="blog-title">Tiêu đề bài viết mới</div>
    <div class="blog-excerpt">Tóm tắt ngắn...</div>
    <span class="blog-tag">Sự kiện</span>
  </div>
</div>
```

> **Lưu ý:** `data-tag` phải khớp với bộ lọc:
> - Sự kiện → `su-kien`
> - Phương pháp → `phuong-phap`
> - Cộng đồng → `cong-dong`
> - Học liệu → `hoc-lieu`

---

## 2. THÊM ÂN NHÂN MỚI

Mở file `data/data.js`, tìm comment:
```
/* ── THÊM ÂN NHÂN MỚI BÊN DƯỚI ──
```

Thêm object vào mảng `donorsData`:

```javascript
,{
  name: "Tên ân nhân",
  role: "Vai trò / mô tả",
  img: "images/donate/annhan/ten-anh.jpg",  // để "" nếu không có ảnh
  initials: "TT"                             // 2 chữ hiện khi không có ảnh
}
```

Carousel sẽ **tự động cập nhật** — không cần chỉnh gì thêm.

---

## 3. THÊM ẢNH SLIDER (trang chủ)

### Bước 1 — Upload ảnh lên `images/Slider/`, đặt tên tiếp theo (vd: `slider_16.jpg`)

### Bước 2 — Mở `index.html`, tìm comment:
```
<!-- ★ THÊM/BỚT ẢNH SLIDER TẠI ĐÂY
```
Thêm dòng:
```html
<img src="images/Slider/slider_16.jpg" alt="Ảnh 16">
```

### Bước 3 — Mở `js/main.js`, đổi số `sliderTotal`:
```javascript
const sliderTotal = 15;  // đổi từ 14 thành 15
```

---

## 4. THÊM SỰ KIỆN (trang Hoạt động)

Mở `index.html`, tìm comment:
```
<!-- ★ THÊM SỰ KIỆN MỚI TẠI ĐÂY
```

Copy 1 event-card, đổi số thứ tự và nội dung:

```html
<div class="event-card">
  <div class="event-number">06</div>
  <div class="event-title">🎯 Tên sự kiện mới</div>
  <div class="event-desc">Mô tả ngắn về sự kiện...</div>
</div>
```

> Nếu muốn sự kiện chiếm full hàng: thêm `class="event-card full"`

---

## 5. THÊM MỐC LỊCH SỬ (timeline)

Mở `index.html`, tìm comment:
```
<!-- ★ THÊM MỐC LỊCH SỬ MỚI TẠI ĐÂY -->
```

Thêm:
```html
<div class="timeline-item">
  <div class="timeline-dot"></div>
  <div class="timeline-year">2027 – Tên giai đoạn</div>
  <div class="timeline-title">Tiêu đề mốc</div>
  <div class="timeline-body">Mô tả chi tiết...</div>
</div>
```

---

## 6. THÊM TỪ KHOÁ TÌM KIẾM

Mở `data/data.js`, tìm mảng `searchIndex`, thêm vào cuối:

```javascript
,{ tag:'Sự kiện', title:'Tên sự kiện', desc:'Mô tả ngắn', page:'activity' }
```

Giá trị `page` là: `home` / `about` / `activity` / `join` / `donate`

---

## 7. ĐỔI MÀU SẮC WEBSITE

Mở `css/style.css`, chỉnh các biến màu ở đầu file:

```css
:root {
  --gold: #C9A84C;        ← Màu vàng chính
  --blue-deep: #1A3052;   ← Màu xanh đậm (nav, tiêu đề)
  --blue-mid: #2A4D7A;    ← Màu xanh vừa
  --ivory: #FAF6EE;       ← Màu nền trang
}
```

---

## 8. PUSH LÊN GITHUB sau mỗi lần chỉnh

```bash
git add .
git commit -m "Mô tả thay đổi"
git push
```

---

## Tóm tắt nhanh

| Muốn làm gì | Mở file nào |
|---|---|
| Thêm bài blog | `data/data.js` + `index.html` |
| Thêm ân nhân | `data/data.js` |
| Thêm ảnh slider | `index.html` + `js/main.js` |
| Thêm sự kiện | `index.html` |
| Thêm từ khoá tìm kiếm | `data/data.js` |
| Đổi màu sắc | `css/style.css` |
| Đổi font chữ | `css/style.css` |
