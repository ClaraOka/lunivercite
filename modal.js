//1. when we click on image we want to show lightboxe
//2. we want to grab the mage clocked and show the modal
//3 we want that when we clock the close button, we hide the modal
//4.our link dosent follow the href

$('.photos a').on ('click', function(){

//var currentImage = $(this).html()
//we grab the modal and set it to the current Image we just clicked on
//$('.modal-content').html(currentImage)

  $('div.modal-content').html(`<p>${$(this).data('content')}</p>`)

 $('.modal').fadeIn(500)
  return false
})

$('.modal-close, .modal-background').on('click', function(){
  $('.modal').fadeOut(500)
  return false
})
