import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios"; // used axios to make http requests
import { useGeolocated } from "react-geolocated"; // used react-geolocated to get user's location
import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
import WeatherDisplayCard from "./components/WeatherDisplayCard";
import LocalWeatherDisplay from "./components/LocalWeatherDisplay";
import "./App.css"; // Add this line to import your CSS file

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [localWeather, setLocalWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  // API_KEY is stored in .env file
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  const focus = () => inputRef.current.focus();
  //
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  // useEffect hook to focus the input field when the component mounts
  useEffect(() => {
    focus();
  }, []);

  // useEffect hook to clear the error message after 1.8s
  useEffect(() => {
    let timer;
    if (error) {
      timer = setTimeout(() => {
        setError("");
      }, 1800);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [error]);

  // function to get local weather data from API
  const getLocalWeatherByCoordinates = useCallback(
    async (latitude, longitude) => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${latitude},${longitude}`
        );
        setLocalWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather data: ", error);
      }
    },
    [API_KEY]
  );

  // useEffect hook to get local weather data when user's location is available
  useEffect(() => {
    if (coords) {
      getLocalWeatherByCoordinates(coords.latitude, coords.longitude);
    }
  }, [coords, getLocalWeatherByCoordinates]);

  // function to get weather data from API
  const getWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city.");
      focus();
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
      );

      setWeather(response.data);
      setError("");
      setCity("");
    } catch (error) {
      setError("Error fetching weather data. Please try again.");
      console.error("Error fetching weather data: ", error);
    }
    setLoading(false);
  };

  // function to handle the enter key press to trigger the getNationality function
  const pressEnter = (event) => {
    if (event.keyCode === 13) {
      getWeather();
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center mb-3">
        <Col md={6}>
          <h1 className="text-center mb-4 main-heading">Weather App</h1>
          <div className="local-weather-container">
            {localWeather && <LocalWeatherDisplay weather={localWeather} />}
          </div>
          <Form>
            <Form.Group controlId="formName">
              <Form.Control
                ref={inputRef}
                type="text"
                placeholder="Enter City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyDown={pressEnter}
                disabled={loading}
              />
            </Form.Group>

            <Button
              variant="primary"
              onClick={getWeather}
              disabled={loading}
              className="mt-3 w-100 text-center"
            >
              {loading ? "Loading..." : "Get Weather"}
            </Button>
            {error && (
              <Alert variant="danger" className="mt-3 text-center">
                {error}
              </Alert>
            )}
            {weather && <WeatherDisplayCard weather={weather} />}
            {/* conditional to check if geolocation is supported by browser */}
            {!isGeolocationAvailable && (
              <Alert variant="danger" className="mt-3 text-center">
                Your browser does not support Geolocation.
              </Alert>
            )}
            {/* conditional to check if geolocation is enabled by user */}
            {!isGeolocationEnabled && (
              <Alert variant="danger" className="mt-3 text-center">
                Geolocation is not enabled. Please enable it in your browser
                settings.
              </Alert>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
