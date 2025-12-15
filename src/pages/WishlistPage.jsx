import React from 'react';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';

const WishlistPage = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="wishlist-page container">
      <h2 className="page-title">찜한 상품 ({wishlist.length})</h2>
      {wishlist.length === 0 ? (
        <div className="empty-wishlist">
          <p>찜한 상품이 없습니다.</p>
        </div>
      ) : (
        <div className="product-grid">
          {wishlist.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}
      <style>{`
        .wishlist-page {
          padding: var(--spacing-xl) var(--spacing-md);
          min-height: 60vh;
        }
        .page-title {
          font-size: var(--font-size-2xl);
          margin-bottom: var(--spacing-lg);
          text-align: center;
        }
        .empty-wishlist {
          text-align: center;
          padding: var(--spacing-xl);
          color: #888;
        }
      `}</style>
    </div>
  );
};

export default WishlistPage;
