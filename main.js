$('.next').click(function(){
  var img_corrente = $('.visibile');
  img_corrente.removeClass('visibile');
  var prox_img = img_corrente.next('img');

  if(prox_img.length != 0){
    prox_img.addClass('visibile');
  }else{
    $('.foto img').first().addClass('visibile');
  }
});

$('.prev').click(function(){
  var img_corrente = $('.visibile');
  img_corrente.removeClass('visibile');
  var prev_img = img_corrente.prev('img');

  if(prev_img.length != 0){
    prev_img.addClass('visibile');
  }else{
    $('.foto img').last().addClass('visibile');
  }
});
