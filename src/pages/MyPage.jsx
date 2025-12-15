import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useOrder } from '../context/OrderContext';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';

const MyPage = () => {
    const { user, logout } = useAuth();
    const { orders } = useOrder();
    const { wishlist } = useWishlist();

    if (!user) {
        return <div className="container" style={{ padding: '100px', textAlign: 'center' }}>로그인이 필요합니다.</div>;
    }

    return (
        <div className="mypage container">
            <div className="profile-section">
                <div className="profile-header">
                    <h2>{user.name}님의 마이페이지</h2>
                    <button onClick={logout} className="btn-secondary">로그아웃</button>
                </div>
                <p className="user-email">{user.email}</p>
            </div>

            <div className="dashboard-grid">
                <div className="dashboard-card order-history">
                    <h3>주문 내역 ({orders.length})</h3>
                    {orders.length === 0 ? (
                        <p className="empty-text">주문 내역이 없습니다.</p>
                    ) : (
                        <div className="order-list">
                            {orders.map(order => (
                                <div key={order.id} className="order-item">
                                    <div className="order-header">
                                        <span className="order-date">{new Date(order.date).toLocaleDateString()}</span>
                                        <span className={`order-status ${order.status === '배송완료' ? 'done' : ''}`}>{order.status}</span>
                                    </div>
                                    <div className="order-body">
                                        <p className="order-summary">{order.items[0].title} 외 {order.items.length - 1}건</p>
                                        <p className="order-total">{order.totalAmount.toLocaleString()}원</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="dashboard-card wishlist-preview">
                    <h3>찜한 상품 ({wishlist.length})</h3>
                    {wishlist.length === 0 ? (
                        <p className="empty-text">찜한 상품이 없습니다.</p>
                    ) : (
                        <div className="wishlist-grid-mini">
                            {wishlist.slice(0, 4).map(product => (
                                <div key={product.id} className="mini-product">
                                    <img src={product.image} alt={product.title} />
                                    <p>{product.title}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <style>{`
        .mypage { padding: var(--spacing-xl) var(--spacing-md); }
        .profile-section { background: #f8f9fa; padding: var(--spacing-lg); border-radius: 8px; margin-bottom: var(--spacing-xl); }
        .profile-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
        .dashboard-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--spacing-lg); }
        .dashboard-card { border: 1px solid #eee; border-radius: 8px; padding: var(--spacing-lg); }
        .dashboard-card h3 { margin-bottom: var(--spacing-md); border-bottom: 2px solid #333; padding-bottom: 10px; }
        .order-item { border-bottom: 1px solid #eee; padding: 15px 0; }
        .order-header { display: flex; justify-content: space-between; margin-bottom: 5px; font-size: 0.9rem; color: #666; }
        .order-status { font-weight: bold; color: var(--color-primary); }
        .order-status.done { color: #2ecc71; }
        .order-summary { font-weight: bold; margin-bottom: 5px; }
        .wishlist-grid-mini { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
        .mini-product img { width: 100%; height: 100px; object-fit: cover; border-radius: 4px; }
        .mini-product p { font-size: 0.8rem; margin-top: 5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .empty-text { color: #999; text-align: center; padding: 20px; }
      `}</style>
        </div>
    );
};

export default MyPage;
