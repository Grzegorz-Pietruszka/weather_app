//init storage 
const storage = new Storage();
// get store location
const weatherLocation = storage.getLocation();
// init weather 
const weather = new Weather(weatherLocation.city);
// init ui
const ui = new UI();

//get weather on dom load
document.addEventListener('DOMContentLoaded', getWeather);

//Change location and display it
document.getElementById('w-change-btn').addEventListener('click', e => {
    const city = document.getElementById('city').value;
    // change location
    weather.changeLocation(city);
    //setItem in Local Storage
    storage.setLocation(city);
    //display changed weather
    getWeather();
    //close modal
    $('#locModal').modal('hide');
})
function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);
            console.log(results);
        })
        .catch(err => console.log(err));
}
