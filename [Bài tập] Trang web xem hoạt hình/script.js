var videoPlayer = document.getElementById('videoPlayer');
var youtubePlayer = document.getElementById('youtubePlayer');
var list = document.getElementById('videoList');
var items = Array.prototype.slice.call(list.querySelectorAll('.video-item'));

function formatViews(n) {
    return Number(n).toLocaleString('vi-VN');
}

// Phát video được chọn trong danh sách
function play(item) {
    items.forEach(function (i) { i.classList.remove('active'); });
    item.classList.add('active');

    var src = item.dataset.src;
    if (item.dataset.type === 'youtube') {
        videoPlayer.pause();
        videoPlayer.classList.add('hidden');
        youtubePlayer.src = 'https://www.youtube-nocookie.com/embed/' + src + '?rel=0&autoplay=1';
        youtubePlayer.classList.remove('hidden');
    } else {
        youtubePlayer.src = '';
        youtubePlayer.classList.add('hidden');
        videoPlayer.classList.remove('hidden');
        videoPlayer.play();
    }

    document.getElementById('videoTitle').textContent = item.querySelector('.item-title').textContent;
    document.getElementById('videoViews').textContent = formatViews(item.dataset.views);
    document.getElementById('videoDesc').textContent = item.dataset.desc;

    if (window.innerWidth <= 992) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

items.forEach(function (item) {
    item.querySelector('a').addEventListener('click', function (e) {
        e.preventDefault();
        play(item);
    });
});

// Sắp xếp: mới cập nhật / xem nhiều nhất
document.getElementById('sortSelect').addEventListener('change', function () {
    var by = this.value;
    items.sort(function (a, b) {
        if (by === 'views') return b.dataset.views - a.dataset.views;
        return b.dataset.date.localeCompare(a.dataset.date);
    });
    items.forEach(function (item) { list.appendChild(item); });
});

// Tìm kiếm phim theo tên (không phân biệt dấu, hoa/thường)
function normalize(s) {
    return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd');
}
document.getElementById('searchInput').addEventListener('input', function () {
    var q = normalize(this.value.trim());
    var found = 0;
    items.forEach(function (item) {
        var match = normalize(item.querySelector('.item-title').textContent).indexOf(q) !== -1;
        item.classList.toggle('hidden', !match);
        if (match) found++;
    });
    document.getElementById('noResult').style.display = found ? 'none' : 'block';
});
