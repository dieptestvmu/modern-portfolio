# Modern Portfolio (Neon/Gradient)

Một template portfolio **HTML/CSS/JS thuần**, responsive, có tính năng thực tế:
- Hero động (gradient + blob), neon glow, hiệu ứng hover.
- Projects có **bộ lọc** (All/Web/App/Design).
- Contact form gửi email qua **Formspree**.
- Code sạch, không phụ thuộc framework.

## Cấu trúc
```
modern-portfolio/
├─ index.html
└─ assets/
   ├─ css/style.css
   ├─ js/main.js
   └─ img/
```

## Hướng dẫn nhanh
1. Mở `index.html` bằng trình duyệt để xem demo.
2. Để nhận email từ form liên hệ:
   - Tạo form tại https://formspree.io (Free).
   - Lấy Endpoint dạng `https://formspree.io/f/xxxxabcd`.
   - Mở `assets/js/main.js` và **thay** `FORM_ENDPOINT` bằng endpoint của bạn.
3. Deploy (tải lên) bất cứ hosting tĩnh nào (Github Pages, Netlify, Vercel...)

## Tuỳ biến
- Đổi màu trong `:root` ở `style.css`.
- Thêm/sửa dự án trong phần `#projects` của `index.html` (thuộc tính `data-cat`).
- Thay ảnh demo bằng ảnh screenshot sản phẩm thật.

## Bản quyền
Bạn toàn quyền dùng template này để làm website cá nhân hoặc đóng gói bán trên các chợ số. Không yêu cầu credit.
