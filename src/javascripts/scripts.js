import $ from 'jquery';

window.jQuery = $;
window.$ = $;

// Sticky header transition
const $nav = $('.header-main');
$nav.toggleClass('atTop');

$(() => {
  $(document).scroll(function () {
    $nav.toggleClass('isSticky', $(this).scrollTop() > $nav.height());
    $nav.toggleClass('atTop', $(this).scrollTop() < $nav.height());
  });
});
