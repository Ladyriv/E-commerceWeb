"use client";

import { useState } from 'react';
import SearchProducts from './SearchProducts';
import '@/styles/globals.css';

const SearchBar = () => {
    const [ product, setProduct ] = useState('');

    const handleSearch = (event: React.FormEvent) => {
        event.preventDefault();
    }
    return(
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar_items">
                <SearchProducts
                    product={product}
                    setProduct={setProduct}
                />
            </div>
        </form>        
    )
}

export default SearchBar