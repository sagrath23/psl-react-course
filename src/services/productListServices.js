import { baseUrl } from '../config';

export const fetchProductList = async () => {
  const response = await fetch(`${baseUrl}/products`);

  return response.json();
};
