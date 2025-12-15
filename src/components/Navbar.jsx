import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import './Navbar.css';
import './NavbarSearch.css';

/* Add this to Navbar.css or inline style */
const dropdownStyles = `
  .user-menu { position: relative; display: flex; align-items: center; gap: 10px; cursor: pointer; }
  .user-dropdown {
    display: none;
    position: absolute;
    top: 100%;
    right: 0;
    background: white;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    border-radius: 4px;
    padding: 10px;
    min-width: 120px;
    z-index: 100;
  }
  .user-menu:hover .user-dropdown { display: flex; flex-direction: column; gap: 8px; }
  .user-dropdown a { font-size: 0.9rem; color: #333; text-decoration: none; }
  .user-dropdown a:hover { color: var(--color-primary); }
`;
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useShop } from '../context/ShopContext';
import AuthModal from './AuthModal';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { cartCount, toggleCart } = useCart();
  const { user, isAuthenticated, logout } = useAuth();
  const { searchQuery, setSearchQuery, setSelectedCategory } = useShop();
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, category) => {
    e.preventDefault();
    setSelectedCategory(category);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-content">
        <div className="logo-container">
          <img src={logo} alt="솔담" className="logo" />
          <span className="brand-name">솔담</span>
        </div>
        <div className="nav-links">
          <a href="#" className="nav-link" onClick={(e) => handleNavClick(e, '전체')}>전체</a>
          <a href="#" className="nav-link" onClick={(e) => handleNavClick(e, '김치/반찬')}>김치/반찬</a>
          <a href="#" className="nav-link" onClick={(e) => handleNavClick(e, '전통간식')}>전통간식</a>
          <a href="#" className="nav-link" onClick={(e) => handleNavClick(e, '차/음료')}>차/음료</a>
          <a href="#" className="nav-link" onClick={(e) => handleNavClick(e, '밀키트')}>밀키트</a>
          <a href="#" className="nav-link" onClick={(e) => handleNavClick(e, '선물세트')}>선물세트</a>
        </div>
        <div className="nav-actions">
          <div className="search-bar">
            <input
              type="text"
              placeholder="검색"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="icon-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
          </div>
          {isAuthenticated ? (
            <div className="user-menu">
              <span className="user-name">{user.name}님</span>
              <div className="user-dropdown">
                <a href="/mypage">마이페이지</a>
                <a href="/wishlist">찜한 상품</a>
                <a href="/admin">관리자</a>
                <button className="text-btn" onClick={logout}>로그아웃</button>
              </div>
            </div>
          ) : (
            <button className="text-btn" onClick={() => setIsAuthOpen(true)}>로그인</button>
          )}
          <button className="icon-btn cart-btn" onClick={toggleCart}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            <span className="cart-count">{cartCount}</span>
          </button>
        </div>
      </div>
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
      <style>{dropdownStyles}</style>
    </nav>
  );
};

export default Navbar;
