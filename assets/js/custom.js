//Check off to-do
$('ul').on('click', 'li', function() {
  $(this).toggleClass('completed');
});

//Delete to-do
$('ul').on('click', 'span', function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

//Grabs new to-do input, Clears input, Adds new li and adds to ul
$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
   var todoText = $(this).val();
   $(this).val('');
   $('ul').append('<li><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + todoText + '</li>');
  }
});

$('.fa-plus').click(function() {
  $("input[type='text']").fadeToggle();
});