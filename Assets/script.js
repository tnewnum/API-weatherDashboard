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

        let p = document.createElement('p')

        list.append(p);
        p.textContent=savedCity


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
            weatherIcon.setAttribute('class','weatherImg');
            weatherIcon.setAttribute('alt', 'weather icon');
            iconEl.append(weatherIcon);
            
            //prints the temp to the page for Current Weather
            let temp = weather[0].main.temp;
            console.log(temp);


            let wind = weather[0].wind.speed;
            console.log(wind);
            let humidity = weather[0].main.humidity;
            console.log(humidity)

        

            // for (let i = 1; i < 6; i++) {



            // // console.log(weather[i*8-1].weather[0].icon);
            // // console.log(weather[i*8-1].main.temp);
            // // console.log(weather[i*8-1].wind.speed);
            // // console.log(weather[i*8-1].main.humidity);
            // }
        })   

    })
}; search()
