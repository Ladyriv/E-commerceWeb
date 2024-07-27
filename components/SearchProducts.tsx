"use client";

import Image from "next/image";
import { useState } from 'react';
import { SearchProductProps } from '@/types';
import { products } from '@/constants';
import { Combobox, Transition, ComboboxInput, ComboboxOption, ComboboxOptions, ComboboxButton } from '@headlessui/react';

const SearchProducts = ({ product, setProduct}: SearchProductProps) => {
    const [query, setQuery] = useState('');

    const filteredProducts = 
    query === "" 
    ? products 
    : products.filter((item) =>(
        item.toLowerCase()
        .replace(/\s+/g,"")
        .includes(query.toLowerCase().replace(/\s+/g,""))
    ))

    return( 
        <div className="search-product">
            <Combobox>
                <div className="justify-start sm:px-8 px-4 relative w-full">
                    <ComboboxButton className="absolute top-[14px]">
                        <Image 
                            src='/search.svg'
                            width={20}
                            height={20}
                            className="ml-4"
                        />
                    </ComboboxButton>
                    <ComboboxInput className="search-product_input"
                        placeholder=""
                        displayValue={(product: string) => product}
                        onChange={(e) => setQuery(e.target.value)} 
                    />
                    <Transition
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        afterLeave={() => setQuery('')}
                    >
                        <ComboboxOptions>
                            {filteredProducts.length === 0 &&
                            query !== "" ? (
                                <ComboboxOption 
                                    value={query}
                                    className="search-product_input"
                                >
                                    Create "{query}"
                                </ComboboxOption>
                            ): (
                                filteredProducts.map((item) => (
                                    <ComboboxOption
                                        key={item}
                                        className={({active}) => `
                                        relative search-product_input
                                            ${active ? 'bg-primary-yellow-200 text-black' :'text-white-800' }
                                        `}
                                        value={item}
                                    >
                                        {item}
                                    </ComboboxOption>
                                ))
                            )
                            }
                        </ComboboxOptions>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchProducts
