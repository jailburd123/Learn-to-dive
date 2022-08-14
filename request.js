

// set two variables to 5 and 6

let numb1 = 5;
let numb2 = 6;
let hello = 'Hello World!';

console.log(numb1);
console.log(numb2);

console.log(numb1 + numb2);
console.log(hello);
console.log(hello + numb1);




let convertToFariheit = (data) => {

    let toF = ((data - 273.15) * 9/ 5) + 32;

    console.log("new temp: ", toF);
    return toF;
    
}


let cardinalDirection = (data) => {
    var val = Math.floor((data / 22.5) + 0.5);
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    let direction = arr[(val % 16)];
    console.log(direction);
    return direction;

}   

  
let weatherurl = 'https://api.openweathermap.org/data/2.5/weather?q=Omaha&APPID=fe2e25be076abfb7b948ebb4743d71d2';


let getWeather = () => {
    fetch(weatherurl)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject(response);
            }
        }).then((data) => {
            console.log(data);
            let cityName = data.name;
            console.log("city Name: ", cityName);
            let country = data.sys.country;
            console.log("country: ", country);
            let humidity = data.main['humidity'];
            console.log("humidity: ", humidity);
            let temp = data.main['temp'];
            console.log("temp: ", temp);
            let weatherdesc = data.weather[0].description;
            console.log("description: ", weatherdesc);
            let windSpeed = data.wind['speed'];
            console.log('Wind Speed: ', windSpeed);
            let windDirection = data.wind['deg'];
            console.log('Wind direction: ', windDirection);


            convertToFariheit(temp);
            cardinalDirection(windDirection);

    })
        .catch((error) =>{
            console.error(error);
        }).finally(() => {
        console.log('Successfully completed!')
        });

};

getWeather();