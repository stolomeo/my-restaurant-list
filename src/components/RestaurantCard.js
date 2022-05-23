import React from "react";
import { Card, Col } from "antd";

export default function RestaurantCard({ restaurant, key }) {
  return (
    <Col style={{ width: "300px", margin: "1rem" }}>
      <Card
        cover={<img src={restaurant.img} alt="hi" />}
        title={restaurant.name}
        hoverable={true}
        key={key}
      >
        <p>{restaurant.address}</p>
      </Card>
    </Col>
  );
}
