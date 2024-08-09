//import React from 'react';
import { CartProvider } from '@/context/CartContext';
import App  from 'next/app';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';


class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <CartProvider>
        <Navbar />
        <div className="pt-[150px] flex flex-col min-h-screen">
          <Component {...pageProps} />
        </div>
      </CartProvider>
    );
  }
}
export default MyApp;
