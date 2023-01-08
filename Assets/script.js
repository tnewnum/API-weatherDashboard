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

        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=16c3d00c60dcdcff5c5a0a91a5169a6a&units=imperial`)


        .then(function (response) {
        return response.json()
        })
        .then(function (data) {
        console.log(data);
        let weather = []
         weather = data.list
        console.log(weather)

                  for (let i = 1; i < 6; i++) {
                        


            console.log(weather[i*8-1].weather);
            console.log(weather[i*8-1].main.temp);
            console.log(weather[i*8-1].wind.speed);
            console.log(weather[i*8-1].main.humidity);
        }
        })   

    })
}; search()
