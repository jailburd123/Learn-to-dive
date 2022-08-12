

// set two variables to 5 and 6

let numb1 = 5;
let numb2 = 6;
let hello = 'Hello World!';

console.log(numb1);
console.log(numb2);

console.log(numb1 + numb2);
console.log(hello);
console.log(hello + numb1);


let getData = async () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Omaha&APPID=fe2e25be076abfb7b948ebb4743d71d2')
    .then((response) => 
         response.json()
    ).then((data) => 
    console.log(data)
    ).catch((err) => {
        console.log('Error: ', err);
    });
  
};


// getData();
   

async function getWeatherData(url) {
    const response = await fetch(url);
  
    return response.json();
  }
  
  let url = 'https://api.openweathermap.org/data/2.5/weather?q=Omaha&APPID=fe2e25be076abfb7b948ebb4743d71d2';
  const data = getWeatherData(url);
  
  console.log({ data })