$(document).ready(function () {
  $(".side_bar_button").click(function () {
    $(this).toggleClass("is_active");
    $(this).next().slideToggle();
  });
})