import $ from 'jquery';
import Clipboard from 'clipboard';

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
      const rounded = result.toFixed(4);
      const numberRaised = `Raised so far: <span>${rounded} ETH</span>`;
      $('#icoRaised').html(numberRaised);
      $('#raisedProgress').html(`<div class='progress-percent bg-grad' style="width: ${(result / 30) * 100}%"></div>`);
    },
    error() {
      // Do nothing
    },
  });
});

// Location Detection
// Get current token sale data
// function secComplianceCheck() {
//   $.getJSON('https://api.db-ip.com/v2/pb6531b8e3bd6e5da1ac7779bc9147d873eddec5/self', (data) => {
//     if (data.countryCode === 'US') $('#sec-compliance-button')[0].click();
//     else $('#how-to-buy-button')[0].click();
//   });
// }

$('[id=buyNow]').on('click', () => {
  // secComplianceCheck();
  $('#how-to-buy-button')[0].click();
});

$('#ethInput').keyup(() => {
  const inputValue = $('#ethInput').val();
  let dffx = 0;
  if (inputValue >= 1) dffx = inputValue * 1012500;
  else if (inputValue < 1 && inputValue >= 0.5) dffx = inputValue * 877500;
  else if (inputValue < 0.5 && inputValue >= 0.25) dffx = inputValue * 810000;
  else if (inputValue < 0.25 && inputValue >= 0.1) dffx = inputValue * 776250;
  else if (inputValue < 0.1 && inputValue >= 0.02) dffx = inputValue * 675000;
  else dffx = 0;

  $('#dffxToReceive').html(`${dffx.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} DFFX`);
});

// Clipboard JS
$(() => {
  // eslint-disable-next-line no-new
  new Clipboard('.clipboardButton');
});
