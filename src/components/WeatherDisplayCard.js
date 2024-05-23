import React from "react";
import { Card } from "react-bootstrap";

const WeatherDisplayCard = ({ weather }) => {
  if (!weather) return null;
  return (
    <Card className="text-center">
      <Card.Header>
        <h3 className="mt-1">Weather in {weather.location.name}</h3>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <strong>Temperature: {weather.current.temp_c}</strong> °C
        </Card.Text>
        <Card.Text>
          <strong>Humidity: {weather.current.humidity}</strong> %
        </Card.Text>
        <Card.Text>
          <strong>Condition: {weather.current.condition.text}</strong>{" "}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WeatherDisplayCard;
