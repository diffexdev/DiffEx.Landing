// Sticky header transition
var $nav = $(".header-main");
$nav.toggleClass('atTop')


$(function () {
  $(document).scroll(function () {
    $nav.toggleClass('isSticky', $(this).scrollTop() > $nav.height());
	$nav.toggleClass('atTop', $(this).scrollTop() < $nav.height())
  });
});