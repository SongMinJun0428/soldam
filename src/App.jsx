import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import WishlistPage from './pages/WishlistPage';
import CheckoutPage from './pages/CheckoutPage';
import MyPage from './pages/MyPage';
import AdminPage from './pages/AdminPage';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { ShopProvider } from './context/ShopContext';
import { ToastProvider } from './context/ToastContext';
import { WishlistProvider } from './context/WishlistContext';
import { OrderProvider } from './context/OrderContext';
import { ReviewProvider } from './context/ReviewContext';
import ErrorBoundary from './ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <ShopProvider>
          <CartProvider>
            <WishlistProvider>
              <OrderProvider>
                <ReviewProvider>
                  <ToastProvider>
                    <Router>
                      <div className="app">
                        <Navbar />
                        <CartDrawer />
                        <Routes>
                          <Route path="/" element={
                            <>
                              <Hero />
                              <ProductGrid />
                            </>
                          } />
                          <Route path="/wishlist" element={<WishlistPage />} />
                          <Route path="/checkout" element={<CheckoutPage />} />
                          <Route path="/mypage" element={<MyPage />} />
                          <Route path="/admin" element={<AdminPage />} />
                        </Routes>
                        <Footer />
                      </div>
                    </Router>
                  </ToastProvider>
                </ReviewProvider>
              </OrderProvider>
            </WishlistProvider>
          </CartProvider>
        </ShopProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
};

export default App;
