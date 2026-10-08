# Tái cấu trúc mã CSS sang SASS

Mã nguồn gốc: https://github.com/codegym-vn/responsive-grid (lưu tại `original/responsive_grid.htm`).

## Vấn đề của mã gốc

- CSS nằm trong thẻ `<style>` và rất nhiều thuộc tính `style="..."` viết trực tiếp trong HTML.
- Cùng một đoạn style bị lặp lại nhiều lần, ví dụ `background-color:#ffffff;border:none;` lặp 6 lần và `border-right:1px solid #000000;` lặp 12 lần.
- Màu sắc và kích thước viết cứng, muốn đổi phải sửa ở nhiều chỗ.
- Tên class (`gridwrapper`, `gridcontent`) không cho biết vai trò của phần tử.

## Cách tái cấu trúc

| Kiến thức SASS | Áp dụng |
|---|---|
| Biến | Màu sắc, số cột `$grid-columns`, khoảng cách, độ mờ |
| Map + `@each` | `$row-heights` sinh ra `.grid-row--header`, `--content`, `--footer`, `--guides` |
| `@for` | Sinh `.col-1` đến `.col-12` |
| Mixin | `column-width($span)` tính % độ rộng cột, `color-block($color)` cho các khối màu |
| Nesting + `&` | `.sidebar__item`, `.sidebar__box`, `&:last-child`, `&:first-child` |
| Partials + `@use` / `@forward` | Chia theo thư mục abstracts, base, layout, components |

Toàn bộ `style="..."` inline đã được chuyển thành class. Giao diện sau khi tái cấu trúc giống hệt bản gốc.

## Cấu trúc thư mục

```
original/responsive_grid.htm   ← mã gốc
scss/
├── main.scss
├── abstracts/_index.scss, _variables.scss, _mixins.scss
├── base/_reset.scss
├── layout/_grid.scss
└── components/_layout.scss, _guides.scss
css/main.css                   ← biên dịch bằng: sass --no-source-map scss/main.scss css/main.css
index.html                     ← HTML mới, không còn style inline
```
