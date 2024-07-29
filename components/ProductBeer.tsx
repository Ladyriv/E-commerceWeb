import React from 'react';

interface ProductBeerProps {
  addToCart: (product: { id: number; name: string; image: string }) => void;
}

const ProductBeer: React.FC<ProductBeerProps> = ({ addToCart }) => {
    const beers = [
      { id: 1, name: 'Cerveza 1', image: '/' },
      { id: 2, name: 'Cerveza 2', image: '' },
      // Add more beers as needed
    ];
  
    return (
      <div>
        <h2>Cervezas</h2>
        <div className="grid grid-cols-3 gap-4">
          {beers.map(beer => (
            <div key={beer.id} className="border p-4">
              <img src={beer.image} alt={beer.name} className="w-full h-auto" />
              <h3>{beer.name}</h3>
              <button onClick={() => addToCart(beer)}>Agregar al Carrito</button>
            </div>
          ))}
        </div>
      </div>
    );
};

export default ProductBeer;
