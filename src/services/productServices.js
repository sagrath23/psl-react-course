import { baseUrl } from '../config';

export const fetchProducts = async () => {
  const response = await fetch(`${baseUrl}/products`);

  return response.json();
};
