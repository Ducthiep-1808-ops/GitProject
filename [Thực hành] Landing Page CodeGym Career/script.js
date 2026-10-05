$(function () {
    // Hiệu ứng xuất hiện khi cuộn (WOW.js có sẵn trong MDB)
    new WOW().init();

    // Đóng menu mobile sau khi chọn một mục
    $('.navbar-nav .nav-link, .navbar .btn').on('click', function () {
        $('#mainNav').collapse('hide');
    });

    // Đánh dấu mục menu theo section đang xem
    $('body').scrollspy({ target: '#mainNav', offset: 80 });

    // Nút lên đầu trang
    $(window).on('scroll', function () {
        $('#backToTop').toggleClass('show', $(this).scrollTop() > 400);
    });

    // Bộ đếm số liệu khi section thống kê xuất hiện
    var counted = false;
    function runCounters() {
        if (counted) return;
        var top = $('.stats').offset().top - $(window).height() + 100;
        if ($(window).scrollTop() < top) return;
        counted = true;
        $('.counter').each(function () {
            var $el = $(this);
            $({ n: 0 }).animate({ n: $el.data('target') }, {
                duration: 1500,
                step: function (now) { $el.text(Math.ceil(now)); }
            });
        });
    }
    $(window).on('scroll', runCounters);
    runCounters();

    // Captcha ngẫu nhiên
    var a = Math.floor(Math.random() * 9) + 1;
    var b = Math.floor(Math.random() * 9) + 1;
    $('#captchaQuestion').text(a + ' + ' + b);

    // Kiểm tra form đăng ký
    $('#registerForm').on('submit', function (e) {
        e.preventDefault();
        var form = this;
        var captcha = form.querySelector('#captcha');
        captcha.setCustomValidity(Number(captcha.value) === a + b ? '' : 'wrong');

        $(form).addClass('was-validated');
        if (!form.checkValidity()) return;

        var name = $('#fullName').val().trim();
        $(form).closest('.card-body').html(
            '<div class="text-center py-4">' +
            '<i class="fas fa-check-circle fa-4x accent-text mb-3"></i>' +
            '<h5 class="font-weight-bold">Cảm ơn ' + $('<span>').text(name).html() + '!</h5>' +
            '<p class="mb-0">CodeGym sẽ liên hệ tư vấn cho bạn trong thời gian sớm nhất.</p>' +
            '</div>'
        );
    });
});
