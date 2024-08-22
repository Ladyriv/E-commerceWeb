import { useEffect, useState } from 'react';
import { CartProvider } from '@/context/CartContext';
//import App  from 'next/app';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import VerificationModal from '@/components/Modal';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }: any) {
  const [showModal, setShowModal] = useState(true);
  const router = useRouter();

  useEffect(() => {
    console.log("Current path:", router.pathname);
    if (router.pathname !== '/') {
      setShowModal(false);
    }
  }, [router.pathname]);

  const handleAccept = () => {
    setShowModal(false);
  };

  return (
    <CartProvider>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Navbar />
      {router.pathname === '/' && showModal && (
        <VerificationModal onAccept={handleAccept} />
      )}
      <div className="pt-[150px] flex flex-col min-h-screen">
        <Component {...pageProps} />
      </div>
    </CartProvider>
  );
}

export default MyApp;
