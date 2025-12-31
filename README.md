# ĂN VẶT RIN RIN - Landing Page

## 🍗 Giới thiệu
Landing page chuyên nghiệp cho thương hiệu **ĂN VẶT RIN RIN** - chuyên Chân Gà Sốt Thái cay bùng vị.

## ✨ Tính năng nổi bật

### 🎯 Tối ưu chuyển đổi (Conversion)
- **Hero Section** với CTA rõ ràng, thu hút ngay lập tức
- **Best Seller** được highlight đặc biệt
- **Menu hiển thị đầy đủ** với giá cả minh bạch
- **Multiple CTA buttons** dẫn đến hành động đặt hàng
- **Social proof** với testimonials khách hàng

### 📱 Mobile-First Design
- Responsive 100% trên mọi thiết bị
- Tối ưu cho điện thoại (70% khách hàng)
- Touch-friendly buttons
- Fast loading time

### 🎨 UI/UX Chuyên nghiệp
- **Tone màu**: Đen (#0b0b0b), Vàng gold (#d6b26a), Đỏ cam cay (#ff4d2d)
- **Typography**: Bebas Neue/Montserrat cho heading, Poppins cho body
- **Animations**: Fade-in, slide-up, pulse effects
- **Interactive elements**: Hover effects, click feedbacks

### 🧩 Cấu trúc đầy đủ 9 sections

1. **Hero Section** - Màn hình đầu với CTA mạnh mẽ
2. **Giới thiệu thương hiệu** - Story telling về Rin Rin
3. **Best Seller** - Featured món chân gà sốt Thái 49K
4. **Menu Section** - Đầy đủ món ăn với giá cả
5. **Độ cay** - Tùy chọn độ cay (4 levels)
6. **Topping & Nước** - Add-ons và đồ uống
7. **Lý do chọn Rin Rin** - 5 điểm mạnh
8. **Testimonials** - 3 feedback khách hàng
9. **CTA cuối trang** - Chốt đơn với nhiều channel

## 📦 Cấu trúc file

```
An_Vat/
├── index.html      # HTML chính
├── styles.css      # Toàn bộ CSS styling
├── script.js       # JavaScript interactions
└── README.md       # Tài liệu này
```

## 🚀 Cách sử dụng

### 1. Mở file
Mở file `index.html` bằng trình duyệt web

### 2. Tùy chỉnh thông tin
Thay đổi các thông tin sau trong `index.html`:

- **Số điện thoại**: Tìm `0912345678` và thay bằng số hotline thật
- **Link mạng xã hội**: Cập nhật link Facebook và TikTok
- **Link GrabFood/ShopeeFood**: Thêm link đặt món thật vào các nút CTA
- **QR Code**: Thay placeholder bằng QR code thật

### 3. Thay ảnh sản phẩm (optional)
Hiện tại dùng emoji placeholder. Để thêm ảnh thật:

```html
<!-- Thay thế -->
<div class="food-emoji">🍗</div>

<!-- Bằng -->
<img src="images/chan-ga-sot-thai.jpg" alt="Chân gà sốt Thái">
```

## 🎨 Tùy chỉnh màu sắc

Mở `styles.css` và thay đổi biến CSS:

```css
:root {
    --color-black: #0b0b0b;      /* Nền đen */
    --color-gold: #d6b26a;        /* Vàng gold */
    --color-red: #ff4d2d;         /* Đỏ cam cay */
    --color-white: #f5f5f5;       /* Trắng chữ */
}
```

## 📱 Responsive Breakpoints

- **Desktop**: > 768px - Layout 2 cột
- **Tablet**: 481px - 767px - Layout flexible
- **Mobile**: < 480px - Layout 1 cột, full-width buttons

## ⚡ Features JavaScript

### Interactive elements
- ✅ Scroll animations (fade-in, slide-up)
- ✅ Add to cart notifications
- ✅ Spice level selection
- ✅ Topping selection with visual feedback
- ✅ Smooth scroll to sections
- ✅ Floating action button (call hotline)

### Performance optimizations
- ✅ Intersection Observer for lazy animations
- ✅ Optimized for mobile touch events
- ✅ Prevent double-tap zoom

## 🔧 Công nghệ sử dụng

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Flexbox, Grid, Animations
- **JavaScript (Vanilla)** - No frameworks, pure JS
- **Google Fonts** - Bebas Neue, Montserrat, Poppins

## 📈 Conversion Optimization Features

1. **Multiple CTAs** - 5+ điểm chốt đơn khác nhau
2. **Urgency** - Badge "Best Seller", "Limited"
3. **Social Proof** - Reviews 5 sao từ khách
4. **Clear Value Proposition** - "Cay là ghiền - Ăn là mê"
5. **Visual Hierarchy** - Món hot được highlight
6. **Easy Navigation** - Smooth scroll giữa các section
7. **Trust Signals** - "100% tươi ngon", "Giao nhanh 30 phút"

## 🎯 Call-to-Actions

### Primary CTAs:
- 📞 Gọi Hotline (tel: link)
- 🛵 Đặt ngay - Giao liền (scroll to menu)
- 🛒 Đặt qua GrabFood/ShopeeFood

### Secondary CTAs:
- ➕ Thêm món vào đơn
- ➕ Thêm topping
- 📱 Quét QR đặt hàng

## 📝 Cập nhật nội dung

### Thêm món mới vào menu
Copy template này trong `index.html`:

```html
<div class="menu-item">
    <div class="menu-item-icon">🍗</div>
    <h4 class="menu-item-name">Tên món mới</h4>
    <p class="menu-item-desc">Mô tả ngắn</p>
    <p class="menu-item-price">59K</p>
    <button class="btn-add-to-cart">Thêm vào đơn</button>
</div>
```

### Thêm testimonial mới
Copy template này:

```html
<div class="testimonial-card animate-on-scroll">
    <div class="testimonial-rating">⭐⭐⭐⭐⭐</div>
    <p class="testimonial-text">
        "Feedback từ khách hàng..."
    </p>
    <div class="testimonial-author">
        <div class="author-avatar">👤</div>
        <div class="author-info">
            <p class="author-name">Tên khách</p>
            <p class="author-location">Địa điểm</p>
        </div>
    </div>
</div>
```

## 🌟 Best Practices đã áp dụng

- ✅ SEO-friendly HTML structure
- ✅ Accessible (ARIA labels có thể thêm)
- ✅ Fast loading (no heavy libraries)
- ✅ Mobile-first approach
- ✅ Progressive enhancement
- ✅ Clean, maintainable code

## 🚀 Deploy

### Option 1: GitHub Pages (Free)
1. Push code lên GitHub repository
2. Settings → Pages → Deploy from main branch
3. Website sẽ có URL: `username.github.io/repo-name`

### Option 2: Netlify/Vercel (Free)
1. Kéo thả folder vào Netlify/Vercel
2. Instant deploy với custom domain

### Option 3: Hosting truyền thống
Upload 3 files (index.html, styles.css, script.js) lên hosting

## 📞 Support & Customize

Để customize thêm hoặc cần hỗ trợ, có thể:
- Chỉnh sửa trực tiếp các file HTML/CSS/JS
- Thêm ảnh vào folder `images/`
- Tích hợp payment gateway
- Thêm form đặt hàng

## 📄 License

Free to use for Ăn Vặt Rin Rin business.

---

**Chúc bạn kinh doanh thành công! 🍗🔥**

*Cay là ghiền - Ăn là mê - Một lần thử là muốn đặt lại!*
