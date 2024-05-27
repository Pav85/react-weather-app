import React from "react";
import { Card } from "react-bootstrap";

const LocalWeatherDisplay = ({ weather }) => {
  if (!weather) return null;

  return (
    <Card className="local-weather-card text-left">
      <Card.Body className="d-flex align-items-center p-2">
        <img
          src={weather.current.condition.icon}
          alt={weather.current.condition.text}
          style={{ width: "35px", height: "35px", marginRight: "10px" }}
        />
        <div>
          <Card.Text className="mb-0">
            <strong>{weather.location.name} </strong>
            {weather.current.temp_c}°C
          </Card.Text>
          <Card.Text className="mb-0">
            {weather.current.condition.text} in your area
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default LocalWeatherDisplay;
