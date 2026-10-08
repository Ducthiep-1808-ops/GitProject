# Thực hành: Cài đặt SASS bằng npm và SASS CLI

## 1. Kiểm tra Node.js và npm

```
$ node -v
v26.7.0

$ npm -v
11.19.0
```

Máy đã có sẵn Node.js và npm nên không cần cài thêm.

## 2. Cài đặt SASS bằng npm

```
$ npm install -g sass
$ sass --version
1.105.1 compiled with dart2js 3.13.5
```

> Lưu ý: với Dart Sass, lệnh kiểm tra phiên bản là `sass --version`. Lệnh `sass -v` trong tài liệu báo lỗi `Could not find an option or flag "-v"`.

## 3. Biên dịch một file SCSS sang CSS

```
$ sass styles.scss styles.css
```

`styles.scss` → `styles.css` (kèm file `styles.css.map`).

## 4. Chế độ theo dõi (watch mode)

```
$ sass styles.scss styles.css --watch
Sass is watching for changes. Press Ctrl-C to stop.

[2026-10-08 21:23] Compiled styles.scss to styles.css.
```

Thử sửa `$primary-color` từ `#3498db` thành `#9b59b6` trong `styles.scss`. File `styles.css` tự cập nhật thành `background: #9b59b6;` mà không cần chạy lại lệnh.

## 5. Biên dịch nhiều file SCSS cùng lúc

```
$ sass scss/:css/ --watch
Sass is watching for changes. Press Ctrl-C to stop.

[2026-10-08 21:24] Compiled scss/about.scss to css/about.css.
[2026-10-08 21:24] Compiled scss/home.scss to css/home.css.
```

- `scss/home.scss` → `css/home.css`
- `scss/about.scss` → `css/about.css`
- `scss/_variables.scss` là partial (tên bắt đầu bằng `_`) nên không tạo file CSS riêng. Partial này được `home.scss` và `about.scss` dùng chung qua `@use`.

Thử sửa `$radius` từ `6px` thành `12px` trong `_variables.scss`. Cả `home.css` và `about.css` đều tự biên dịch lại.

## Cấu trúc thư mục

```
styles.scss / styles.css     ← bài biên dịch một file
scss/
├── _variables.scss          ← partial dùng chung
├── home.scss
└── about.scss
css/
├── home.css
└── about.css                ← kết quả biên dịch cả thư mục
index.html                   ← trang demo dùng các file CSS trên
```
