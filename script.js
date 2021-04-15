// get longitude and latitude of location

// after page loads we get the location
window.addEventListener('load', ()=> {
    let long;
    let lat;

    //if the user has location services allowed then we find them with the users lat and longitude, pop up on browser
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude
            lat = position.coords.latitude
        });
    }
});