




let convertToFariheit = (data) => {
    let toF = ((data - 273.15) * 9/ 5) + 32;
    console.log("new temp: ", toF);    
    return toF;
    
}


let cardinalDirection = (data) => {
    var val = Math.floor((data / 22.5) + 0.5);
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    let direction = arr[(val % 16)];
    return direction;

}


let data1 = 'Omaha';


let getWeather = (data) => {
    let query = data;
    let weatherurl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=fe2e25be076abfb7b948ebb4743d71d2`;
    console.log(weatherurl);

    fetch(weatherurl)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject(response);
            }
        }).then((data) => {
            
            //log what comes back 
            // console.log(data);

            //variables 
            let country = data.sys.country;
            let cityName = data.name;
            let humidity = data.main['humidity'];
            let temp = data.main['temp'];
            let weatherdesc = data.weather[0].description;
            let windSpeed = Math.round(data.wind['speed']);
            let windDirection = data.wind['deg'];
            let direction = cardinalDirection(windDirection);
            let tempChange = Math.round(convertToFariheit(temp));

            // log our varaiables
            console.log("humidity: ", humidity);
            console.log("city Name: ", cityName);
            console.log("country: ", country);
            console.log("temp: ", temp);
            console.log("description: ", weatherdesc);
            console.log('Wind Speed: ', windSpeed);
            console.log('Wind direction: ', windDirection);            
            console.log('Converted Temp: ', tempChange);            
            console.log('Wind Direction: ', direction);


            //write to our table
            let tableData = document.getElementById('dataEntry').innerHTML;
        document.getElementById("dataEntry").insertAdjacentHTML("afterend",
            "<td>" + cityName  + "</td>" +
                "<td>" + country  + "</td>" +
                "<td>" + tempChange + "&deg;</td>" +
                "<td>" + weatherdesc  + "</td>" +
                "<td>" + windSpeed  + " MPH</td>" +
                "<td>" + direction  + "</td>" +
                "<td>" + humidity  + " %</td>"
                );




        //     <tr>
        //     <th>Location Name</th>
        //     <th>humidity</th>
        //     <th>Temperature</th>
        //     <th>Wind Speed</th>
        //     <th>Wind Direction</th>
        //     <th>Description</th>
        //   </tr>
          
          
        //   <tr>
        //       <td>Omaha, Ne</td>
        //       <td>75%</td>
        //       <td>73%</td>
        //       <td>3.6 MPH</td>
        //       <td>W</td>
        //       <td>Overcast Clouds</td>
        //   </tr>



    })
        .catch((error) =>{
            console.error(error);
        }).finally(() => {
        console.log('Successfully completed!')
        });

};

let getWeatherButton = document.querySelector('button');

getWeatherButton.addEventListener("click", getWeather());




getWeatherDataValue = () => {
 let data = document.getElementById('data').value;
    getWeather(data);
}

