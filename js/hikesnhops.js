// perform the following code on page load
$(function(){
  $('#advanced-search-toggle').on('click', function(e){
    e.preventDefault();
    $('#advanced-search-options').slideToggle();
    $('#advanced-search-toggle i').toggle();
    console.log('did ya work?');
  })

})