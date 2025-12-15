import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = (product) => {
  const { addToCart } = useCart();
  const { image, title, price, category, discount, rating, reviews, freeShipping } = product;

  // Calculate discounted price
  const finalPrice = discount ? price * (1 - discount / 100) : price;

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={title} className="product-image" />
        {discount > 0 && (
          <div className="discount-badge">{discount}% OFF</div>
        )}
        <div className="product-overlay">
          <button className="btn-primary" onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}>장바구니 담기</button>
        </div>
      </div>
      <div className="product-info">
        <div className="product-meta">
          <span className="product-category">{category}</span>
          {freeShipping && <span className="shipping-badge">무료배송</span>}
        </div>
        <h3 className="product-title">{title}</h3>
        <div className="price-container">
          {discount > 0 && (
            <span className="original-price">{price.toLocaleString()}원</span>
          )}
          <span className="product-price">{finalPrice.toLocaleString()}원</span>
        </div>
        <div className="rating-container">
          <span className="star-icon">★</span>
          <span className="rating-score">{rating}</span>
          <span className="review-count">({reviews})</span>
        </div>
      </div>
      <style>{`
        .product-card {
          background: white;
          border-radius: var(--spacing-sm);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          position: relative;
        }
        .product-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-lg);
        }
        .product-image-container {
          position: relative;
          padding-top: 100%; /* 1:1 Aspect Ratio */
          background: #f4f4f4;
          overflow: hidden;
        }
        .product-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .product-card:hover .product-image {
          transform: scale(1.1);
        }
        .discount-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          background-color: #e74c3c;
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-weight: bold;
          font-size: 0.8rem;
          z-index: 10;
        }
        .product-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .product-card:hover .product-overlay {
          opacity: 1;
        }
        .product-info {
          padding: var(--spacing-md);
        }
        .product-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-xs);
        }
        .product-category {
          font-size: var(--font-size-sm);
          color: #888;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .shipping-badge {
          font-size: 0.7rem;
          background-color: #f1f2f6;
          color: #57606f;
          padding: 2px 6px;
          border-radius: 4px;
        }
        .product-title {
          margin: var(--spacing-xs) 0;
          font-size: var(--font-size-md);
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .price-container {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 4px;
        }
        .original-price {
          text-decoration: line-through;
          color: #a4b0be;
          font-size: 0.9rem;
        }
        .product-price {
          font-weight: 900;
          color: #1a1a1a;
          font-size: 1.2rem;
        }
        .rating-container {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: 8px;
          font-size: 0.9rem;
          color: #57606f;
        }
        .star-icon {
          color: #f1c40f;
        }
        .rating-score {
          font-weight: bold;
          color: #2f3542;
        }
        .review-count {
          color: #a4b0be;
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
