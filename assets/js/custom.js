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

$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
   //Grabs new to-do input
   var todoText = $(this).val();
   //Clears input
   $(this).val('');
   //Adds new li and adds to ul
   $('ul').append('<li><span>X</span> ' + todoText + '</li>');
  }
});

