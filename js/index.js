$(document).ready(function () {
    $('.tutorial').hide();
    $('#tutorial001').show();
    $('.menu-btn').removeClass('btn-dark');
    $('.menu-btn').addClass('btn-secondary');
    $('#menu-btn001').removeClass('btn-secondary');
    $('#menu-btn001').addClass('btn-dark');

    $(".menu-btn").click(function () {
        $('.menu-btn').removeClass('btn-dark');
        $('.menu-btn').addClass('btn-secondary');
        $(this).removeClass('btn-secondary');
        $(this).addClass('btn-dark');
        $('.tutorial').hide();
        $('#tutorial' + $(this).attr('id').substring(8)).show();
    });
});
