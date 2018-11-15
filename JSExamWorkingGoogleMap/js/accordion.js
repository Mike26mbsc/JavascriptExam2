$('.acc').on('click', '.acc-control', function(e){
  e.preventDefault();
  $(this)
  .next('.acc-panel')
  .not(':animated')
  .slideToggle();
});
