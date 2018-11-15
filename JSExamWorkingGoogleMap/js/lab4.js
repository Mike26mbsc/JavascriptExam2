function theregister($scope, $http) {
  $http.get('data/lab4.json')
  .success(function(data) { $scope.register = data.register; })
  .error(function(data) { console.log('error'); });
}

$(function() {
    $('table').hide().each(function(index) {
    $(this).delay(450).fadeIn(2000);
  });
  $list = $('table');
  $list.on('click', 'tr', function() {
    var $this = $(this);
    $this.animate({
      opacity: 0.0
    }, 1000, 'swing', function() {
      $this.remove();
    });
  });
});
