import axios from "axios";

  const API_URL = 'http://locahost:8080';

  export function fetchProducts() {
     return axios(`${API_URL}/products`);
 }