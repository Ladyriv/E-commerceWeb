import React from 'react';
import { products } from '@/constants';
import ProductList from '@/components/productList';

const ProductBeer: React.FC = () => {
  const beers = products.filter(product => product.category === 'beer');
  
  return <ProductList title="Cervezas" products={beers} />;
};

export default ProductBeer;
