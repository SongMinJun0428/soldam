import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import ProductDetailModal from './ProductDetailModal';
import { products } from '../data/products';
import { useShop } from '../context/ShopContext';
import './ProductGrid.css';

const ProductGrid = () => {
  const { searchQuery, selectedCategory, setSelectedCategory, sortBy, setSortBy } = useShop();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = ['전체', '김치/반찬', '전통간식', '차/음료', '선물세트'];

  const filteredProducts = useMemo(() => {
    let result = products;

    // Search Filter
    if (searchQuery) {
      result = result.filter(p => p.title.includes(searchQuery) || p.description.includes(searchQuery));
    }
    // Category Filter
    else if (selectedCategory !== '전체') {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (sortBy === 'price-asc') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedCategory, sortBy, searchQuery]);

  return (
    <section className="product-section">
      <div className="container">
        <h2 className="section-title">최신 상품</h2>

        <div className="filter-bar">
          <div className="category-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <select
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="newest">신상품순</option>
            <option value="price-asc">낮은 가격순</option>
            <option value="price-desc">높은 가격순</option>
          </select>
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} onClick={() => setSelectedProduct(product)}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>

      <ProductDetailModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
      <style>{`
        .product-section {
          padding: var(--spacing-xl) 0;
          background-color: var(--color-background);
        }
        .section-title {
          text-align: center;
          font-size: var(--font-size-3xl);
          margin-bottom: var(--spacing-xl);
          font-weight: 900;
          letter-spacing: -1px;
        }
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-lg);
        }
      `}</style>
    </section>
  );
};

export default ProductGrid;
