import $ from 'jquery';

require('jquery-validation');

window.jQuery = $;
window.$ = $;

// Sticky header transition
const $nav = $('.header-main');
const $navImage = $('.navbar-image');
const $headerMenu = $('.header-menu');
$nav.toggleClass('atTop');
$headerMenu.toggleClass('menuAtTop');

$('#submittedText').hide();

let mobile = window.matchMedia('(min-width: 991px)');
if (!mobile.matches) {
  $nav.toggleClass('atTop');
  $headerMenu.toggleClass('menuAtTop');
}

$(() => {
  $(document).scroll(function () {
    mobile = window.matchMedia('(min-width: 991px)');
    if (mobile.matches) {
      $nav.toggleClass('atTop', $(this).scrollTop() < $nav.height());
      $headerMenu.toggleClass('menuAtTop', $(this).scrollTop() < $nav.height());
      $navImage.toggleClass('not-visable', $(this).scrollTop() < $nav.height());
    }

    $navImage.toggleClass('not-visable', $(this).scrollTop() < $nav.height());
    $nav.toggleClass('isSticky', $(this).scrollTop() > $nav.height());
  });
});

// Dynamic image hover
$('.tile')
  .on('mouseover', function () {
    $(this).children('.photo').css({
      transform: `scale(${$(this).attr('data-scale')})`,
      'background-color': 'rgba(19, 34, 79, 0.71)',
      'z-index': '100',
      'border-radius': '20px',
    });
  })
  .on('mouseout', function () {
    $(this).children('.photo').css({
      transform: 'scale(1)', 'background-color': 'transparent', 'z-index': '0', 'border-radius': '20px',
    });
  })
  .on('mousemove', function (e) {
    $(this).children('.photo').css({ 'transform-origin': `${((e.pageX - $(this).offset().left) / $(this).width()) * 100}% ${((e.pageY - $(this).offset().top) / $(this).height()) * 100}%` });
  })
  .each(function () {
    $(this)
      .append('<div class="photo"></div>')
      .children('.photo').css({ 'background-image': `url(${$(this).attr('data-image')})` });
  });

// Handle form submit
$('#contactForm').validate({
  submitHandler() {
    $('#contactForm').hide();
    $('#notSubmittedText').hide();
    $('#submittedText').show();
  },
});

// Get current token sale data
$(() => {
  $.ajax({
    type: 'GET',
    url: 'https://api.diffex.io/api/v1/ICO',
    dataType: 'json',
    success(result) {
      const numberRaised = `Raised so far <span>${result} ETH</span>`;
      $('#icoRaised').html(numberRaised);
      $('#raisedProgress').html(`<div class='progress-percent bg-grad' style="width: ${(result / 30) * 100}%"></div>`);
    },
    error() {
      // Do nothing
    },
  });
});
