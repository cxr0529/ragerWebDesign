$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // For Firefox and Safari 
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
  
  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 992) {
      $("#navbarNav").collapse('toggle');
    }
  });
});