class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.country = document.getElementById('w-country');
        this.temperature = document.getElementById('temperature');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelslike = document.getElementById('w-feelslike');
        this.windDirection = document.getElementById('w-wind-direction');
        this.wind = document.getElementById('w-local-time');
    }

    paint(weather) {
        //deconstructing API response
        const {
            temp_c,
            condition,
            humidity,
            feelslike_c,
            wind_dir
        } = weather.current;

        const {
            name,
            country,
            localtime
        } = weather.location;

        // Specify wind direction
        const getWind = direction => {
            if (direction === 'N') {
                return 'North';
            } else if (direction === 'E') {
                return 'East';
            } else if (direction === 'S') {
                return 'South';
            } else if (direction === 'W') {
                return 'West';
            } else {
                return `${wind_dir}`
            }
        }

        //change date to local time
        const getLocalTime = localTime => {
            return new Date(localTime).toLocaleTimeString();
        }
        
        //paint the ui
        this.location.textContent = name;
        this.country.textContent = country;
        this.temperature.textContent = `${temp_c} Celcius`;
        this.icon.setAttribute('src', condition.icon);
        this.humidity.textContent = `Humidity: ${humidity} %`;
        this.feelslike.textContent = `Feels like: ${feelslike_c} Celcius`;
        this.windDirection.textContent = `Wind direction: ${getWind(wind_dir)}`;
        this.wind.textContent = `${getLocalTime(localtime)}`


    }
}