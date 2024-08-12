"use client";

import Image from "next/image";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SearchProductProps, Product } from '@/types';
import { products } from '@/constants';
import { Combobox, Transition, ComboboxInput, ComboboxOption, ComboboxOptions, ComboboxButton } from '@headlessui/react';
import '@/styles/globals.css';

const SearchProducts = ({ product, setProduct }: SearchProductProps) => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const filteredProducts = 
    query === "" 
      ? products 
      : products.filter((item) => (
          item.toLowerCase()
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        ));

  const handleSelect = (selectedProduct: string) => {
    const productObj = products.find((item) => item.name === selectedProduct);
    if (productObj) {
      setProduct(selectedProduct);
      router.push(`/product/${productObj.id}`);
    }
  };

  return (
    <div className="search-product">
      <Combobox value={product} onChange={handleSelect}>
        <div className="relative flex flex-wrap max-sm:flex-col max-sm:w-full">
        <p className="mb-1 text-xl text-white font-custom max-sm:mb-4">Busca tu producto</p>
        <div className="relative w-full">
          <ComboboxButton className="absolute inset-y-0 flex items-center pl-3">
            <Image 
              src='/search.svg'
              width={25}
              height={15}
              className="ml-0"
              alt="search icon"
            />
          </ComboboxButton>
          <ComboboxInput 
            className="search-product_input pl-12"
            placeholder="Buscar productos..."
            displayValue={(product: string) => product}
            onChange={(e) => setQuery(e.target.value)} 
          />
        </div>          
          <Transition
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            afterLeave={() => setQuery('')}
          >
            <ComboboxOptions>
              {filteredProducts.length === 0 && query !== "" ? (
                <ComboboxOption 
                  value={query}
                  className="search-product_input select-none data-[focus]:bg-white/10"
                >
                  Crear "{query}"
                </ComboboxOption>
              ) : (
                filteredProducts.map((item) => (
                  <ComboboxOption
                    key={item.id}
                    className={({ active }) => `
                      relative search-product_option
                      ${active ? 'bg-primary-yellow-200 text-black' : 'text-white-800'}
                    `}
                    value={item.name}
                  >
                    {item.name}
                  </ComboboxOption>
                ))
              )}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}

export default SearchProducts;
