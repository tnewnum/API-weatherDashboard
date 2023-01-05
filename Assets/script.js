let weather = new Request ('https://api.openweathermap.org/data/2.5/forecast?lat=42.1167&lon=-86.4542&appid=16c3d00c60dcdcff5c5a0a91a5169a6a')
fetch(weather)
.then((response) => response.json())
.then((data) => console.log(data));


this is my branch 