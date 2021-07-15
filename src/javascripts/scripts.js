import $ from 'jquery';

window.jQuery = $;
window.$ = $;

// Sticky header transition
const $nav = $('.header-main');
const $navImage = $('.navbar-image');
$nav.toggleClass('atTop');

$(() => {
  $(document).scroll(function () {
    $navImage.toggleClass('not-visable', $(this).scrollTop() < $nav.height());
    $nav.toggleClass('isSticky', $(this).scrollTop() > $nav.height());
    $nav.toggleClass('atTop', $(this).scrollTop() < $nav.height());
  });
});
