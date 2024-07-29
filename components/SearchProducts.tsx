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
                <div className="justify-start sm:px-10 px-6 relative w-full min-w-full h-[35px]">
                    <ComboboxButton className="absolute left-8 top-1.5">
                        <Image 
                            src='/search.svg'
                            width={25}
                            height={15}
                            className="ml-3" alt={""}                        />
                    </ComboboxButton>
                    <ComboboxInput className="search-product_input pl-[5%] pr-4 py-2 rounded-[8px]"
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
