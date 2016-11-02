$(function(){
  var $temperature = $('#temperature');
  var $humidity = $('#humidity');
  var $zip = $('input[name="zip"]');

  $('form').on('submit', function(event){
    event.preventDefault();

    var zipCode = $.trim($zip.val());
    $temperature.text('Loading...');

    var request = $.ajax({
      url: '/' + zipCode,
      dataType: 'json'
    });

    request.done(function(data){
      var temperature = data.temperature;
      var humidity = data.humidity;
      $temperature.html('It is ' + temperature + '&#176; in ' + zipCode + '.');
      $humidity.html('and the humidity is of ' + humidity + '%');
    });

    request.fail(function(){
      $temperature.text('error!');
    });
  });
});
