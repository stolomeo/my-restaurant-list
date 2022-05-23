import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";

export default function RestaurantPage() {
  const [restaurant, setRestaurant] = useState();
  const { restaurantId } = useParams();
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://my-first-firestore-st.web.app/restaurants/${restaurantId}`
      );
      const data = await response.json();
      await setRestaurant(data);
    };
    getData();
  }, [restaurantId]);

  return (
    <>
      <Link to="/">&lt; Back</Link>
      <RestaurantCard restaurant={restaurant} />
    </>
  );
}
