$(document).ready(function(){
    $("#getWeatherButton").click(function(){
        var city = $("#cityInput").val();

        var key = 'bea64792551047ca67bb92297d8c3846'; 

        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather',
            dataType: 'json',
            type: 'GET',
            data: {q: city, appid: key},

            success: function(data){
                var content = '';
                content += '<p><b>Temperature: ' + Math.round(data.main.temp - 273.15) + '&deg;C</b></p>';
                content += '<p><b>Humidity: ' + data.main.humidity + '</b></p>';
                content += '<p><b>Weather: ' + data.weather[0].main + ' [' + data.weather[0].description + ']</b></p>';
                content += '<div class="weather-icon"><img src="http://openweathermap.org/img/wn/' + data.weather[0].icon + '.png"></div>';
                $("#weatherInfo").html(content);
            }
        });

        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/forecast',
            dataType: 'json',
            type: 'GET',
            data: {q: city, appid: key},

            success: function(data){
                var forecast = '<h5 class="mt-3">Weather Forecast:</h5>'; 
                for (var i = 0; i < 6; i++) {
                    var date = new Date(data.list[i].dt * 1000); 
                    var icon = data.list[i].weather[0].icon;
                    var temp = Math.round(data.list[i].main.temp - 273.15);
                    forecast += '<div class="col-md-2">'; 
                    forecast += '<div class="day">';
                    forecast += '<p>' + date.toDateString() + '</p>';
                    forecast += '<div class="weather-icon"><img src="http://openweathermap.org/img/wn/' + icon + '.png"></div>';
                    forecast += '<p><b>' + temp + '&deg;C</b></p>';
                    forecast += '</div>';
                    forecast += '</div>';
                }
                $("#forecastInfo").html(forecast);
            }
        });
    });
});
