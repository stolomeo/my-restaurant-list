import React from "react";
import { useParams } from "react-router-dom";

export default function RestaurantPage() {
  const { restaurantId } = useParams();

  return <div>This restaurant: {restaurantId}</div>;
}
