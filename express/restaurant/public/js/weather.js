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
    var weather = $("<div>", {'class': 'bg-success chat-text'})
    weather.html(`
      <p id="name" ><strong>Weather in ${data.name}: </strong></p>
      <p id="temp" ><strong>Temperature: ${data.main.temp}C&deg; </strong></p>
      <p id="humidity" ><strong>Humidity: ${data.main.humidity}%</strong></p>
      <p id="wind" ><strong>Wind Speed: ${data.wind.speed}Km/h</strong></p>
      `);
    $('.weather-display').prepend(weather);
    $('.weather-display p').last().remove();
  }
});
