import React, { useState } from 'react';
import { useToast } from '../context/ToastContext';
import './NewsletterSection.css';

const NewsletterSection = () => {
    const [email, setEmail] = useState('');
    const { addToast } = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            addToast('뉴스레터 구독이 완료되었습니다!', 'success');
            setEmail('');
        }
    };

    return (
        <section className="newsletter-section">
            <div className="container">
                <div className="newsletter-content">
                    <h2>솔담 소식 받기</h2>
                    <p>새로운 상품 출시와 특별한 프로모션 소식을 가장 먼저 받아보세요.</p>
                    <form onSubmit={handleSubmit} className="newsletter-form">
                        <input
                            type="email"
                            placeholder="이메일 주소를 입력해주세요"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" className="btn-primary">구독하기</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;
