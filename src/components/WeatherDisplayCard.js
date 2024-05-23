import React from "react";
import { Card } from "react-bootstrap";

const WeatherDisplayCard = ({ weather }) => {
  if (!weather) return null;
  return (
    <Card className="text-center mt-3">
      <Card.Header>
        <h3 className="mt-1">
          Weather in {weather.location.name}, {weather.location.country}
        </h3>
      </Card.Header>
      <Card.Body>
        <img
          src={weather.current.condition.icon}
          alt={weather.current.condition.text}
          style={{ width: "70px", height: "70px", marginBottom: "16px" }}
        />
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
