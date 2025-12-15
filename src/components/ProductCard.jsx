import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = (product) => {
  const { addToCart } = useCart();
  const { image, title, price, category } = product;

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={title} className="product-image" />
        <div className="product-overlay">
          <button className="btn-primary" onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}>장바구니 담기</button>
        </div>
      </div>
      <div className="product-info">
        <span className="product-category">{category}</span>
        <h3 className="product-title">{title}</h3>
        <p className="product-price">{price}</p>
      </div>
      <style>{`
        .product-card {
          background: white;
          border-radius: var(--spacing-sm);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
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
          text-align: center;
        }
        .product-category {
          font-size: var(--font-size-sm);
          color: #888;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .product-title {
          margin: var(--spacing-xs) 0;
          font-size: var(--font-size-lg);
        }
        .product-price {
          font-weight: bold;
          color: var(--color-primary);
          font-size: var(--font-size-md);
          background: var(--color-secondary);
          display: inline-block;
          padding: 2px 8px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
