$(document).ready(function () {
    $(".menu-btn").click(function () {
        $('.menu-btn').removeClass('btn-dark');
        $('.menu-btn').addClass('btn-secondary');
        $(this).removeClass('btn-secondary');
        $(this).addClass('btn-dark');
        $('.tutorial').hide();
        $('#tutorial' + $(this).attr('id').substring(8)).show();
    });
});
