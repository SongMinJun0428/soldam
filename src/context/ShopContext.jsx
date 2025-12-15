import React, { createContext, useContext, useState } from 'react';

const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('전체');
    const [sortBy, setSortBy] = useState('newest');

    const handleSearch = (query) => {
        setSearchQuery(query);
        // Reset category if searching, or keep it? Let's keep it simple.
        if (query) setSelectedCategory('전체');
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setSearchQuery(''); // Clear search when changing category

        // Scroll to product section
        const productSection = document.querySelector('.product-section');
        if (productSection) {
            productSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <ShopContext.Provider value={{
            searchQuery,
            setSearchQuery: handleSearch,
            selectedCategory,
            setSelectedCategory: handleCategoryChange,
            sortBy,
            setSortBy
        }}>
            {children}
        </ShopContext.Provider>
    );
};
