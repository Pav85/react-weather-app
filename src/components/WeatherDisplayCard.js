import React from "react";
import { Card } from "react-bootstrap";

const WeatherDisplayCard = () => {
  return (
    <Card className="text-center">
      <Card.Header>
        <h3 className="mt-1">Weather in </h3>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <strong>Temperature:</strong> °C
        </Card.Text>
        <Card.Text>
          <strong>Humidity:</strong> %
        </Card.Text>
        <Card.Text>
          <strong>Condition:</strong>{" "}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WeatherDisplayCard;
