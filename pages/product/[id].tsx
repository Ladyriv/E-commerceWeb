
import { useRouter } from 'next/router';
import { products } from '@/constants';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import '@/styles/globals.css';
import { toast } from 'react-hot-toast';


const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { addToCart } = useCart();

  const product: Product | undefined = products.find((item) => item.id === Number(id));

  if (!product) {
    return <div className="text-center mt-20 text-xl">Producto no encontrado</div>;
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
    });
    toast.success(`${product.name} se agregó al carrito`);
  };

  return (
    <div className="product-page">
      <div className="product-page_card">
        <div className="flex flex-col items-center md:flex-row md:space-x-10">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-md"
            />
          </div>
          <div className="flex flex-col items-start space-y-4 mt-4 md:mt-0">
            <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-xl text-white">Precio: ${product.price}</p>
            <button onClick={handleAddToCart} className="px-6 py-2 custom-btn">
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
