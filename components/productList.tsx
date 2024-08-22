import React, { useContext } from 'react';
import { CartContext } from '@/context/CartContext';
import { Product } from '@/types';
import { toast } from 'react-hot-toast';


interface ProductListProps {
    title: string;
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({title, products}) => {
  const cartContext = useContext(CartContext); // CartContext usa el hook useContext para obtener el contexto del carrito

  // Esta función permite identificar si el contexto no esta disponible y da respuesta a un error
  if (!cartContext) {
    throw new Error('useCart must be used within a CartProvider');
  }
  // addToCart se extrae del contexto
  const { addToCart } = cartContext;
  
  
  return (
    <div className="flex flex-col items-center">
      <h2 className="sm:text-[40px] text-[25px]">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/*.map mapea el array 'beers, vodkas, others' para renderizar sobre cada producto*/}
        {products.map(product => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center w-full max-w-sm">
            <div className="w-full mx-auto h-52 mb-5 mt-2 flex items-center justify-center">
              <img src={product.image} alt={product.name} className="w-full h-full max-w-[200px] max-h-[200px] object-contain rounded-md" />              
            </div>
            <h3 className="font-custom">{product.name}</h3>
            <p className="font-customHenju font-semibold">${product.price}</p>
            <button onClick={() => addToCart({ id: product.id, name: product.name, image: product.image, price: product.price })}
                    className='custom-btn'>
              Agregar al Carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
