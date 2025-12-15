import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import './CheckoutModal.css';

const CheckoutModal = ({ isOpen, onClose }) => {
    const { cart, cartTotal, clearCart } = useCart();
    const [step, setStep] = useState('form'); // form, processing, success
    const [address, setAddress] = useState('');

    useEffect(() => {
        if (isOpen) setStep('form');
    }, [isOpen]);

    if (!isOpen) return null;

    const handlePayment = (e) => {
        e.preventDefault();
        setStep('processing');

        // Simulate payment delay
        setTimeout(() => {
            setStep('success');
            clearCart();
        }, 2000);
    };

    return (
        <div className="checkout-overlay">
            <div className="checkout-modal">
                <button className="close-btn" onClick={onClose}>&times;</button>

                {step === 'form' && (
                    <>
                        <h2>주문 / 결제</h2>
                        <div className="order-summary">
                            <h3>주문 상품 ({cart.length})</h3>
                            <p className="total-price">총 결제금액: <span>₩{cartTotal.toLocaleString()}</span></p>
                        </div>

                        <form onSubmit={handlePayment}>
                            <div className="form-group">
                                <label>배송지 주소</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="주소를 입력해주세요"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>카드 번호</label>
                                <input type="text" placeholder="**** **** **** ****" required />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>유효기간</label>
                                    <input type="text" placeholder="MM/YY" required />
                                </div>
                                <div className="form-group">
                                    <label>CVC</label>
                                    <input type="text" placeholder="123" required />
                                </div>
                            </div>

                            <button type="submit" className="btn-primary pay-btn">
                                ₩{cartTotal.toLocaleString()} 결제하기
                            </button>
                        </form>
                    </>
                )}

                {step === 'processing' && (
                    <div className="processing-state">
                        <div className="spinner"></div>
                        <h3>결제 진행 중입니다...</h3>
                        <p>잠시만 기다려주세요.</p>
                    </div>
                )}

                {step === 'success' && (
                    <div className="success-state">
                        <div className="success-icon">✓</div>
                        <h3>결제가 완료되었습니다!</h3>
                        <p>주문해주셔서 감사합니다.</p>
                        <button className="btn-primary" onClick={onClose}>쇼핑 계속하기</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CheckoutModal;
