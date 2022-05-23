import React, { useContext } from "react";
import { Card, Col, Rate } from "antd";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

export default function RestaurantCard({ restaurant, key }) {
  let navigate = useNavigate();
  const { user } = useContext(UserContext);
  return (
    <Col style={{ width: "300px", margin: "1rem" }}>
      <Card
        cover={
          restaurant && (
            <img
              src={restaurant?.img}
              alt="hi"
              style={{ width: "300px", height: "250px" }}
            />
          )
        }
        title={restaurant?.name}
        hoverable={true}
        key={key}
        onClick={() => navigate(`./restaurants/${restaurant?.id}`)}
        loading={!restaurant}
      >
        <p>{restaurant?.address}</p>
        {user && <Rate />}
      </Card>
    </Col>
  );
}
