![React Badge](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![JavaScript Badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![HTML5 Badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

# Weather App

## Description

This React application fetches and displays the current weather for a given city using the WeatherAPI. It also utilizes geolocation to automatically fetch and display the weather for the user's current location, if permission is granted. The application provides a user-friendly interface for entering a city name and retrieving weather information, including temperature, humidity, and weather conditions.

## Table of Contents

- **[Installation](#installation)**
- **[Deployment](#deployment)**
- **[Resources](#resources)**
- **[Usage](#usage)**
- **[Contributing](#contributing)**
- **[Questions](#questions)**
- **[License](#license)**

## Installation

To install the necessary dependencies, run the following command:
```
npm install 
```

You need to obtain your own API key for the WeatherAPI. Create a `.env` file in the root directory of your project and add your API key:

```
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

## Deployment

Visit the live site here: [Weather App](https://pav85.github.io/react-weather-app/)

Here's a preview of the application:

![Weather App Showcase](/src/assets/screenshot1.png)

![Weather App Showcase](/src/assets/screenshot2.png)

## Resources

- [WeatherAPI](https://www.weatherapi.com/) for fetching current weather data.
- [React Geolocated](https://www.npmjs.com/package/react-geolocated) for obtaining the user's current location.
- [Axios](https://axios-http.com/) for making HTTP requests.
- [React Bootstrap](https://react-bootstrap.github.io/) for styling and UI components.

## Usage

To start the application, run the following command:

```
npm start
```

Enter a city name in the input field and press "Enter" or click on "Get Weather" to fetch and display the weather information.

## Contributing

Fork this repository and submit a pull request to contribute.

## Questions

For inquiries, please open an issue or contact me at pawel.werbowy@gmail.com. 
Check out more of my work at [GitHub - Pav85](https://github.com/Pav85).

## License

This project is licensed under the MIT license.

