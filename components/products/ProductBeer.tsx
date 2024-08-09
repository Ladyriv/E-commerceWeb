import React, { useContext } from 'react';
import { CartContext } from '@/context/CartContext';

const ProductBeer: React.FC = () => {
  const cartContext = useContext(CartContext); // CartContext usa el hook useContext para obtener el contexto del carrito

  // Esta función permite identificar si el contexto no esta disponible y da respuesta a un error
  if (!cartContext) {
    throw new Error('useCart must be used within a CartProvider');
  }
  // addToCart se extrae del contexto
  const { addToCart } = cartContext;

  const beers = [
    { id: 1, name: 'Cerveza A', image: '/src/assets/img/Products-beers/Aguilasixpack.png', price: 13500 },
    { id: 2, name: 'Cerveza B', image: '/src/assets/img/Products-beers/Andinasixpack.png', price: 12600 },
    { id: 3, name: 'Cerveza C', image: '/src/assets/img/Products-beers/Pokerlatamax.png', price: 14600 },
    { id: 4, name: 'Cerveza D', image: '/src/assets/img/Products-beers/aguila-lata-24.png', price: 19000 },
    { id: 5, name: 'Cerveza D', image: '/src/assets/img/Products-beers/aguilalight-lata-6.png', price: 19000 },
    { id: 6, name: 'Cerveza D', image: '/src/assets/img/Products-beers/Aguilalight-lata-24.png', price: 19000 },
    { id: 7, name: 'Cerveza D', image: '/src/assets/img/Products-beers/clubcolombia-lata-6.png', price: 19000 },
    { id: 8, name: 'Cerveza D', image: '/src/assets/img/Products-beers/clubcolombia-negra-lata-6.png', price: 19000 },
    { id: 9, name: 'Cerveza D', image: '/src/assets/img/Products-beers/corona-6.png', price: 19000 },
    { id: 10, name: 'Cerveza D', image: '/src/assets/img/Products-beers/coronalata-6-269ml.png', price: 19000 },
    { id: 11, name: 'Cerveza D', image: '/src/assets/img/Products-beers/costena-bacana-lat.png', price: 19000 },
    { id: 12, name: 'Cerveza D', image: '/src/assets/img/Products-beers/costena-lata-24.png', price: 19000 },
    { id: 13, name: 'Cerveza D', image: '/src/assets/img/Products-beers/lightlimonlata.png', price: 19000 },


    // más productos de cerveza
  ];

  return (
    <div className="flex flex-col items-center">
      <h2 className="sm:text-[40px] text-[25px]">Cervezas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/*.map mapea el array 'beers' para renderizar sobre cada producto*/}
        {beers.map(beer => (
          <div key={beer.id} className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center w-full max-w-xs">
            <div className="w-full h-52 mb-5">
              <img src={beer.image} alt={beer.name} className="w-full h-full object-cover rounded-md" />              
            </div>
            <h3 className="font-custom">{beer.name}</h3>
            <p className="font-customHenju font-semibold">${beer.price}</p>
            <button onClick={() => addToCart({ id: beer.id, name: beer.name, image: beer.image, price: beer.price })}
                    className='custom-btn'>
              Agregar al Carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductBeer;

