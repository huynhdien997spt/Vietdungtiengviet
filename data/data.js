/* ============================================================
   data.js — NƠI THẦY CHỈNH NỘI DUNG
   ============================================================
   File này chứa tất cả dữ liệu động của website:
   - blogData: bài viết blog
   - donorsData: danh sách ân nhân
   - searchIndex: từ khoá tìm kiếm
   ============================================================ */


/* ──────────────────────────────────────────────────────────
   1. BLOG DATA
   Để thêm bài mới: copy 1 object, thay nội dung, tăng số index
   Ảnh bìa đặt vào: images/events/ hoặc images/Slider/
   ────────────────────────────────────────────────────────── */
const blogData = [
  {
    tag: "Sự kiện",
    title: "Scratch Day 2025 tại ĐH An Giang – Khai phóng lan rộng",
    meta: "Tháng 5, 2025 · Huỳnh Văn Diễn",
    img: "images/envents/AGU/star_envent.jpg",
    body: `
      <p>Ngày 10/5/2025, tại Trường Đại học An Giang, CTU Scratch Day – AGU  đã diễn ra trong không khí sôi nổi với sự tham gia của giảng viên, sinh viên, giáo viên và những người yêu thích giáo dục sáng tạo. Chương trình là dịp để cộng đồng cùng gặp gỡ, chia sẻ kinh nghiệm và khám phá những phương pháp học tập mới thông qua Scratch, Snap!, OctoStudio và các hoạt động Creative Learning.</p>

      <h2>Phát biểu khai mạc từ lãnh đạo Trường Đại học An Giang</h2>
      <p>Mở đầu chương trình, đại diện Ban Giám hiệu Trường Đại học An Giang đã gửi lời chào mừng đến các đại biểu, giảng viên, sinh viên và khách mời tham dự ngày hội. Phó Hiệu trưởng nhấn mạnh vai trò của giáo dục sáng tạo, đổi mới phương pháp dạy học và tầm quan trọng của việc xây dựng môi trường học tập giúp người học phát triển tư duy, kỹ năng giải quyết vấn đề và năng lực sáng tạo.</p>
      <img src="images/envents/AGU/PHT_speaker.jpg" alt="Phó Hiệu trưởng phát biểu khai mạc" style="width:100%;height:350px;object-fit:cover;margin:16px 0;border-radius:4px">
      <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-8px;margin-bottom:20px">Phó Hiệu trưởng Trường Đại học An Giang phát biểu khai mạc CTU Scratch Day – AGU 2026.</p>

      <h2>Chia sẻ truyền cảm hứng từ Giáo sư Won Ho</h2>
      <p>Một trong những nội dung được mong đợi nhất là phần chia sẻ của Giáo sư Won Ho – người được biết đến là cha đẻ của OKMindmap. Thông qua những câu chuyện thực tiễn và các ví dụ sinh động, Giáo sư đã mang đến góc nhìn sâu sắc về việc ứng dụng sơ đồ tư duy, công nghệ và trí tuệ nhân tạo trong giáo dục hiện đại.</p>
      <p>Bài chia sẻ không chỉ truyền cảm hứng cho người tham dự mà còn gợi mở nhiều ý tưởng mới về việc xây dựng môi trường học tập lấy người học làm trung tâm, khuyến khích sự sáng tạo, hợp tác và học tập suốt đời.</p>
      <img src="images/envents/AGU/GS_WonyHo.jpg" alt="Giáo sư Won Ho chia sẻ" style="width:100%;height:280px;object-fit:cover;margin:16px 0;border-radius:4px">
      <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-8px;margin-bottom:20px">Giáo sư Won Ho chia sẻ về học tập sáng tạo, sơ đồ tư duy và những xu hướng giáo dục trong thời đại số.</p>

      <h2>Chia sẻ về phương pháp học tập hiệu quả từ cô Thúy</h2>
      <p>Tiếp nối chương trình, cô Thúy đã chia sẻ những phương pháp học tập hiệu quả giúp người học phát huy tính chủ động, khả năng sáng tạo và tinh thần tự học. Theo cô, việc học không chỉ là tiếp nhận kiến thức mà còn là quá trình khám phá, thực hành, chia sẻ và không ngừng hoàn thiện bản thân.</p>
      <p>Những kinh nghiệm thực tế cùng các gợi ý thiết thực đã giúp người tham dự có thêm nhiều ý tưởng để áp dụng vào học tập và giảng dạy, hướng đến việc xây dựng môi trường học tập tích cực và lấy người học làm trung tâm.</p>
      <img src="images/envents/AGU/Ms_Thuy.jpg" alt="Cô Thúy chia sẻ" style="width:100%;height:280px;object-fit:cover;margin:16px 0;border-radius:4px">
      <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-8px;margin-bottom:20px">
      Cô Thúy chia sẻ về các phương pháp học tập hiệu quả, khuyến khích người học chủ động khám phá và phát triển năng lực bản thân.
      </p>

      <h2>Video sự kiện</h2>
      <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:20px 0;border-radius:6px">
        <iframe
          src="https://www.youtube.com/embed/JIThWIGStAI"
          style="position:absolute;top:0;left:0;width:100%;height:100%;border:0"
          allowfullscreen loading="lazy">
        </iframe>
      </div>

      <h2>Giao lưu và lưu giữ những khoảnh khắc đáng nhớ</h2>
      <p>Khép lại chương trình, các đại biểu, giảng viên, sinh viên và khách mời đã cùng giao lưu, trao đổi kinh nghiệm và chụp ảnh lưu niệm. Những nụ cười, những cuộc trò chuyện đầy hào hứng và tinh thần kết nối đã tạo nên một dấu ấn đẹp cho CTU Scratch Day – AGU 2026.</p>
      <p>Ngày hội không chỉ là nơi chia sẻ kiến thức mà còn là cầu nối để hình thành và phát triển cộng đồng học tập sáng tạo, góp phần lan tỏa tinh thần <em>"Imagine – Create – Share – Reflect"</em> đến với nhiều người học hơn trong tương lai.</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:16px 0">
      <img src="images/envents/AGU/exchange.jpg" alt="Giao lưu" style="width:100%;height:220px;object-fit:cover;border-radius:4px">
      <img src="images/envents/AGU/memory.jpg" alt="Chụp ảnh lưu niệm" style="width:100%;height:220px;object-fit:cover;border-radius:4px">
      </div>
      <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-4px;margin-bottom:20px">Các đại biểu, giảng viên và sinh viên chụp ảnh lưu niệm sau CTU Scratch Day – AGU 2025.</p>
    `
  },
  {
    tag: "Phương pháp",
    title: "WebQuest 3.0 và cách nó thay đổi việc dạy học",
    meta: "Tháng 1, 2025 · Bùi Lê Diễm",
    img: "images/blog /webquest/Mekong_river.jpg",
    body: `
     <p>WebQuest 3.0 là phiên bản mới nhất của mô hình bài học mở, được phát triển dựa trên nền tảng OKMindmap và tích hợp tư duy phản biện vào quy trình dạy học hiện đại.</p>
     <p>Cô Bùi Lê Diễm là một trong những người tiên phong ứng dụng WebQuest trên nền tảng OKMindmap tại Việt Nam, mang phương pháp học tập mở đến gần hơn với giáo viên và sinh viên trong khu vực Đồng bằng sông Cửu Long.</p>
     <img src="images/blog /webquest/okmindmap.jpg" alt="Cô Diễm hướng dẫn WebQuest" style="width:100%;height:450px;object-fit:cover;margin:16px 0;border-radius:4px">
     <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-8px;margin-bottom:24px">Cô Bùi Lê Diễm giới thiệu mô hình WebQuest trên nền tảng OKMindmap trong các chương trình đào tạo giáo viên và sinh viên.</p>

     <h2>WebQuest 3.0 khác gì các phiên bản trước?</h2>
     <p>Phiên bản mới bổ sung <strong>Mindfolio</strong> — hồ sơ tư duy học tập cá nhân — giúp người học ghi lại hành trình <em>Học → Phản tư → Sáng tạo → Chia sẻ</em> một cách có hệ thống trên OKMindmap.</p>
     <p>WebQuest 3.0 không chỉ là một bài tập trực tuyến mà là một hệ sinh thái học tập mở: người dạy thiết kế nhiệm vụ, người học khám phá, phản tư và tạo ra sản phẩm số của riêng mình.</p>

     <h2>Remix — Học từ cộng đồng, sáng tạo cho cộng đồng</h2>
     <p>Thay vì bắt đầu từ một trang trắng, người học được khuyến khích sử dụng các WebQuest mẫu trên OKMindmap để remix — điều chỉnh, bổ sung và cá nhân hoá nội dung phù hợp với môn học và đối tượng người học của mình.</p>
     <img src="images/blog /webquest/remix.jpg" alt="Sinh viên remix WebQuest" style="width:100%;height:450px;object-fit:cover;margin:16px 0;border-radius:4px">
     <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-8px;margin-bottom:24px">Sinh viên và giáo viên thực hành remix WebQuest, điều chỉnh nội dung phù hợp với môn học và đối tượng người học.</p>

     <h2>Áp dụng thực tế</h2>
     <p>WebQuest 3.0 đã được triển khai tại nhiều lớp học SP Tin học, Việt Nam học và các workshop cộng đồng với phản hồi rất tích cực. Người học không chỉ tiếp thu kiến thức mà còn chủ động kiến tạo tri thức và chia sẻ lại cho cộng đồng.</p>
    <h2>Video chia sẻ về WebQuest 3.0</h2>
      <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:20px 0;border-radius:6px">
        <iframe
          src="https://www.youtube.com/embed/m2xq0uweJwM?si=FxGWxTZgZyKB_AqN"
          style="position:absolute;top:0;left:0;width:100%;height:100%;border:0"
          allowfullscreen loading="lazy">
        </iframe>
      </div>
      <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-4px;margin-bottom:20px">Tham khảo chi tiết tại: <a href="https://sj.ctu.edu.vn/ql/docgia/tacgia-1095/baibao-60546.html">https://sj.ctu.edu.vn/ql/docgia/tacgia-1095/baibao-60546.html/a></p>
    `
  },

  {
    tag: "Cộng đồng",
    title: "GS Won Ho thăm VĐTV – Cầu nối Việt–Hàn",
    meta: "Tháng 11, 2024 · Ban biên tập",
    img: "",
    body: `
      <p>GS Won Ho đến thăm và làm việc với nhóm VĐTV tại Đại học Cần Thơ.</p>
      <h2>Nội dung buổi gặp</h2>
      <p>GS chia sẻ tầm nhìn về hệ sinh thái học tập mở toàn cầu và ấn tượng với cách VĐTV ứng dụng OKMindmap.</p>
      <h2>Hướng hợp tác</h2>
      <p>Hai bên thống nhất phát triển WebQuest 3.0 đa ngôn ngữ, mở rộng sang cộng đồng người học tiếng Việt ở nước ngoài.</p>
    `
  }
,{
  tag: "Sự kiện",
  title: "Luận Văn Số – Học Liệu Mở: Hướng đến hệ sinh thái tri thức sáng tạo",
  meta: "20/4/2026 · Đại học Cần Thơ",
  img: "images/envents/LVS/tapthe.jpg",
  body: `
    <p>Sáng ngày 20/4/2026, hội trường lầu 4 Thư viện Đại học Cần Thơ đã trở thành điểm hội tụ của hơn 100 sinh viên, giảng viên và đại biểu tham dự sự kiện học thuật đặc biệt — chương trình <strong>"America Hangout"</strong> kết hợp không gian trải nghiệm <strong>"Luận văn số – Học liệu mở"</strong>.</p>

    <img src="images/envents/LVS/bat_dau.jpg" alt="Khai mạc sự kiện" style="width:100%;height:320px;object-fit:cover;margin:16px 0;border-radius:4px">
    <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-8px;margin-bottom:24px">Không khí sôi động tại khu vực triển lãm trước giờ khai mạc.</p>

    <h2>Diễn biến chương trình</h2>
    <p>Chương trình được tổ chức bài bản, bao gồm nhiều nội dung trọng tâm:</p>
    <p>🏛️ <strong>Tham quan triển lãm</strong> (07:00 – 07:55): Hơn 20 bức tranh trưng bày trong đó có 20 tranh luận văn sáng tạo đã được số hóa, mỗi sản phẩm mang đậm dấu ấn cá nhân và tinh thần đổi mới.</p>
    <p>🎤 <strong>Phát biểu khai mạc</strong>: TS Bùi Lê Diễm – Giảng viên Bộ môn SP. Tin học – định hướng tinh thần cho toàn chương trình.</p>
    <p>📊 <strong>Báo cáo chuyên đề America Hangout</strong>: Hai nhóm sinh viên trình bày sản phẩm WebQuest dưới hình thức video thuyết trình sáng tạo.</p>
    <p>💬 <strong>Câu chuyện cá nhân</strong>: Sinh viên Trung Hậu chia sẻ hành trình thực tế — những lần thử, lần sai và khoảnh khắc vỡ òa khi ý tưởng mới được thắp sáng.</p>

    <img src="images/envents/LVS/hau_bc.jpg"  alt="Sinh viên báo cáo" style="width:100%;height:320px;object-fit:cover;margin:16px 0;border-radius:4px">
    <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-8px;margin-bottom:24px">Hình ảnh Phạm Hoàng Trung Hậu chia sẻ câu chuyện cá nhân mình sau quá trình 4 năm học.<br> Sinh lớp SP Tin học K48, ĐHCT</p>

    <h2>Mô hình Luận văn số – Học liệu mở</h2>
    <p>Điểm nhấn đặc biệt là sự ra mắt mô hình <strong>"Luận văn số – Học liệu mở"</strong> — thay vì chỉ lưu trữ nội bộ, mỗi luận văn được số hóa và thiết kế theo định hướng học liệu mở, cho phép cộng đồng học thuật tiếp cận, tham khảo và phát triển tiếp.</p>
    <p>Mô hình gồm ba yếu tố cốt lõi:</p>
    <p>① Số hóa nội dung luận văn theo chuẩn học liệu mở<br>
    ② Thiết kế giao diện tương tác với mã QR và nền tảng trực tuyến<br>
    ③ Xây dựng hệ thống phản hồi cộng đồng để liên tục cải thiện chất lượng</p>

    <img src="images/envents/LVS/duy_khuong.jpg" alt="Duy Khương chia sẻ" style="width:100%;height:320px;object-fit:cover;margin:16px 0;border-radius:4px">
    <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-8px;margin-bottom:24px">Hình ảnh Ngô Duy Khương chia sẻ. Sinh lớp SP Tin học K48, ĐHCT</p>

    <blockquote style="border-left:3px solid var(--gold);padding:16px 20px;background:var(--gold-pale);margin:20px 0;border-radius:0 8px 8px 0">
      <p style="font-family:'Playfair Display',serif;font-style:italic;color:var(--blue-deep);margin:0">"Chúng tôi muốn luận văn không chỉ là điểm kết thúc của một hành trình học tập, mà là điểm khởi đầu cho những tri thức mới được chia sẻ rộng rãi."</p>
      <p style="font-size:0.82rem;color:var(--warm-gray);margin:8px 0 0">— Sinh viên Duy Khương</p>
    </blockquote>

    <img src="images/envents/LVS/trien_lam1.jpg" alt="Triển lãm QR" style="width:100%;height:320px;object-fit:cover;margin:16px 0;border-radius:4px">
    <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-8px;margin-bottom:24px">Sinh viên tham quan và quét mã QR tại khu vực triển lãm.</p>

    <img src="images/envents/LVS/trien_lam2.jpg" alt="Triển lãm QR" style="width:100%;height:320px;object-fit:cover;margin:16px 0;border-radius:4px">
    <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-8px;margin-bottom:24px">Thầy Cô tham quan và trò chuyện tại khu vực triển lãm.</p>
    
    <h2>Kết quả nổi bật</h2>
    <p>🏆 <strong> 30 bức tranh trưng bày</strong> luận văn sáng tạo được số hóa và trình bày rộng rãi.<br>
    📽️ <strong>Các nhóm America Hangout</strong> hoàn thành báo cáo WebQuest xuất sắc.<br>
    👥 <strong>Hơn 100</strong> sinh viên và giảng viên tham gia.<br>
    📜 <strong>100%</strong> sinh viên nhận Giấy chứng nhận hoàn thành.</p>
    <p><em>Sự kiện đã minh chứng rằng: khi tri thức được chia sẻ, nó không giảm đi mà ngược lại — còn nhân lên gấp bội. Đây là tinh thần cốt lõi của học liệu mở trong thời đại số.</em></p>

    <h2>Một số hình ảnh buổi sự triển lãm</h2>
    <img src="images/envents/LVS/poster.jpg" alt="Ms Diễm phát biểu" style="width:100%;height:320px;object-fit:cover;margin:16px 0;border-radius:4px">
    <img src="images/envents/LVS/Ms_Diem_phat_bieu.jpg" alt="Ms Diễm phát biểu" style="width:100%;height:320px;object-fit:cover;margin:16px 0;border-radius:4px">
    <img src="images/envents/LVS/Ms_Thuy.jpg" alt="Triển lãm QR" style="width:100%;height:320px;object-fit:cover;margin:16px 0;border-radius:4px">
    <img src="images/envents/LVS/tham_du.jpg" alt="Triển lãm QR" style="width:100%;height:320px;object-fit:cover;margin:16px 0;border-radius:4px">
    <h2>BÀI HÁT ĐƯỢC LẬP TRÌNH TẠO BẰNG SUNO AI</h2>
      <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:20px 0;border-radius:6px">
        <iframe
          src="https://scratch.mit.edu/projects/1318215754/embed"
          style="position:absolute;top:0;left:0;width:100%;height:100%;border:0"
          allowfullscreen loading="lazy">
        </iframe>
      </div>
      <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-4px;margin-bottom:20px">Kho luận văn số SP Tin học K48, ĐHCT: <a href="https://drive.google.com/drive/u/1/folders/1_f2AsNyT33FuQ8UtcS1acQwu2PbGMdd6" target="_blank" style="color:var(--blue-soft)">Tại đây</a>.</p>
      <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-4px;margin-bottom:20px">Sản phẩm American Hangout Lần I: <a href="LINK_ĐÚNG_Ở_ĐÂY" target="_blank" style="color:var(--blue-soft)">Tại đây</a>.</p>
      <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-4px;margin-bottom:20px">Xem thêm ảnh: <a href="https://drive.google.com/drive/u/1/folders/1Pz1W7U2piczwwryqRGCGoEarvGtxfwPk" target="_blank" style="color:var(--blue-soft)">Tại đây</a>.</p>  
    `
}
,{
  tag: "Sự kiện",
  title: "Hành trình gieo những hạt giống sáng tạo tại Trường Tiểu học Long Thành A",
  meta: "4/4/2026 · Ban tổ chức",
  img: "images/envents/ScratchDay_TLA/anh_bia.jpg",
  body: `
    <p>6 giờ sáng, cả đội xuất phát từ Cần Thơ với balo đầy giấy màu, laptop và một trái tim thật háo hức. Sau chuyến phà mát rượi, 7 giờ chúng tôi đã có mặt tại Trường Tiểu học Long Thành A để bắt đầu một ngày hội học tập và sáng tạo đầy ắp tiếng cười.</p>

    <img src="images/envents/ScratchDay_TLA/xuat_phat.jpg" alt="Đoàn xuất phát" style="width:100%;height:320px;object-fit:cover;margin:16px 0;border-radius:4px">
    <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-8px;margin-bottom:24px">Đoàn xuất phát từ Cần Thơ trên chuyến phà buổi sáng sớm.</p>

    <p>Không khí lớp học nhanh chóng trở nên sôi động khi các em học sinh cùng tham gia vào những hoạt động khám phá đầy thú vị.</p>

    <img src="images/envents/ScratchDay_TLA/khai_mac.jpg" alt="Khai mạc" style="width:100%;height:320px;object-fit:cover;margin:16px 0;border-radius:4px">
    <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-8px;margin-bottom:24px">Toàn cảnh lớp học trong buổi khai mạc chương trình.</p>

    <h2>Mindmap — Sắp xếp ý tưởng theo cách của riêng mình</h2>
    <p>Với Mindmap, các em học cách sắp xếp ý tưởng một cách khoa học, trực quan và sáng tạo. Những sơ đồ đầy màu sắc đã giúp các em tự tin thể hiện suy nghĩ của mình.</p>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:16px 0">
      <img src="images/envents/ScratchDay_TLA/lop_ve_mindmap.jpg" alt="Học sinh vẽ Mindmap" style="width:100%;height:220px;object-fit:cover;border-radius:4px">
      <img src="images/envents/ScratchDay_TLA/lop_ve_mindmap2.jpg" alt="Học sinh vẽ Mindmap="width:100%;height:220px;object-fit:cover;border-radius:4px">
    </div>
    <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-4px;margin-bottom:24px">Học sinh hào hứng vẽ Mindmap — sắp xếp ý tưởng theo cách trực quan và sáng tạo.</p>

    <h2>Origami — Kiên nhẫn và khéo léo từ đôi tay nhỏ</h2>
    <p>Từ những tờ giấy đơn giản, các đôi tay nhỏ xinh đã tỉ mỉ tạo nên những sản phẩm Origami đáng yêu. Mỗi sản phẩm là một câu chuyện về sự kiên nhẫn và khéo léo.</p>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:16px 0">
          <img src="images/envents/ScratchDay_TLA/origami.jpg" alt="Origami" style="width:100%;height:220px;object-fit:cover;border-radius:4px">
          <img src="images/envents/ScratchDay_TLA/origami2.jpg" alt="Origami="width:100%;height:220px;object-fit:cover;border-radius:4px">
    </div>
    <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-4px;margin-bottom:24px">Những sản phẩm Origami đáng yêu được tạo ra từ đôi tay nhỏ xinh của các em.<br>(Ảnh trái: 4/2; Ảnh phải: 4/1)</p>

    <h2>Scratch — Bước vào thế giới lập trình</h2>
    <p>Với Scratch, các em bước vào thế giới lập trình bằng những khối lệnh đầy màu sắc. Những nhân vật bắt đầu chuyển động, những câu chuyện đầu tiên được tạo ra từ chính trí tưởng tượng của các em.</p>

    <img src="images/envents/ScratchDay_TLA/Scratch.jpg" alt="Học sinh thực hành Scratch" style="width:100%;height:320px;object-fit:cover;margin:16px 0;border-radius:4px">
    <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-8px;margin-bottom:24px">Học sinh thực hành lập trình Scratch — những câu chuyện đầu tiên được tạo ra từ trí tưởng tượng.</p>

    <h2>Giáo sinh — Học cách truyền cảm hứng</h2>
    <p>Đây cũng là dịp để các bạn giáo sinh được tập dạy, tập hướng dẫn và tập truyền cảm hứng. Mỗi nụ cười của học sinh là nguồn động lực quý giá cho hành trình trở thành người thầy trong tương lai.</p>

    <img src="images/envents/ScratchDay_TLA/gs_hd.jpg" alt="Giáo sinh hướng dẫn" style="width:100%;height:320px;object-fit:cover;margin:16px 0;border-radius:4px">
    <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-8px;margin-bottom:24px">Các giáo sinh tập dạy, tập hướng dẫn và truyền cảm hứng cho học sinh.</p>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:16px 0">
      <img src="images/envents/ScratchDay_TLA/sp_mindmap.jpg" alt="Học sinh khoe sản phẩm" style="width:100%;height:220px;object-fit:cover;border-radius:4px">
      <img src="images/envents/ScratchDay_TLA/lop_hoc.jpg" alt="Ảnh tập thể" style="width:100%;height:220px;object-fit:cover;border-radius:4px">
    </div>
    <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-4px;margin-bottom:24px">Mỗi sản phẩm hoàn thành là một tiếng reo vui — và ảnh tập thể cuối chương trình đầy ắp nụ cười.</p>

    <h2>Khi Mindmap, Origami và Scratch cùng nhau</h2>
    <p>Giáo dục không chỉ là truyền đạt kiến thức mà còn là mở ra cơ hội để trẻ em tư duy, khám phá và tự tin sáng tạo. Khi Mindmap, Origami và Scratch kết hợp cùng nhau, mỗi em nhỏ đều có thể trở thành một nhà thiết kế, một lập trình viên và một người kể chuyện tài năng.</p>
    <p>Một buổi sáng bắt đầu thật sớm, nhưng đổi lại là vô số nụ cười, niềm vui và những hạt giống đam mê được gieo vào tâm hồn trẻ thơ.</p>
    <p>Xin chân thành cảm ơn Ban Giám hiệu, quý thầy cô, các bạn giáo sinh và các em học sinh đã cùng tạo nên một ngày thật ý nghĩa!</p>
    
    <h2>BÀI HÁT ĐƯỢC LẬP TRÌNH TẠO BẰNG SUNO AI</h2>
        <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:20px 0;border-radius:6px">
          <iframe
            src="https://scratch.mit.edu/projects/1318173601/embed"
            style="position:absolute;top:0;left:0;width:100%;height:100%;border:0"
            allowfullscreen loading="lazy">
          </iframe>
        </div>
    `
}
,{
  tag: "Sự kiện",
  title: "Mang công nghệ và sáng tạo đến Trường THCS & THPT Long Thạnh",
  meta: "23/4/2026 · Huỳnh Văn Diễn",
  img: "images/envents/ScratchDay_LT/anh_bia.jpg",
  body: `
    <p>Một buổi sáng đầy hứng khởi, đoàn CTUScratchDay lên đường với mong muốn mang công nghệ, sáng tạo và niềm vui học tập đến với các em học sinh Trường THCS & THPT Long Thạnh.</p>
    <p>Đồng hành cùng chương trình có TS. Bùi Lê Diễm, TS. Ngọc Thủy Thị Thái, trưởng đoàn Huỳnh Văn Diễn cùng các bạn sinh viên ngành Sư phạm Tin học. Về phía nhà trường, chương trình nhận được sự hỗ trợ nhiệt tình của cô Nguyễn Thị Pha Phăng, góp phần tạo nên một ngày trải nghiệm đầy ý nghĩa.</p>

    <img src="images/envents/ScratchDay_LT/BG_ScratchDay.jpg" alt="Đoàn CTUScratchDay" style="width:100%;height:450px;object-fit:cover;margin:16px 0;border-radius:4px">
    <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-8px;margin-bottom:24px">Đoàn CTUScratchDay xuất phát với tinh thần hứng khởi.</p>

    <p>Không khí chương trình nhanh chóng trở nên sôi nổi với sự tham gia nhiệt tình của các em học sinh.</p>

    <img src="images/envents/ScratchDay_LT/toan_su_kien.jpg" alt="Toàn cảnh chương trình" style="width:100%;height:320px;object-fit:cover;margin:16px 0;border-radius:4px">
    <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-8px;margin-bottom:24px">Toàn cảnh buổi sinh hoạt tại Trường THCS & THPT Long Thạnh.</p>

    <h2>Mindmap — Tư duy hệ thống qua sơ đồ màu sắc</h2>
    <p>Hoạt động đầu tiên là vẽ sơ đồ tư duy do hai bạn Nguyễn Thúy Phượng và Nguyễn Lê Kim Phượng phụ trách. Những ý tưởng được sắp xếp khoa học, sinh động và đầy màu sắc, giúp học sinh rèn luyện tư duy hệ thống và khả năng trình bày ý tưởng hiệu quả.</p>
    
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:16px 0">
      <img src="images/envents/ScratchDay_LT/hsvemindmap.jpg" alt="Học sinh vẽ Mindmap" style="width:100%;height:220px;object-fit:cover;border-radius:4px">
      <img src="images/envents/ScratchDay_LT/hsvemindmap2.jpg" alt="Học sinh vẽ Mindmap" style="width:100%;height:220px;object-fit:cover;border-radius:4px">
    </div>
    <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-4px;margin-bottom:24px">Học sinh hào hứng thực hành vẽ sơ đồ tư duy Mindmap.<</p>

    <img src="images/envents/ScratchDay_LT/spmindmap.jpg" alt="Sản phẩm Mindmap" style="width:100%;height:320px;object-fit:cover;margin:16px 0;border-radius:4px">
    <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-8px;margin-bottom:24px">Những sơ đồ tư duy sáng tạo, thể hiện góc nhìn riêng của từng học sinh.</p>

    <h2>OctoStudio — Bước vào thế giới lập trình</h2>
    <p>Tiếp nối chương trình là hoạt động lập trình với OctoStudio do Phạm Hậu và Nghĩa Hoàng hướng dẫn. Chỉ với những khối lệnh trực quan và đơn giản, các em đã từng bước khám phá thế giới lập trình và tự tay tạo nên những sản phẩm số đầy thú vị.</p>

    <img src="images/envents/ScratchDay_LT/octostudio.jpg" alt="Học sinh thực hành OctoStudio" style="width:100%;height:320px;object-fit:cover;margin:16px 0;border-radius:4px">
    <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-8px;margin-bottom:24px">Học sinh thực hành lập trình OctoStudio — tạo ra sản phẩm số từ chính trí tưởng tượng.</p>

    <h2>Giáo sinh — Trải nghiệm thực tế đứng lớp</h2>
    <p>Đây cũng là cơ hội quý báu để các bạn sinh viên ngành Sư phạm Tin học trải nghiệm thực tế đứng lớp, hướng dẫn học sinh và lan tỏa niềm đam mê công nghệ đến cộng đồng.</p>

    <img src="images/envents/ScratchDay_LT/lhn.jpg" alt="Sinh viên hướng dẫn" style="width:100%;height:320px;object-fit:cover;margin:16px 0;border-radius:4px">
    <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-8px;margin-bottom:24px">Sinh viên Sư phạm Tin học hướng dẫn học sinh theo nhóm.</p>

    <img src="images/envents/ScratchDay_LT/hstrinhbay.jpg" alt="Học sinh trình bày sản phẩm" style="width:100%;height:320px;object-fit:cover;margin:16px 0;border-radius:4px">
    <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-8px;margin-bottom:24px">Các em hào hứng đặt câu hỏi và mạnh dạn chia sẻ ý tưởng của mình.</p>

    <h2>Khi Mindmap kết hợp cùng OctoStudio</h2>
    <p>Giáo dục hiện đại không chỉ truyền đạt kiến thức mà còn giúp người học biết cách tư duy, sáng tạo và ứng dụng công nghệ để giải quyết vấn đề. Khi Mindmap kết hợp cùng OctoStudio, mỗi học sinh đều có cơ hội trở thành người kiến tạo tri thức và sáng tạo tương lai.</p>

    <img src="images/envents/ScratchDay_LT/anhtapthe.jpg" alt="Ảnh tập thể" style="width:100%;height:320px;object-fit:cover;margin:16px 0;border-radius:4px">
    <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-8px;margin-bottom:24px">Ảnh tập thể cuối chương trình — một ngày học tập ý nghĩa, tràn đầy cảm hứng và tiếng cười.</p>

    <img src="images/envents/ScratchDay_LT/anhtapthe.jpg" alt="Ảnh tập thể" style="width:100%;height:320px;object-fit:cover;margin:16px 0;border-radius:4px">

    <p>Xin chân thành cảm ơn Ban Giám hiệu, quý thầy cô Trường THCS & THPT Long Thạnh cùng các em học sinh đã đồng hành. Hẹn gặp lại trong những hành trình tiếp theo của CTUScratchDay!</p>
  `
}
,{
  tag: "Sự kiện",
  title: "Khơi dậy tư duy sáng tạo và kỹ năng số cho học sinh THCS An Lạc",
  meta: "21/1/2026 · Trường THCS An Lạc",
  img: "images/envents/AnLac/bg_anlac.jpg",
  body: `
    <p>Ngày 21/01/2026, Trường THCS An Lạc đã phối hợp cùng Bộ môn Sư phạm Tin học, Khoa Sư phạm Toán và Tin học, Trường Sư phạm – Đại học Cần Thơ tổ chức chương trình hoạt động ngoại khóa với chủ đề ứng dụng công nghệ trong học tập và phát triển tư duy sáng tạo dành cho học sinh toàn trường.</p>

    <img src="images/envents/AnLac/toancanh.jpg" alt="Toàn cảnh chương trình" style="width:100%;height:320px;object-fit:cover;margin:16px 0;border-radius:4px">
    <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-8px;margin-bottom:24px">Toàn cảnh chương trình ngoại khóa tại Trường THCS An Lạc với sự tham gia đông đảo của học sinh.</p>

    <p>Chương trình đã mang đến cho các em học sinh nhiều trải nghiệm học tập mới mẻ và bổ ích. Dưới sự hướng dẫn của các giảng viên và sinh viên ngành Sư phạm Tin học, các em được làm quen với phương pháp thiết kế sơ đồ tư duy (Mindmap), giúp hệ thống hóa kiến thức, phát triển tư duy logic và nâng cao hiệu quả học tập.</p>

    <img src="images/envents/AnLac/gvhd_sdtd.jpg" alt="Hướng dẫn sơ đồ tư duy" style="width:100%;height:320px;object-fit:cover;margin:16px 0;border-radius:4px">
    <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-8px;margin-bottom:24px">Báo cáo viên hướng dẫn học sinh phương pháp xây dựng sơ đồ tư duy để ghi nhớ và hệ thống hóa kiến thức.</p>

    <h2>OctoStudio — Lập trình sáng tạo trên di động</h2>
    <p>Bên cạnh đó, học sinh còn được trải nghiệm ứng dụng <strong>OctoStudio</strong> – công cụ lập trình sáng tạo dành cho thiết bị di động. Thông qua các hoạt động thực hành trực tiếp, các em bước đầu tiếp cận tư duy lập trình, sáng tạo nội dung số và phát triển các kỹ năng công nghệ cần thiết trong thời đại chuyển đổi số.</p>

    <img src="images/envents/AnLac/hs_octostudio.jpg" alt="Học sinh trải nghiệm OctoStudio" style="width:100%;height:320px;object-fit:cover;margin:16px 0;border-radius:4px">
    <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-8px;margin-bottom:24px">Học sinh hào hứng trải nghiệm ứng dụng OctoStudio và thực hành các hoạt động sáng tạo số.</p>

    <p>Không khí chương trình diễn ra sôi nổi với nhiều hoạt động tương tác, khám phá và thực hành. Các em học sinh tích cực tham gia các nhiệm vụ học tập, mạnh dạn chia sẻ ý tưởng và sản phẩm sáng tạo của mình.</p>

    <img src="images/envents/AnLac/giai_dap.jpg" alt="Sinh viên hỗ trợ học sinh" style="width:100%;height:320px;object-fit:cover;margin:16px 0;border-radius:4px">
    <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-8px;margin-bottom:24px">Sinh viên ngành Sư phạm Tin học hỗ trợ học sinh trong quá trình thực hành và giải đáp thắc mắc.</p>

    <img src="images/envents/AnLac/luu_niem.jpg" alt="Ảnh lưu niệm" style="width:100%;height:320px;object-fit:cover;margin:16px 0;border-radius:4px">
    <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-8px;margin-bottom:24px">Đại biểu, giảng viên, sinh viên và học sinh chụp ảnh lưu niệm sau chương trình.</p>

    <h2>Ý nghĩa chương trình</h2>
    <p>Hoạt động ngoại khóa không chỉ giúp học sinh tiếp cận những phương pháp học tập hiện đại mà còn góp phần khơi dậy niềm yêu thích công nghệ, tinh thần sáng tạo và khả năng tự học. Đây là một hoạt động thiết thực nhằm nâng cao chất lượng giáo dục và phát triển năng lực số cho học sinh trong giai đoạn hiện nay.</p>
    <p>Trường THCS An Lạc trân trọng cảm ơn sự đồng hành và hỗ trợ chuyên môn từ Bộ môn Sư phạm Tin học, Khoa Sư phạm Toán và Tin học, Trường Sư phạm – Đại học Cần Thơ đã góp phần tạo nên một sân chơi học thuật ý nghĩa, bổ ích và truyền cảm hứng cho học sinh nhà trường.</p>
  `
}
,{
  tag: "Sự kiện",
  title: "Cà Mau Scratch Day 2024 – Hành trình lan tỏa tư duy sáng tạo đến vùng đất cuối trời Nam",
  meta: "21/9/2024 · Ban tổ chức CTUScratchDay",
  img: "images/envents/CaMau/bia.jpg",
  body: `
    <p style="font-style:italic;color:var(--blue-soft);border-left:3px solid var(--gold);padding-left:16px;margin-bottom:24px">"Tuổi trẻ là những chuyến đi. Có những chuyến đi để khám phá, có những chuyến đi để cống hiến. Và hành trình đến với Cà Mau Scratch Day 2024 là một chuyến đi như thế."</p>

    <p>23 giờ 30 phút ngày 20/09/2024, đoàn giảng viên và sinh viên bắt đầu chuẩn bị cho hành trình đến huyện Đầm Dơi, tỉnh Cà Mau. Không khí háo hức hiện rõ trên từng khuôn mặt khi mọi người cùng nhau kiểm tra học liệu, quà tặng và thiết bị phục vụ chương trình.</p>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:16px 0">
      <img src="images/envents/CaMau/anh1.jpg" alt="Đoàn tập trung xuất phát" style="width:100%;height:220px;object-fit:cover;border-radius:4px">
      <img src="images/envents/CaMau/anh2.jpg" alt="Chuẩn bị học liệu" style="width:100%;height:220px;object-fit:cover;border-radius:4px">
    </div>
    <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-4px;margin-bottom:24px">Đoàn tập trung tại Phòng 2 Tỷ và chuẩn bị học liệu, thiết bị trước giờ xuất phát.</p>

    <p>Một cơn mưa lớn bất ngờ xuất hiện nhưng không thể làm giảm tinh thần của cả đoàn. Những chiếc áo mưa vội khoác lên người, những tiếng cười vang lên giữa đêm khuya trở thành kỷ niệm khó quên của chuyến đi.</p>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:16px 0">
      <img src="images/envents/CaMau/anh3.jpg" alt="Cơn mưa bất ngờ" style="width:100%;height:220px;object-fit:cover;border-radius:4px">
      <img src="images/envents/CaMau/anh4.jpg" alt="Hành trình xuyên đêm" style="width:100%;height:220px;object-fit:cover;border-radius:4px">
    </div>
    <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-4px;margin-bottom:24px">Cơn mưa bất ngờ trước giờ khởi hành và hành trình xuyên đêm về Cà Mau.</p>

    <h2>Bình minh trên bến phà Tam Giang</h2>
    <p>Bến phà Tam Giang hiện ra trong ánh bình minh yên bình của vùng sông nước. Những chuyến phà đầu ngày chở theo học sinh đến trường, người dân đi làm và cả những người trẻ mang trong mình khát vọng lan tỏa tri thức.</p>

    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin:16px 0">
      <img src="images/envents/CaMau/anh6.jpg" alt="Bình minh Tam Giang" style="width:100%;height:180px;object-fit:cover;border-radius:4px">
      <img src="images/envents/CaMau/anh7.jpg" alt="Chờ phà" style="width:100%;height:180px;object-fit:cover;border-radius:4px">
      <img src="images/envents/CaMau/anh8.jpg" alt="Qua phà" style="width:100%;height:180px;object-fit:cover;border-radius:4px">
    </div>
    <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-4px;margin-bottom:24px">Bình minh tại bến phà Tam Giang — khoảnh khắc bình yên trước một ngày đầy năng lượng.</p>

    <h2>Ngày hội bắt đầu</h2>
    <p>Ngay từ sáng sớm, khuôn viên Trường THCS & THPT Nguyễn Huân đã trở nên sôi động. Điểm đặc biệt của chương trình là hoạt động được triển khai đồng thời tại <strong>24 lớp học từ khối 6 đến khối 12</strong>, mỗi khối gồm 2 lớp tham gia trải nghiệm các chuyên đề về <strong>Mindmap</strong> và <strong>OctoStudio</strong>.</p>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:16px 0">
      <img src="images/envents/CaMau/anh11.jpg" alt="Lớp khối 6" style="width:100%;height:200px;object-fit:cover;border-radius:4px">
      <img src="images/envents/CaMau/anh12.jpg" alt="Lớp khối 7" style="width:100%;height:200px;object-fit:cover;border-radius:4px">
      <img src="images/envents/CaMau/anh13.jpg" alt="Lớp khối 8" style="width:100%;height:200px;object-fit:cover;border-radius:4px">
      <img src="images/envents/CaMau/anh14.jpg" alt="Lớp khối 9" style="width:100%;height:200px;object-fit:cover;border-radius:4px">
    </div>
    <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-4px;margin-bottom:24px">Sinh viên hướng dẫn tại các lớp.</p>

    <h2>Khám phá sức mạnh của Mindmap</h2>
    <p>Tại chuyên đề Mindmap, học sinh được tiếp cận phương pháp học tập trực quan thông qua từ khóa, hình ảnh và màu sắc. Các em không chỉ học cách ghi nhớ kiến thức hiệu quả hơn mà còn phát triển khả năng tư duy hệ thống và sáng tạo. Nhiều sản phẩm độc đáo đã được tạo ra chỉ sau thời gian ngắn thực hành.</p>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:16px 0">
      <img src="images/envents/CaMau/anh16.jpg" alt="Học sinh vẽ Mindmap" style="width:100%;height:220px;object-fit:cover;border-radius:4px">
      <img src="images/envents/CaMau/anh17.jpg" alt="Sản phẩm Mindmap" style="width:100%;height:220px;object-fit:cover;border-radius:4px">
    </div>
    <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-4px;margin-bottom:24px">Học sinh thực hành vẽ sơ đồ tư duy và những sản phẩm Mindmap đầy màu sắc.</p>

    <h2>Sáng tạo cùng OctoStudio</h2>
    <p>Thông qua OctoStudio, các em được trải nghiệm lập trình kéo thả trên thiết bị di động, tạo nên những câu chuyện tương tác, trò chơi đơn giản và các sản phẩm sáng tạo mang dấu ấn cá nhân. Niềm vui hiện rõ trên khuôn mặt các em khi nhân vật đầu tiên chuyển động hay khi chương trình đầu tiên hoạt động thành công.</p>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:16px 0">
      <img src="images/envents/CaMau/anh18.jpg" alt="Học sinh thực hành OctoStudio" style="width:100%;height:220px;object-fit:cover;border-radius:4px">
      <img src="images/envents/CaMau/anh19.jpg" alt="Sản phẩm OctoStudio" style="width:100%;height:220px;object-fit:cover;border-radius:4px">
    </div>
    <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-4px;margin-bottom:24px">Học sinh hào hứng thực hành lập trình sáng tạo với OctoStudio.</p>

    <h2>Những giá trị còn đọng lại</h2>
    <p>Một ngày hội khép lại, nhưng những cảm xúc đẹp vẫn còn ở lại. Đó là niềm vui của học sinh khi được tiếp cận những phương pháp học tập mới. Đó là sự nhiệt huyết của các bạn sinh viên khi đứng lớp. Và đó cũng là niềm hạnh phúc của những người làm giáo dục khi nhìn thấy những hạt giống sáng tạo được gieo xuống.</p>
    <p>Cà Mau Scratch Day 2024 không chỉ là một chương trình trải nghiệm công nghệ. Đó còn là hành trình kết nối, sẻ chia và lan tỏa tinh thần học tập sáng tạo đến với học sinh nơi vùng đất cực Nam của Tổ quốc.</p>

    <img src="images/envents/CaMau/anh20.jpg" alt="Ảnh tập thể" style="width:100%;height:360px;object-fit:cover;margin:16px 0;border-radius:4px">
    <p style="font-size:0.82rem;color:var(--warm-gray);font-style:italic;margin-top:-8px;margin-bottom:20px">Ảnh tập thể đoàn và nhà trường — kết thúc một ngày đầy ý nghĩa tại vùng đất cuối trời Nam.</p>

    <p>Xin cảm ơn Trường THCS & THPT Nguyễn Huân đã đồng hành cùng chương trình. Hẹn gặp lại trong những hành trình lan tỏa tri thức tiếp theo!</p>
  `
}

,{
  tag: "Cộng đồng",
  title: "Mùa Hè Số 2026 – Chi Bằng Học",
  meta: "8/6 – 21/8/2026 · Ban tổ chức",
  img: "images/blog /MHS2026/bia.jpg",
  body: `
    <p>Ba mẹ đang tìm một sân chơi hè bổ ích cho con? Hãy để các em có một mùa hè thật vui, sáng tạo và đầy trải nghiệm cùng <strong>Mùa Hè Số 2026 – Chi Bằng Học</strong>!</p>
    <p>Chương trình hoàn toàn <strong>MIỄN PHÍ</strong> dành cho học sinh từ 7–18 tuổi với nhiều hoạt động hấp dẫn:</p>

    <p>🎨 Vẽ tranh, Mindmap và Sketchnote<br>
    💻 Lập trình Scratch, OctoStudio, Snap!<br>
    🎵 Sáng tác nhạc, viết truyện<br>
    🎮 Tạo game, hoạt hình và sản phẩm công nghệ thú vị<br>
    🤝 Rèn kỹ năng giao tiếp, làm việc nhóm và tư duy sáng tạo</p>

    <p>Học mà chơi – chơi mà học trong môi trường thân thiện, tích cực và đầy cảm hứng.</p>

    <h2>Đội ngũ Ban tổ chức & Giảng dạy</h2>

    <p><strong>Cố vấn chương trình</strong></p>
    <p>– Tiến sĩ Bùi Lê Diễm – Giảng viên Khoa Toán và Tin học, Trường Sư phạm, Đại học Cần Thơ.<br>
    – Tiến sĩ Thái Thị Ngọc Thúy – Giảng viên Khoa Toán và Tin học, Trường Sư phạm, Đại học Cần Thơ.</p>

    <p><strong>Đại diện điều phối</strong></p>
    <p>– Cử nhân Huỳnh Văn Diễn – Sư phạm Tin học, Đại học Cần Thơ.<br>
    – Sinh viên Phạm Hoàng Trung Hậu, K48 – Sư phạm Tin học, Đại học Cần Thơ.</p>

    <p><strong>Đội ngũ giảng dạy</strong></p>
    <p>Các bạn sinh viên ngành Sư phạm Tin học đầy nhiệt huyết, yêu trẻ và đam mê công nghệ.</p>

    <h2>Thông tin đăng ký</h2>
    <p>📅 <strong>Hạn đăng ký:</strong> 08/06/2026</p>
    <p>📝 <strong>Link đăng ký:</strong> <a href="https://forms.gle/wPE16vqNMcsipQSD7" target="_blank" style="color:var(--blue-soft);font-weight:600">forms.gle/wPE16vqNMcsipQSD7</a></p>
    <p>💬 <strong>Nhóm Zalo:</strong> <a href="https://zalo.me/g/rdzjdv511" target="_blank" style="color:var(--blue-soft);font-weight:600">zalo.me/g/rdzjdv511</a></p>
    <p>📘 <strong>Group Facebook:</strong> <a href="https://www.facebook.com/share/18ktpKGNsS/?mibextid=wwXIfr" target="_blank" style="color:var(--blue-soft);font-weight:600">facebook.com/share/18ktpKGNsS</a></p>
    <p>📞 <strong>Liên hệ:</strong> 0794856553 (Hậu) – 0828294600 (Huỳnh Diễn)</p>

    <p style="font-style:italic;color:var(--blue-soft);margin-top:24px">Nhanh tay đăng ký để cùng nhau tạo nên một mùa hè thật đáng nhớ nhé!</p>
  `
}
  /* ── THÊM BÀI BLOG MỚI BÊN DƯỚI ──
  https://scratch.mit.edu/projects/1318173601/
  ,{
    tag: "Sự kiện",                          ← Chủ đề: Sự kiện / Phương pháp / Cộng đồng / Học liệu
    title: "Tiêu đề bài viết mới",
    meta: "Tháng 6, 2026 · Tên tác giả",
    img: "images/events/ten-anh.jpg",        ← Ảnh bìa (để "" nếu không có)
    body: `
      <p>Nội dung bài viết...</p>
      <h2>Tiêu đề phần</h2>
      <p>Nội dung...</p>
    `
  }
  ── */
];


/* ──────────────────────────────────────────────────────────
   2. DONORS DATA — Ân nhân
   Để thêm ân nhân mới: copy 1 object vào cuối mảng donors[]
   Ảnh đặt vào: images/donate/annhan/
   ────────────────────────────────────────────────────────── */
const donorsData = [
  {
    name: "Cô Bùi Lê Diễm",
    role: "Sáng lập dự án",
    img: "images/uploads/bui_le_diem.jpg",
    initials: "BLD"
  },
  {
    name: "Công đoàn ĐH Cần Thơ",
    role: "Đơn vị đồng hành",
    img: "",
    initials: "CĐ"
  },
  {
    name: "GS Won Ho",
    role: "Đối tác quốc tế",
    img: "images/donate/annhan/GS_Wonyho.jpg",
    initials: "WH"
  },
  {
    name: "Anh Nguyễn Minh Nhật",
    role: "Người đầu tiên tổ cùng chức sự kiện Mùa Hè Số từ những năm 2016",
    img: "images/donate/annhan/an_danh_nam.jpg",
    initials: "NMN"
  },
  {
    name: "Ân nhân ẩn danh",
    role: "Nhiều tấm lòng đồng hành",
    img: "",
    initials: "💛"
  }

  /* ── THÊM ÂN NHÂN MỚI BÊN DƯỚI ──
  ,{
    name: "Tên ân nhân",
    role: "Vai trò / mô tả",
    img: "images/donate/annhan/ten-anh.jpg",  ← để "" nếu không có ảnh
    initials: "TT"                             ← 2-3 chữ viết tắt hiện khi không có ảnh
  }
  ── */
];


/* ──────────────────────────────────────────────────────────
   3. SEARCH INDEX — Từ khoá tìm kiếm
   Thêm mục mới khi có nội dung mới trên web
   ────────────────────────────────────────────────────────── */
const searchIndex = [
  { tag:'Trang', title:'Về chúng tôi', desc:'Lịch sử, đội ngũ, tầm nhìn dự án', page:'about' },
  { tag:'Trang', title:'Hoạt động', desc:'Sự kiện, blog, học liệu mở', page:'activity' },
  { tag:'Trang', title:'Tham gia', desc:'Đăng ký giáo viên và học viên', page:'join' },
  { tag:'Trang', title:'Ủng hộ', desc:'Donate, QR Momo, MBbank', page:'donate' },
  { tag:'Sự kiện', title:'Scratch Day 2025 – ĐH An Giang', desc:'Ngày hội lập trình sáng tạo', page:'activity' },
  { tag:'Phương pháp', title:'WebQuest 3.0', desc:'Mô hình bài học mở tích hợp OKMindmap', page:'activity' },
  { tag:'Cộng đồng', title:'GS Won Ho thăm VĐTV', desc:'Cầu nối Việt–Hàn trong giáo dục mở', page:'activity' },
  { tag:'Công cụ', title:'OKMindmap', desc:'Bản đồ tư duy trực tuyến miễn phí', page:'activity' },
  { tag:'Công cụ', title:'Scratch & OctoStudio', desc:'Lập trình sáng tạo cho học sinh', page:'activity' },
  { tag:'Công cụ', title:'Mindfolio', desc:'Hồ sơ tư duy học tập mở', page:'activity' },
  { tag:'Đội ngũ', title:'Cô Bùi Lê Diễm', desc:'Sáng lập & Cố vấn học thuật', page:'about' },
  { tag:'Đội ngũ', title:'Huỳnh Văn Diễn', desc:'Quản lý & Phát triển chiến lược', page:'about' },
];
