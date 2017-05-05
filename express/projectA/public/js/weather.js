$(() => {
  $.getJSON('weather', updateWeather);

  $('#weather-form').submit((e) => {
    e.preventDefault();
    $.post('weather', {
      city: $('#weather-city').val()
    }, updateWeather);

    $('#weather-city').val('');
    $('#weather-city').focus();
  }); // handle weather form

  function updateWeather(data) {
    var weather = $("<p>", {'class': 'bg-success chat-text'})
    weather.html('<strong>'+ data.city +'</strong>');
    $('.weather-display').prepend(weather);
    $('.weather-display p').last().remove();
  }
});
