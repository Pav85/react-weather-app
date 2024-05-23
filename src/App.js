import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
import WeatherDisplayCard from "./components/WeatherDisplayCard";

function App() {
  const [city, setCity] = useState("");
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  const getWeather = async (e) => {
    console.log("function called");
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Weather App</h1>
      <Row className="justify-content-center mb-3">
        <Col md={6}>
          <Form>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Enter City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" onClick={getWeather} className="mt-3">
              Get Weather
            </Button>
          </Form>
        </Col>
      </Row>
      <WeatherDisplayCard />
    </Container>
  );
}

export default App;
