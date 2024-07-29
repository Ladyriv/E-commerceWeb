import React from 'react';
// Assuming ProductBeer is correctly imported elsewhere
import ProductBeer from '@/components/ProductBeer';

interface Product {
  id: string;
  name: string;
  price: number;
  // Add other relevant fields based on your product model
}

const addToCart = (product: { id: number; name: string; image: string; }) => {
  console.log(`Adding product ${product.name} to cart`);
  // Implement the actual logic to add the product to the cart
};

const Beer = () => {
  return (
    <div>
      <ProductBeer addToCart={addToCart} />
    </div>
  );
};

export default Beer
