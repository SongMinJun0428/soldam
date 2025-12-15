import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useReview } from '../context/ReviewContext';
import { useAuth } from '../context/AuthContext';

const ProductDetailModal = ({ product, isOpen, onClose }) => {
    const { addToCart } = useCart();
    const { reviews, addReview, getReviewsByProductId } = useReview();
    const { user } = useAuth();
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(5);

    if (!isOpen || !product) return null;

    const productReviews = getReviewsByProductId(product.id);

    const handleAddReview = (e) => {
        e.preventDefault();
        if (!user) {
            alert('로그인이 필요합니다.');
            return;
        }
        addReview({
            productId: product.id,
            userId: user.name,
            rating,
            text: reviewText
        });
        setReviewText('');
        alert('리뷰가 등록되었습니다.');
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content product-detail-modal" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>&times;</button>

                <div className="modal-body">
                    <div className="detail-image-section">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div className="detail-info-section">
                        <span className="detail-category">{product.category}</span>
                        <h2 className="detail-title">{product.title}</h2>
                        <p className="detail-price">{product.price.toLocaleString()}원</p>
                        <p className="detail-desc">{product.description}</p>

                        <div className="detail-actions">
                            <button className="btn-primary btn-large" onClick={() => {
                                addToCart(product);
                                onClose();
                            }}>장바구니 담기</button>
                        </div>

                        <div className="reviews-section">
                            <h3>리뷰 ({productReviews.length})</h3>
                            <div className="review-list">
                                {productReviews.length === 0 ? (
                                    <p className="no-reviews">첫 번째 리뷰를 남겨주세요!</p>
                                ) : (
                                    productReviews.map(review => (
                                        <div key={review.id} className="review-item">
                                            <div className="review-header">
                                                <span className="review-user">{review.userId}</span>
                                                <span className="review-rating">{'★'.repeat(review.rating)}</span>
                                            </div>
                                            <p className="review-text">{review.text}</p>
                                        </div>
                                    ))
                                )}
                            </div>

                            <form onSubmit={handleAddReview} className="review-form">
                                <h4>리뷰 작성</h4>
                                <div className="rating-input">
                                    {[1, 2, 3, 4, 5].map(star => (
                                        <span
                                            key={star}
                                            onClick={() => setRating(star)}
                                            style={{ color: star <= rating ? '#f1c40f' : '#ddd', cursor: 'pointer' }}
                                        >★</span>
                                    ))}
                                </div>
                                <textarea
                                    value={reviewText}
                                    onChange={(e) => setReviewText(e.target.value)}
                                    placeholder="리뷰를 작성해주세요"
                                    required
                                />
                                <button type="submit" className="btn-secondary">등록</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
        .product-detail-modal { max-width: 900px; width: 90%; max-height: 90vh; overflow-y: auto; }
        .modal-body { display: flex; gap: 30px; flex-wrap: wrap; }
        .detail-image-section { flex: 1; min-width: 300px; }
        .detail-image-section img { width: 100%; border-radius: 8px; }
        .detail-info-section { flex: 1; min-width: 300px; }
        .detail-category { color: #888; font-size: 0.9rem; }
        .detail-title { font-size: 2rem; margin: 10px 0; }
        .detail-price { font-size: 1.5rem; font-weight: bold; color: var(--color-primary); margin-bottom: 20px; }
        .detail-desc { line-height: 1.6; color: #555; margin-bottom: 30px; }
        .btn-large { width: 100%; padding: 15px; font-size: 1.1rem; }
        
        .reviews-section { margin-top: 40px; border-top: 1px solid #eee; padding-top: 20px; }
        .review-list { max-height: 200px; overflow-y: auto; margin-bottom: 20px; }
        .review-item { background: #f9f9f9; padding: 10px; border-radius: 4px; margin-bottom: 10px; }
        .review-header { display: flex; justify-content: space-between; margin-bottom: 5px; font-size: 0.9rem; }
        .review-rating { color: #f1c40f; }
        .review-form textarea { width: 100%; height: 60px; margin: 10px 0; padding: 8px; border: 1px solid #ddd; border-radius: 4px; }
        .rating-input { font-size: 1.5rem; margin-bottom: 5px; }
      `}</style>
        </div>
    );
};

export default ProductDetailModal;
