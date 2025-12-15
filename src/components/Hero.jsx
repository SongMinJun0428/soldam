import React from 'react';

import heroBanner from '../assets/soldam_hero_food_spread.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image-container">
        <img src={heroBanner} alt="솔담 프리미엄 한식" className="hero-image" />
        <div className="hero-overlay">
          <h1 className="hero-title">
            자연을 담은<br />
            <span className="highlight">프리미엄 식탁, 솔담</span>
          </h1>
          <p className="hero-subtitle">가장 신선한 재료로 만든 최고의 한식을 만나보세요.</p>
          <button className="btn-primary hero-btn">상품 보러가기</button>
        </div>
      </div>
      <style>{`
        .hero {
          position: relative;
          height: 100vh;
          width: 100%;
          overflow: hidden;
        }
        .hero-image-container {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          animation: zoomIn 20s infinite alternate;
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.1));
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 10%;
        }
        .hero-title {
          font-size: 4rem;
          line-height: 1.2;
          font-weight: 800;
          color: white;
          margin-bottom: 1.5rem;
          animation: fadeInUp 1s ease-out;
        }
        .highlight {
          color: var(--color-primary);
        }
        .hero-subtitle {
          font-size: 1.5rem;
          color: rgba(255,255,255,0.9);
          margin-bottom: 2rem;
          animation: fadeInUp 1s ease-out 0.3s backwards;
        }
        .hero-btn {
          width: fit-content;
          font-size: 1.2rem;
          padding: 1rem 3rem;
          animation: fadeInUp 1s ease-out 0.6s backwards;
        }
        @keyframes zoomIn {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .hero-title { font-size: 2.5rem; }
          .hero-subtitle { font-size: 1.1rem; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
