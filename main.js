// scorrimento verso destra delle immagini
$('.next').click(function(){
// dichiarazione variabili immagine e bottone visibile
  var img_corrente = $('.visibile');
  var but_corrente = $('.acceso');
// rimozione classi visualizzazione a immagine e bottone corrente
  img_corrente.removeClass('visibile');
  but_corrente.removeClass('acceso');
// dichiarazione variabile dell'immagine e bottone seguente a quello corrente
  var prox_img = img_corrente.next('img');
  var prox_but = but_corrente.next('i');
// se immagine e bottone hanno un successivo visualizzarlo altrimenti passare al primo dello slider
  if(prox_img.length != 0 && prox_but.length !=0){
    prox_img.addClass('visibile');
    prox_but.addClass('acceso');
  }else{
    $('.foto img').first().addClass('visibile');
    $('.buttons i').first().addClass('acceso')
  }
});
// scorrimento verso destra delle immagini
$('.prev').click(function(){
// dichiarazione variabili immagine e bottone visibile
  var img_corrente = $('.visibile');
  var but_corrente = $('.acceso');
// rimozione classi visualizzazione a immagine e bottone corrente
  img_corrente.removeClass('visibile');
  but_corrente.removeClass('acceso');
  // dichiarazione variabile dell'immagine e bottone precedente a quello corrente
  var prev_img = img_corrente.prev('img');
  var prev_but = but_corrente.prev('i');
// se immagine e bottone hanno un precedente visualizzarlo altrimenti passare all'ultimo dello slider
  if(prev_img.length != 0 && prev_but.length != 0){
    prev_img.addClass('visibile');
    prev_but.addClass('acceso');
  }else{
    $('.foto img').last().addClass('visibile');
    $('.buttons i').last().addClass('acceso');
  }
});
// click sui differenti bottoni  e visualizzazione dell'immagine corrispondente
$('.but1').click(function(){
// dichiaro variabile del bottone corrente assegnando la classe acceso
  var but_corrente = $('.acceso');
// rimuovo la classe acceso dal bottone but_corrente
  but_corrente.removeClass('acceso');
// assegno la classe acceso al bottone 1, rimuvo la classe visibile a tutte le immagini e la assegno solo all'immagine corrispondente
  $('.but1').addClass('acceso');
  $('.foto img').removeClass('visibile');
  $('.foto1').addClass('visibile');
});

$('.but2').click(function(){
  var but_corrente = $('.acceso');
  but_corrente.removeClass('acceso');
  $('.but2').addClass('acceso');
  $('.foto img').removeClass('visibile');
  $('.foto2').addClass('visibile');
});

$('.but3').click(function(){
  var but_corrente = $('.acceso');
  but_corrente.removeClass('acceso');
  $('.but3').addClass('acceso');
  $('.foto img').removeClass('visibile');
  $('.foto3').addClass('visibile');
});

$('.but4').click(function(){
  var but_corrente = $('.acceso');
  but_corrente.removeClass('acceso');
  $('.but4').addClass('acceso');
  $('.foto img').removeClass('visibile');
  $('.foto4').addClass('visibile');
});
