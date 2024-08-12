import React from 'react';
import { products } from '@/constants';
import ProductList from '@/components/productList';

const ProductOthers: React.FC = () => {
  const otros = products.filter(product => product.category === 'otro');
  
  return <ProductList title="Otros" products={otros} />;
};

export default ProductOthers;