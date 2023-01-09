let searchBtn = document.querySelector('.btn')

let timeDate = dayjs().format('MMMM DD, YYYY H:mm a');
  $('#cityName').text(timeDate);
    function timeUpkeep () {
      setInterval()
    }

                  


function search() {
    
        searchBtn.addEventListener('click', () => {
        let city = document.querySelector('.city').value;
        console.log(city);

        localStorage.setItem('searchedCity', city);

        let savedCity = localStorage.getItem('searchedCity')

        let list = document.querySelector('#searchLog')

        let button = document.createElement('buttion')
        button.setAttribute('type', 'submit');
        button.setAttribute('class', 'btn2');
        list.append(button);
        button.textContent=savedCity


        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=16c3d00c60dcdcff5c5a0a91a5169a6a&units=imperial`)


        .then(function (response) {
        return response.json()
        })

        .then(function (data) {
            console.log(data);
            const cityEl = document.getElementById('cityName');
            const iconEl = document.getElementById('icon')
      
            cityEl.textContent = `${data.city.name}` + " " + dayjs().format('MMMM DD, YYYY H:mm a');

            let weather = []
            weather = data.list
            console.log(weather)
            
            //prints the weather icon to the page for Current weather
            let iconCode = weather[0].weather[0].icon;
            console.log(iconCode);
            let icon = 'http://openweathermap.org/img/w/' + iconCode + '.png'
            var weatherIcon = document.createElement('img');
            weatherIcon.setAttribute('src', icon);
            weatherIcon.setAttribute('alt', 'weather icon');
            iconEl.append(weatherIcon);
            
            //prints the temp to the page for Current Weather
            let temp = weather[0].main.temp;
            console.log(temp);
            let tempEl = document.getElementById('temp')
            tempEl.textContent = "Current Temperature: " + temp + " F";

            //prints the wind to the page for Current Weather
            let wind = weather[0].wind.speed;
            console.log(wind);
            let windEl = document.getElementById('wind')
            windEl.textContent = "Current Wind: " + wind + " MPH";

            //prints current humity to page
            let humidity = weather[0].main.humidity;
            console.log(humidity)
            let humidEl = document.getElementById('humid')
            humidEl.textContent = "Current Humidity: " + humidity + " %";

            
            let futureIconEl = []
            // let futureTempEl = []
            // let futureWindEl = []
            // let futureHumidEl = []
            
            for (let i = 1; i < 6; i++) {
            
                
                // futureTempEl.push(weather[i*8-1].main.temp);
                // futureWindEl.push(weather[i*8-1].wind.speed);
                // futureHumidEl.push(weather[i*8-1].main.humidity);      
                
                
                // let futureTemp = document.querySelectorAll('.temp')
                // let futureWind = document.querySelectorAll('.wind')
                // let futureHumid = document.querySelectorAll('.humid')
                
                
              
                futureIconEl.push(weather[i*8-1].weather[0].icon)                
                console.log(futureIconEl[0])
                console.log(futureIconEl[1])
                console.log(futureIconEl[2])
                console.log(futureIconEl[3])
                console.log(futureIconEl[4])

                let futureIcon1 = document.getElementById('icon1')

                let day1Icon = 'http://openweathermap.org/img/w/' + futureIconEl[0] + '.png'
                var weatherIconDay1 = document.createElement('img');
                    weatherIconDay1.setAttribute('src', day1Icon)
                    futureIcon1.append(weatherIconDay1)


                

              

                    // let img = 'http://openweathermap.org/img/w/' + futureIconEl + '.png'

                    // let fiveDayIcon = document.createElement('img')
                    // fiveDayIcon.setAttribute('src', img )
    
    
                    // futureIcon1.append(fiveDayIcon)


                              




                // futureTemp[i-1].innerText = "Temperature: " + futureHumidEl[i-1] + " F"; 
                // futureWind[i-1].innerText = "Wind: " + futureWindEl[i-1] + " MPH"; 
                // futureHumid[i-1].innerText = "Humidity: " + futureHumidEl[i-1] + " %";  
                            
            }

            
        })   

    })
}; search()
