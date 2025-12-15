import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import CheckoutModal from './CheckoutModal';
import AuthModal from './AuthModal';
import './CartDrawer.css';

const CartDrawer = () => {
    const { cart, isCartOpen, toggleCart, removeFromCart, updateQuantity, cartTotal } = useCart();
    const { isAuthenticated } = useAuth();
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    const [isAuthOpen, setIsAuthOpen] = useState(false);

    const handleCheckout = () => {
        if (!isAuthenticated) {
            alert('로그인이 필요한 서비스입니다.');
            setIsAuthOpen(true);
            return;
        }
        setIsCheckoutOpen(true);
        toggleCart(); // Close drawer
    };

    if (!isCartOpen) return null;

    return (
        <>
            <div className="cart-overlay" onClick={toggleCart}></div>
            <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
                <div className="cart-header">
                    <h2>장바구니 ({cart.length})</h2>
                    <button className="close-btn" onClick={toggleCart}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>

                <div className="cart-items">
                    {cart.length === 0 ? (
                        <div className="empty-cart">
                            <p>장바구니가 비어있습니다.</p>
                            <button className="btn-primary" onClick={toggleCart}>쇼핑 계속하기</button>
                        </div>
                    ) : (
                        cart.map((item) => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.title} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h3>{item.title}</h3>
                                    <p className="cart-item-price">₩{item.price.toLocaleString()}</p>
                                    <div className="quantity-controls">
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                    </div>
                                </div>
                                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="cart-footer">
                        <div className="cart-total">
                            <span>합계</span>
                            <span>₩{cartTotal.toLocaleString()}</span>
                        </div>
                        <button className="btn-primary checkout-btn" onClick={handleCheckout}>주문하기</button>
                    </div>
                )}
            </div>
            <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
            <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
        </>
    );
};

export default CartDrawer;
