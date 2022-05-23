import React from "react";
import { Card, Col } from "antd";
import { useNavigate } from "react-router-dom";

export default function RestaurantCard({ restaurant, key }) {
  let navigate = useNavigate();
  return (
    <Col style={{ width: "300px", margin: "1rem" }}>
      <Card
        cover={<img src={restaurant.img} alt="hi" />}
        title={restaurant.name}
        hoverable={true}
        key={key}
        onClick={() => navigate(`./restaurants/${restaurant.id}`)}
        loading={!restaurant}
      >
        <p>{restaurant.address}</p>
      </Card>
    </Col>
  );
}
