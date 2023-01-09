//variable that selects the btn in the search feild 
let searchBtn = document.querySelector('.btn')

//variable for the time from dayjs
let timeDate = dayjs().format('MMMM DD, YYYY H:mm a');
  $('#cityName').text(timeDate);
    function timeUpkeep () {
      setInterval()
    }

                  

//overall function that runs the whole page
function search() {
        //event listener for the click of th button and hold the user input value and saves to local storage
        searchBtn.addEventListener('click', () => {
        let city = document.querySelector('.city').value;
        console.log(city);
        localStorage.setItem('searchedCity', city);

        //gets searched city from local storage and displays it on the page as a button under the search section
        let savedCity = localStorage.getItem('searchedCity')
        let list = document.querySelector('#searchLog')
        let button = document.createElement('buttion')
        button.setAttribute('type', 'submit');
        button.setAttribute('class', 'btn2');
        list.append(button);
        button.textContent=savedCity

        //fetch request to the openweathermap API
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=16c3d00c60dcdcff5c5a0a91a5169a6a&units=imperial`)

        //then function that returns the API call into json
        .then(function (response) {
        return response.json()
        })
        //then it turns the json response into a variable "data"
        .then(function (data) {
            console.log(data);
            const cityEl = document.getElementById('cityName');
            const iconEl = document.getElementById('icon')
            
            //displays the city searched from the API along with current date and time from JS
            cityEl.textContent = `${data.city.name}` + " " + dayjs().format('MMMM DD, YYYY H:mm a');

            //establisishes weather as an array and then simplifies data.list to weather
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

            //establishes need variables as arrays
            let futureIconEl = []
            let futureTempEl = []
            let futureWindEl = []
            let futureHumidEl = []
            let futureDateEl = []
            
            //for loop to loop through the data in the API to get every 5days
            for (let i = 1; i < 6; i++) {
            
                //pushing the infor that the foor loop got by taking the index *8 - 7. Index starts at 1 and next time is 2
                futureTempEl.push(weather[i*8-1].main.temp);
                futureWindEl.push(weather[i*8-1].wind.speed);
                futureHumidEl.push(weather[i*8-1].main.humidity);
                futureDateEl.push(weather[i*8-1].dt)      
                
                //getting classes from the HTML to use to print info to
                let futureTemp = document.querySelectorAll('.temp')
                let futureWind = document.querySelectorAll('.wind')
                let futureHumid = document.querySelectorAll('.humid')
                let futureDate = document.querySelectorAll('.date')
                
                //prints temp, wind, humidity, and dates to the page for the future weather 
                futureTemp[i-1].innerText = "Temperature: " + futureHumidEl[i-1] + " F"; 
                futureWind[i-1].innerText = "Wind: " + futureWindEl[i-1] + " MPH"; 
                futureHumid[i-1].innerText = "Humidity: " + futureHumidEl[i-1] + " %";  
                futureDate[i-1].innerText = futureDateEl[i-1]
                
                //all the below displays the future weather icons to the page 
                futureIconEl.push(weather[i*8-1].weather[0].icon)                
                console.log(futureIconEl[0])
                console.log(futureIconEl[1])
                console.log(futureIconEl[2])
                console.log(futureIconEl[3])
                console.log(futureIconEl[4])

               let futureIcon = document.querySelectorAll('.icon')

                let day1Icon = 'http://openweathermap.org/img/w/' + futureIconEl[0] + '.png'
                var weatherIconDay1 = document.createElement('img');
                    weatherIconDay1.setAttribute('src', day1Icon)
                    futureIcon[i-1].append(weatherIconDay1)          
                                                   
            }

            
        })   

    })
//calls the search function that most of the code is in
}; search()
