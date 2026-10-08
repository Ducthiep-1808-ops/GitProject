# Phân tích cấu trúc trang web: VnExpress (https://vnexpress.net)

Ảnh chụp trang gốc (ngày 08/10/2026), nằm trong thư mục `screenshots/`:

- `vnexpress-header-content.png`: Header, Navigation Menu và phần đầu Content Section
- `vnexpress-footer.png`: Footer

## 1. Header

- Nằm trên cùng, nền trắng, có đường kẻ mảnh ngăn cách với menu.
- **Bên trái:** logo VnExpress kèm khẩu hiệu "Báo tiếng Việt nhiều người xem nhất". Tiếp theo là vị trí và thời tiết (Hà Nội, 25°), rồi ngày hiện tại.
- **Bên phải:** các liên kết nhanh "Mới nhất", "Tin theo khu vực", "International", nút "Đăng nhập" và biểu tượng thông báo.
- **Bố trí:** các phần tử nằm trên một hàng, hai nhóm trái và phải đẩy về hai phía. Có thể làm bằng Flexbox với `justify-content: space-between`.

## 2. Navigation Menu

- Nằm ngay dưới header, là một hàng ngang chứa khoảng 20 chuyên mục: Thời sự, Thế giới, Kinh doanh, Khoa học công nghệ, Góc nhìn, Bất động sản, Sức khỏe, Giải trí, Thể thao...
- Đầu menu có biểu tượng trang chủ.
- Khi không đủ chỗ, menu cho cuộn ngang thay vì xuống dòng.
- **Bố trí:** Flexbox theo hàng ngang, khoảng cách giữa các mục đều nhau, `overflow-x: auto`.

## 3. Content Section

- Nội dung nằm trong một khung trắng ở giữa trang, rộng khoảng 1130px. Hai bên là nền (đôi khi là quảng cáo).
- **Tin nổi bật:** ảnh lớn bên trái (khoảng 2/3 chiều rộng), tiêu đề lớn và đoạn tóm tắt bên phải.
- **Hàng tin phụ:** bên dưới là 3 cột bằng nhau. Mỗi cột có tiêu đề, ảnh nhỏ hoặc đoạn tóm tắt. Cột thứ 3 thường là bài "Góc nhìn" có ảnh tác giả.
- **Các khối chuyên mục:** tiếp theo là danh sách tin bên trái và các khối chuyên mục bên phải (Kinh doanh, Thế giới...). Mỗi khối có tiêu đề màu đỏ đậm và các chuyên mục con nằm ngang.
- **Bố trí:** chia cột bằng CSS Grid hoặc Flexbox. Tiêu đề bài dùng font có chân (serif), phần mô tả dùng font không chân (sans-serif) màu xám.

## 4. Footer

- Ngăn cách với nội dung bằng một đường kẻ xám dày.
- **Phần trên:** nhiều cột liên kết đến các chuyên mục (Trang chủ, Thời sự, Thế giới...). Cột cuối cùng là "Tải ứng dụng", "Liên hệ tòa soạn" và "Liên hệ quảng cáo", dạng nút.
- **Phần giữa:** logo "Báo điện tử VnExpress" bên trái, các liên kết "Điều khoản sử dụng", "Chính sách bảo mật", "Cookies", "RSS" bên phải.
- **Phần dưới:** 3 cột gồm thông tin cơ quan chủ quản và giấy phép, thông tin tổng biên tập và địa chỉ liên hệ, dòng bản quyền "© 1997-2026. Toàn bộ bản quyền thuộc VnExpress".
- **Bố trí:** Grid nhiều cột cho phần liên kết, Flexbox `space-between` cho các hàng phía dưới.

## Nhận xét chung

Trang được bố trí theo chiều dọc, đúng thứ tự Header → Menu → Content → Footer. Toàn bộ nội dung được giới hạn trong một khung có chiều rộng cố định và căn giữa, nên dễ đọc trên màn hình lớn. Màu chủ đạo là trắng, xám và đỏ đậm (màu thương hiệu). Bố cục ưu tiên tin quan trọng nhất ở đầu trang với ảnh lớn, các tin ít quan trọng hơn được xếp thành cột và danh sách nhỏ dần.

## Bố cục dựng lại

File `index.html` và `style.css` dựng lại bố cục trên bằng HTML và CSS (Flexbox và Grid). Trang dựng lại dùng tên giả định "TinNhanh" và khung xám thay cho ảnh, vì đề chỉ yêu cầu tập trung vào bố cục.
