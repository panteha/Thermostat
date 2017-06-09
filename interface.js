$(document).ready(function(){
  var thermostat = new Thermostat();
  updateTemperature();
  updatePowerSavingMode();
  updateEnergyUsage();
  displayWeather("London");
  getTemperature();

  $('#up-button').click(function(){
    thermostat.up();
    updateTemperature();
    updateEnergyUsage();
  });

  $('#down-button').click(function() {
    thermostat.down();
    updateTemperature();
    updateEnergyUsage();
  });

  $("#power-saving-mode-button").click(function() {
    thermostat.switchPowerSavingMode();
    updatePowerSavingMode();
  });

  $("#reset-button").click(function() {
    thermostat.resetTemperature();
    updateTemperature();
    updatePowerSavingMode();
    updateEnergyUsage();
  });

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val()
    displayWeather(city);
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.askEnergyUsage());
  };

  function updatePowerSavingMode() {
    if(thermostat.powerSavingMode){
      $('#power-saving-mode-info').text("On");
    } else {
      $('#power-saving-mode-info').text("Off");
    }
  };

  function updateEnergyUsage() {
    $('#energy-usage').text(thermostat.energyUsage);
  };

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-city-temperature').text(data.main.temp);
    });
  }


  function getTemperature() {
    var url = 'http://localhost:9292/temperature';
    $.get(url, function(data) {
      $('#temperature').text(data);
      // debugger;
    });
  }



});
