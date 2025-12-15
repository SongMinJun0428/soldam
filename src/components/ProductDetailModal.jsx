import React from 'react';
import { useCart } from '../context/CartContext';
import './ProductDetailModal.css';
import './ProductDetailModalShipping.css';

const ProductDetailModal = ({ product, isOpen, onClose }) => {
    const { addToCart } = useCart();

    if (!isOpen || !product) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>&times;</button>

                <div className="product-detail-grid">
                    <div className="product-detail-image">
                        <img src={product.image} alt={product.title} />
                    </div>

                    <div className="product-detail-info">
                        <span className="detail-category">{product.category}</span>
                        <h2 className="detail-title">{product.title}</h2>
                        <p className="detail-price">₩{product.price.toLocaleString()}</p>

                        <div className="detail-shipping">
                            <span className="shipping-label">배송비</span>
                            <span className="shipping-value">3,000원 (50,000원 이상 무료배송)</span>
                        </div>

                        <div className="detail-description">
                            <h3>상품 설명</h3>
                            <p>{product.description}</p>
                            <p className="detail-note">
                                * 본 제품은 100% 국내산 도라지만을 사용하여 정성껏 만들었습니다.
                                <br />
                                * 선물용으로도 아주 좋습니다.
                            </p>
                        </div>

                        <div className="product-reviews">
                            <h3>구매 후기 (3)</h3>
                            <div className="review-item">
                                <div className="review-header">
                                    <span className="review-author">김*수</span>
                                    <span className="review-rating">★★★★★</span>
                                </div>
                                <p className="review-text">부모님 선물로 드렸는데 너무 좋아하시네요. 포장도 고급스럽습니다.</p>
                            </div>
                            <div className="review-item">
                                <div className="review-header">
                                    <span className="review-author">이*영</span>
                                    <span className="review-rating">★★★★★</span>
                                </div>
                                <p className="review-text">맛이 진하고 좋습니다. 재구매 의사 있습니다.</p>
                            </div>
                            <div className="review-item">
                                <div className="review-header">
                                    <span className="review-author">박*민</span>
                                    <span className="review-rating">★★★★☆</span>
                                </div>
                                <p className="review-text">배송도 빠르고 상품 상태도 아주 훌륭합니다.</p>
                            </div>
                        </div>

                        <button
                            className="btn-primary detail-add-btn"
                            onClick={() => {
                                addToCart(product);
                                onClose();
                            }}
                        >
                            장바구니 담기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailModal;
