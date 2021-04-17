// get longitude and latitude of location

// after page loads we get the location
window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description')
    let temperatureDegree = document.querySelector('.temperature-degree')
    let locationTimezone = document.querySelector('.location-timezone')

    //if the user has location services allowed then we find them with the users lat and longitude, pop up on browser
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://corsanywhere.herokuapp.com/';

            const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=73d94735253c37eef5165eb09f430c33`;

            // gets information from server
            fetch(api)
            //then we can do something with the data
                .then(response =>{
                    return response.json()
                })
                .then(data => {
                    console.log(data)
                    // {} cool way to shorten syntax and pull out all info from an array
                    const {description} = data.weather;
                    const {temp} = data.main;
                    //set dom elements
                })
        });
        
    }
});