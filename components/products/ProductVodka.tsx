import React from 'react';
import { products } from '@/constants';
import ProductList from '@/components/productList';

const ProductVodka: React.FC = () => {
  const vodkas = products.filter(product => product.category === 'vodka');
  
  return <ProductList title="Vodkas" products={vodkas} />;
};

export default ProductVodka;