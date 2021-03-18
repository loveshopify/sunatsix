$(document).ready(function () {
  $(".side_bar_button").click(function () {
    $(this).toggleClass("is_active");
    $(this).next().slideToggle();
  });
  $("#BtnMobileMenu").click(function() {
    $(".mobile-nav-wrapper").addClass("is--active");
  });
  $(".mobile-menu-close").click(function() {
    $(".mobile-nav-wrapper").removeClass("is--active");
  });
})