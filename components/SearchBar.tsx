"use client";

import { useState } from 'react';
import SearchProducts from './SearchProducts'

const SearchBar = () => {
    const [ product, setProduct ] = useState('')
    const handleSearch = () => {}
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