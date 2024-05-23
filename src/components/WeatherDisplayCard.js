import React from "react";
import { Card } from "react-bootstrap";

const WeatherDisplayCard = () => {
  return (
    <Card className="text-center">
      <Card.Header>
        <h3 className="mt-1">Weather in </h3>
      </Card.Header>
      <Card.Body>
        <Card.Text>Temperature: °C</Card.Text>
        <Card.Text>Humidity: %</Card.Text>
        <Card.Text>Condition: </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WeatherDisplayCard;
