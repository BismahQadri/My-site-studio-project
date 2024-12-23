(function ($, Drupal) {
  document.addEventListener('DOMContentLoaded', () => {
    const hamburger = $('.hamburger');
    hamburger.click(() => {
      document.querySelector('.hamburger').classList.toggle('active')
      document.querySelector('.nav').classList.toggle('active')
    });
  });    
})(jQuery, Drupal);