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
          <strong>Temperature: </strong>
          {weather.current.temp_c}°C
        </Card.Text>
        <Card.Text>
          <strong>Humidity: </strong>
          {weather.current.humidity}%
        </Card.Text>
        <Card.Text>
          <strong>Condition: </strong>
          {weather.current.condition.text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WeatherDisplayCard;
