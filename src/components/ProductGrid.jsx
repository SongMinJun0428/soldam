import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import ProductDetailModal from './ProductDetailModal';
import { products } from '../data/products';
import { useShop } from '../context/ShopContext';
import './ProductGrid.css';

const ProductGrid = () => {
  const { searchQuery, selectedCategory, setSelectedCategory, sortBy, setSortBy } = useShop();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [visibleCount, setVisibleCount] = useState(12);

  // Reset visible count when filters change
  useMemo(() => {
    setVisibleCount(12);
  }, [selectedCategory, searchQuery]);

  const categories = ['전체', '김치/반찬', '전통간식', '차/음료', '밀키트', '선물세트'];

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

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 12);
  };

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
          {visibleProducts.map((product) => (
            <div key={product.id} onClick={() => setSelectedProduct(product)}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {visibleCount < filteredProducts.length && (
          <div className="load-more-container">
            <button className="btn-secondary load-more-btn" onClick={handleLoadMore}>
              더 보기
            </button>
          </div>
        )}
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
        .load-more-container {
          text-align: center;
          margin-top: var(--spacing-xl);
        }
        .load-more-btn {
          padding: var(--spacing-sm) var(--spacing-xl);
          font-size: var(--font-size-lg);
          border: 2px solid var(--color-primary);
          background: transparent;
          color: var(--color-primary);
          border-radius: 9999px;
          transition: all 0.3s ease;
        }
        .load-more-btn:hover {
          background: var(--color-primary);
          color: white;
        }
      `}</style>
    </section>
  );
};

export default ProductGrid;
