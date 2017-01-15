$(document).ready(function() {
  $('.ui.vertical.menu').hide();
  $('.right.menu.open').on("click", function(e) {
    e.preventDefault();
    $('.ui.vertical.menu').toggle();
  });
  $('.small.modal')
    .modal('show');
  $('.ui.dropdown').dropdown();
  $('.ui.card .image').dimmer({
    on: 'hover'
  });
  $('.ui.rating').rating({
    maxRating: 5
  });
  $('.button.view').on('click', (function() {
    $('#album').fadeOut("slow")
  }));
  $('.top.menu .item').tab();
});

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
