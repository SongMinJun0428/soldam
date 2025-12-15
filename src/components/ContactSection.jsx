import React, { useState } from 'react';
import { useToast } from '../context/ToastContext';
import './ContactSection.css';

const ContactSection = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const { addToast } = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setTimeout(() => {
            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
            addToast('문의가 성공적으로 접수되었습니다.', 'success');
            setTimeout(() => setSubmitted(false), 3000);
        }, 1000);
    };

    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <h2 className="section-title">고객센터 & 오시는 길</h2>
                <div className="contact-grid">

                    {/* Contact Form */}
                    <div className="contact-form-container">
                        <h3>문의하기</h3>
                        <p className="contact-desc">궁금한 점이 있으시면 언제든 문의해주세요.</p>

                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label>이름</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="성함을 입력해주세요"
                                />
                            </div>
                            <div className="form-group">
                                <label>이메일</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="답변 받으실 이메일"
                                />
                            </div>
                            <div className="form-group">
                                <label>문의내용</label>
                                <textarea
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="문의하실 내용을 적어주세요"
                                    rows="5"
                                ></textarea>
                            </div>
                            <button type="submit" className="btn-primary submit-btn">
                                {submitted ? '전송 완료!' : '문의하기'}
                            </button>
                        </form>
                    </div>

                    {/* Location Info */}
                    <div className="location-info-container">
                        <h3>오시는 길</h3>
                        <p className="contact-desc">솔담 플래그십 스토어를 방문해보세요.</p>

                        <div className="map-placeholder">
                            <div className="map-overlay">
                                <span>지도 보기</span>
                            </div>
                            {/* In a real app, this would be a Google Maps iframe */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.926842939466!2d126.9769930764355!3d37.55687697204126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca296214c3d31%3A0x2a28d6d670669d61!2z7ISc7Jq47Jet!5e0!3m2!1sko!2skr!4v1709620000000!5m2!1sko!2skr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map"
                            ></iframe>
                        </div>

                        <div className="info-items">
                            <div className="info-item">
                                <strong>주소</strong>
                                <p>서울특별시 중구 세종대로 123 솔담빌딩 1층</p>
                            </div>
                            <div className="info-item">
                                <strong>운영시간</strong>
                                <p>평일 10:00 - 20:00 (주말/공휴일 휴무)</p>
                            </div>
                            <div className="info-item">
                                <strong>연락처</strong>
                                <p>02-1234-5678</p>
                            </div>
                            <div className="info-item">
                                <strong>이메일</strong>
                                <p>help@soldam.com</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;
