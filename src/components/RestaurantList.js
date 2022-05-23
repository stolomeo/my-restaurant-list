import React, { useEffect, useState } from "react";
import { Row } from "antd";
import RestaurantCard from "./RestaurantCard";

export default function RestaurantList() {
  const [restaurants, setRestaurants] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://my-first-firestore-st.web.app/restaurants"
      );
      const data = await response.json();
      setRestaurants(data);
    };
    getData();
  }, []);

  const restaurantList = !restaurants ? (
    <h2>Loading</h2>
  ) : (
    restaurants.map((restaurant) => (
      <RestaurantCard key={restaurant.id} restaurant={restaurant} />
    ))
  );
  return (
    <section style={{ marginTop: "3rem" }}>
      <Row>{restaurantList}</Row>
    </section>
  );
}
