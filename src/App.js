import React, { useState, useEffect, useRef } from "react";
import axios from "axios"; // used axios to make http requests
import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
import WeatherDisplayCard from "./components/WeatherDisplayCard";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  // API_KEY is stored in.env file
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  // useEffect hook to focus the input field when the component mounts
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // function to get weather data from API
  const getWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
      );

      setWeather(response.data);
      setError("");
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
          <h1 className="text-center mb-4">Weather App</h1>
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
              className="mt-3 w-100 text-center"
            >
              {loading ? "Loading..." : "Get Weather"}
            </Button>
          </Form>
        </Col>
      </Row>
      {error && <Alert variant="danger">{error}</Alert>}
      {weather && <WeatherDisplayCard weather={weather} />}
      {/* <WeatherDisplayCard weather={weather} /> */}
    </Container>
  );
}

export default App;
