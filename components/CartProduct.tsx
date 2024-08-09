import React, { useContext } from 'react';
import { useCart } from '@/context/CartContext';

const CartProduct: React.FC = () => {
  const { cart, incrementQuantity, decrementQuantity,  removeFromCart, getTotal } = useCart(); // El hook useCart obtiene el estado y funciones del carrito

  return (
    <div className="flex justify-center items-center p-4">
      <div className="w-full max-w-4xl bg-white bg-opacity-50 backdrop-blur-lg shadow-md rounded-lg p-6">
        <h2 className="border-b-2 border-gray-300 text-outlined pb-2 text-center">Resumen de su compra</h2>
        {cart.length === 0 ? (
          <p className="font-custom">El carrito está vacío</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex flex-col sm:flex-row justify-between items-center border-b py-4"
              >
                <span>{item.name}</span>
                <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                  <span className="text-lg">{item.quantity}</span>
                  <button
                    className="custom-btn-op"
                    onClick={() =>
                      //incrementQuantity(item.id)
                      incrementQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                  <button
                    className="custom-btn-op"
                    onClick={() =>
                      //decrementQuantity(item.id)
                      decrementQuantity(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                </div>
                <div>
                  <span className="text-lg mt-2 sm:mt-0">${item.price}</span>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 mt-2 sm:mt-0 custom-btn-del"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-4">
          <h3 className="text-xl font-bold">Total: ${getTotal()}</h3>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;