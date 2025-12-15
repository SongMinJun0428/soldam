import React, { useState } from 'react';
import { useOrder } from '../context/OrderContext';
import { products } from '../data/products';

const AdminPage = () => {
    const { orders, updateOrderStatus } = useOrder();
    const [activeTab, setActiveTab] = useState('orders');

    // Mock Sales Data
    const totalSales = orders.reduce((sum, order) => sum + order.totalAmount, 0);
    const totalOrders = orders.length;

    return (
        <div className="admin-page container">
            <h2 className="page-title">관리자 대시보드</h2>

            <div className="admin-tabs">
                <button className={activeTab === 'dashboard' ? 'active' : ''} onClick={() => setActiveTab('dashboard')}>대시보드</button>
                <button className={activeTab === 'orders' ? 'active' : ''} onClick={() => setActiveTab('orders')}>주문 관리</button>
                <button className={activeTab === 'products' ? 'active' : ''} onClick={() => setActiveTab('products')}>상품 관리</button>
            </div>

            <div className="admin-content">
                {activeTab === 'dashboard' && (
                    <div className="dashboard-stats">
                        <div className="stat-card">
                            <h3>총 매출액</h3>
                            <p className="stat-value">{totalSales.toLocaleString()}원</p>
                        </div>
                        <div className="stat-card">
                            <h3>총 주문수</h3>
                            <p className="stat-value">{totalOrders}건</p>
                        </div>
                    </div>
                )}

                {activeTab === 'orders' && (
                    <div className="order-management">
                        <h3>주문 목록</h3>
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>주문번호</th>
                                    <th>주문일시</th>
                                    <th>주문자</th>
                                    <th>금액</th>
                                    <th>상태</th>
                                    <th>관리</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map(order => (
                                    <tr key={order.id}>
                                        <td>{order.id}</td>
                                        <td>{new Date(order.date).toLocaleDateString()}</td>
                                        <td>{order.userId}</td>
                                        <td>{order.totalAmount.toLocaleString()}원</td>
                                        <td>
                                            <span className={`status-badge ${order.status}`}>{order.status}</span>
                                        </td>
                                        <td>
                                            <select
                                                value={order.status}
                                                onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                                            >
                                                <option value="배송준비중">배송준비중</option>
                                                <option value="배송중">배송중</option>
                                                <option value="배송완료">배송완료</option>
                                            </select>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {activeTab === 'products' && (
                    <div className="product-management">
                        <h3>상품 목록 ({products.length})</h3>
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>상품명</th>
                                    <th>가격</th>
                                    <th>재고</th>
                                    <th>관리</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.slice(0, 20).map(product => (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.title}</td>
                                        <td>{product.price.toLocaleString()}원</td>
                                        <td>999</td>
                                        <td>
                                            <button className="btn-small">수정</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <p className="more-text">...외 {products.length - 20}개 상품</p>
                    </div>
                )}
            </div>
            <style>{`
        .admin-page { padding: var(--spacing-xl) var(--spacing-md); }
        .admin-tabs { display: flex; gap: 10px; margin-bottom: 20px; border-bottom: 1px solid #ddd; }
        .admin-tabs button { padding: 10px 20px; background: none; border: none; font-size: 1rem; cursor: pointer; }
        .admin-tabs button.active { border-bottom: 2px solid var(--color-primary); font-weight: bold; color: var(--color-primary); }
        .stat-card { background: #f8f9fa; padding: 20px; border-radius: 8px; display: inline-block; margin-right: 20px; min-width: 200px; }
        .stat-value { font-size: 1.5rem; font-weight: bold; color: var(--color-primary); margin-top: 10px; }
        .admin-table { width: 100%; border-collapse: collapse; margin-top: 10px; }
        .admin-table th, .admin-table td { border: 1px solid #eee; padding: 10px; text-align: left; }
        .admin-table th { background: #f1f2f6; }
        .status-badge { padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; font-weight: bold; }
        .status-badge.배송완료 { background: #d4edda; color: #155724; }
        .status-badge.배송중 { background: #fff3cd; color: #856404; }
        .status-badge.배송준비중 { background: #e2e3e5; color: #383d41; }
        .btn-small { padding: 4px 8px; font-size: 0.8rem; background: #eee; border: none; border-radius: 4px; }
        .more-text { margin-top: 10px; color: #888; text-align: center; }
      `}</style>
        </div>
    );
};

export default AdminPage;
