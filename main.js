$('.next').click(function(){

  var img_corrente = $('.visibile');
  var but_corrente = $('.acceso');

  img_corrente.removeClass('visibile');
  but_corrente.removeClass('acceso');

  var prox_img = img_corrente.next('img');
  var prox_but = but_corrente.next('i');

  if(prox_img.length != 0 && prox_but.length !=0){
    prox_img.addClass('visibile');
    prox_but.addClass('acceso');
  }else{
    $('.foto img').first().addClass('visibile');
    $('.buttons i').first().addClass('acceso')
  }
});

$('.prev').click(function(){

  var img_corrente = $('.visibile');
  var but_corrente = $('.acceso');

  img_corrente.removeClass('visibile');
  but_corrente.removeClass('acceso');

  var prev_img = img_corrente.prev('img');
  var prev_but = but_corrente.prev('i');

  if(prev_img.length != 0 && prev_but.length != 0){
    prev_img.addClass('visibile');
    prev_but.addClass('acceso');
  }else{
    $('.foto img').last().addClass('visibile');
    $('.buttons i').last().addClass('acceso');
  }
});
