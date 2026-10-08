# Tái cấu trúc mã CSS Landing Page sang SASS

Mã CSS gốc lấy từ bài `[Thực hành] Landing Page CodeGym Career` (file `style.css`, 193 dòng). Bài này gồm các phần đề yêu cầu:

- Navigation và header (hero)
- Phần sản phẩm nổi bật (các khoá học)
- Phần số liệu thống kê
- Footer

`index.html` và `script.js` giữ nguyên, chỉ đổi đường dẫn CSS thành `css/style.css`.

## Kiến thức SASS đã áp dụng

| Kiến thức | Áp dụng |
|---|---|
| Variables | Thay toàn bộ biến CSS `var(--brand)`... bằng biến SASS, gom thêm các màu, font-weight, shadow, kích thước bị viết cứng |
| Nesting + `&` | `.navbar .nav-link.active`, `.hero .mask`, `.steps .col:not(:last-child)::after`, `#backToTop.show`, `.page-footer a:hover`... |
| Mixin | `circle($size)` cho `.icon-circle` và `.step-circle`; `button-variant()` cho `.btn-accent` và `.btn-brand`; `tag()` cho `.chip` và `.module-tags span`; `accent-underline()`; `flex-center` |
| Mixin có `@content` | `down(md)`, `down(lg)` thay cho các `@media` viết tay; media query được đặt ngay trong khối của thành phần |
| Map + `@each` | `$theme-colors` sinh ra `.brand-bg`, `.brand-text`, `.accent-bg`, `.accent-text`; `$breakpoints` cho mixin `down()` |
| Partials + `@use` / `@forward` | Chia theo thư mục abstracts, base, layout, components |

## Kiểm tra giao diện không đổi

So sánh từng selector và thuộc tính giữa CSS gốc và CSS biên dịch từ SASS: cả hai đều có 132 khai báo với giá trị giống nhau. Chỉ khác 2 điểm không ảnh hưởng giao diện:

- `.module-tags span` dùng `background-color` thay cho `background` (cùng một màu nền).
- Dấu nháy quanh tên font `"Roboto"`.

## Cấu trúc thư mục

```
scss/
├── main.scss
├── abstracts/_index.scss, _variables.scss, _mixins.scss
├── base/_base.scss, _utilities.scss
├── layout/_navbar.scss, _hero.scss, _footer.scss
└── components/_buttons.scss, _section-title.scss, _cards.scss,
               _courses.scss, _steps.scss, _form.scss
css/style.css   ← biên dịch bằng: sass --no-source-map scss/main.scss css/style.css
index.html
script.js
```
