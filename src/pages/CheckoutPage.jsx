import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useOrder } from '../context/OrderContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
    const { cart, cartTotal, clearCart } = useCart();
    const { addOrder } = useOrder();
    const { user } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: user?.name || '',
        phone: '',
        address: '',
        detailAddress: '',
        request: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (cart.length === 0) {
            alert('장바구니가 비어있습니다.');
            return;
        }

        const orderData = {
            items: cart,
            totalAmount: cartTotal,
            shippingInfo: formData,
            userId: user?.email || 'guest'
        };

        addOrder(orderData);
        clearCart();
        alert('주문이 완료되었습니다!');
        navigate('/mypage');
    };

    return (
        <div className="checkout-page container">
            <h2 className="page-title">주문/결제</h2>
            <div className="checkout-container">
                <div className="order-form-section">
                    <h3>배송지 정보</h3>
                    <form onSubmit={handleSubmit} className="order-form">
                        <div className="form-group">
                            <label>받는 분</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>연락처</label>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="010-0000-0000" />
                        </div>
                        <div className="form-group">
                            <label>주소</label>
                            <input type="text" name="address" value={formData.address} onChange={handleChange} required placeholder="기본 주소" />
                            <input type="text" name="detailAddress" value={formData.detailAddress} onChange={handleChange} placeholder="상세 주소" />
                        </div>
                        <div className="form-group">
                            <label>요청사항</label>
                            <select name="request" value={formData.request} onChange={handleChange}>
                                <option value="">배송 시 요청사항을 선택해주세요</option>
                                <option value="문 앞에 놔주세요">문 앞에 놔주세요</option>
                                <option value="경비실에 맡겨주세요">경비실에 맡겨주세요</option>
                                <option value="배송 전 연락바랍니다">배송 전 연락바랍니다</option>
                            </select>
                        </div>
                        <button type="submit" className="btn-primary checkout-btn">
                            {cartTotal.toLocaleString()}원 결제하기
                        </button>
                    </form>
                </div>
                <div className="order-summary-section">
                    <h3>주문 상품 ({cart.length}개)</h3>
                    <div className="summary-list">
                        {cart.map(item => (
                            <div key={item.id} className="summary-item">
                                <img src={item.image} alt={item.title} />
                                <div className="item-info">
                                    <p className="item-title">{item.title}</p>
                                    <p className="item-price">{item.price.toLocaleString()}원 x {item.quantity}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="total-summary">
                        <div className="row">
                            <span>총 상품금액</span>
                            <span>{cartTotal.toLocaleString()}원</span>
                        </div>
                        <div className="row">
                            <span>배송비</span>
                            <span>0원</span>
                        </div>
                        <div className="row total">
                            <span>최종 결제금액</span>
                            <span>{cartTotal.toLocaleString()}원</span>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
        .checkout-page { padding: var(--spacing-xl) var(--spacing-md); }
        .page-title { text-align: center; margin-bottom: var(--spacing-xl); font-size: var(--font-size-2xl); }
        .checkout-container { display: flex; gap: var(--spacing-xl); flex-wrap: wrap; }
        .order-form-section { flex: 2; min-width: 300px; }
        .order-summary-section { flex: 1; min-width: 300px; background: #f9f9f9; padding: var(--spacing-lg); border-radius: 8px; height: fit-content; }
        .form-group { margin-bottom: var(--spacing-md); }
        .form-group label { display: block; margin-bottom: 8px; font-weight: bold; }
        .form-group input, .form-group select { width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px; }
        .checkout-btn { width: 100%; margin-top: var(--spacing-lg); font-size: 1.1rem; }
        .summary-item { display: flex; gap: 10px; margin-bottom: 10px; border-bottom: 1px solid #eee; padding-bottom: 10px; }
        .summary-item img { width: 50px; height: 50px; object-fit: cover; border-radius: 4px; }
        .total-summary { margin-top: 20px; border-top: 2px solid #333; padding-top: 10px; }
        .row { display: flex; justify-content: space-between; margin-bottom: 5px; }
        .row.total { font-weight: bold; font-size: 1.2rem; margin-top: 10px; color: var(--color-primary); }
      `}</style>
        </div>
    );
};

export default CheckoutPage;
