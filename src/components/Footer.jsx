import React, { useState } from 'react';
import InfoModal from './InfoModal';

const Footer = () => {
  const [modalInfo, setModalInfo] = useState({ isOpen: false, title: '', content: null });

  const openModal = (title, content) => {
    setModalInfo({ isOpen: true, title, content });
  };

  const closeModal = () => {
    setModalInfo({ ...modalInfo, isOpen: false });
  };

  const brandContent = (
    <div>
      <p><strong>솔담(Soldam)</strong>은 '자연을 담은 프리미엄 식탁'을 추구하는 고품격 한식 브랜드입니다.</p>
      <br />
      <p>전국 각지의 명인들이 만든 김치, 반찬, 전통 간식부터 신선한 제철 식재료까지, 엄선된 최고의 먹거리만을 전해드립니다.</p>
      <br />
      <p>우리의 철학은 고객의 건강과 행복을 최우선으로 생각하는 것입니다. 정직한 재료와 정성으로 보답하겠습니다.</p>
    </div>
  );

  const careerContent = (
    <div>
      <p>현재 진행 중인 채용 공고가 없습니다.</p>
      <br />
      <p>솔담과 함께 성장하고 싶은 인재분들은 <strong>recruit@soldam.com</strong>으로 이력서를 보내주시면, 인재풀에 등록하여 채용 시 우선적으로 검토하겠습니다.</p>
    </div>
  );

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>솔담</h3>
            <p>자연을 담은 프리미엄 한식 마켓</p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4>쇼핑하기</h4>
              <a href="#">김치/반찬</a>
              <a href="#">전통간식</a>
              <a href="#">차/음료</a>
              <a href="#">밀키트</a>
              <a href="#">선물세트</a>
            </div>
            <div className="link-group">
              <h4>고객센터</h4>
              <a href="#" onClick={(e) => { e.preventDefault(); openModal('브랜드 소개', brandContent); }}>브랜드 소개</a>
              <a href="#" onClick={(e) => { e.preventDefault(); openModal('채용정보', careerContent); }}>채용정보</a>
              <a href="#contact">문의하기</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 솔담. All rights reserved.</p>
        </div>
      </div>
      <InfoModal
        isOpen={modalInfo.isOpen}
        onClose={closeModal}
        title={modalInfo.title}
        content={modalInfo.content}
      />
      <style>{`
        .footer {
          background-color: var(--color-secondary);
          color: var(--color-accent);
          padding: var(--spacing-xl) 0 var(--spacing-md);
        }
        .footer-content {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-bottom: var(--spacing-xl);
        }
        .footer-brand h3 {
          font-size: var(--font-size-xl);
          color: var(--color-primary);
          margin-bottom: var(--spacing-sm);
        }
        .footer-links {
          display: flex;
          gap: var(--spacing-xl);
        }
        .link-group h4 {
          margin-bottom: var(--spacing-md);
          color: var(--color-primary);
        }
        .link-group a {
          display: block;
          margin-bottom: var(--spacing-sm);
          opacity: 0.7;
          transition: opacity 0.2s;
        }
        .link-group a:hover {
          opacity: 1;
        }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: var(--spacing-md);
          text-align: center;
          opacity: 0.5;
          font-size: var(--font-size-sm);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
