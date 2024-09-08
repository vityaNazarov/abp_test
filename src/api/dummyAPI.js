import axios from "axios";

const BASE_URL = "https://dummyjson.com";

export const getVehicles = async () => {
  const response = await axios.get(`${BASE_URL}/products/category/vehicle`);
  return response.data.products;
};

export const getVehicleById = async (id) => {
  const response = await axios.get(`${BASE_URL}/products/${id}`);
  return response.data;
};
