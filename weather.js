class Weather {
    constructor(city) {
        this.apiKey = '3e64cb76bac3464dbb3164200191602 ';
        this.city = city;  
    }

//Fetch wheater from the API
async getWeather() {
    const response = await fetch(`https://api.apixu.com/v1/current.json?key=${this.apiKey}&q=${this.city}`);
    const resposneData = await response.json();

    return resposneData;
} 

changeLocation(city) {
    this.city = city;
}
}
