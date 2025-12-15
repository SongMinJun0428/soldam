import React, { createContext, useContext, useState, useEffect } from 'react';

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
    const [orders, setOrders] = useState([]);

    // Load orders from localStorage
    useEffect(() => {
        const savedOrders = localStorage.getItem('soldam_orders');
        if (savedOrders) {
            setOrders(JSON.parse(savedOrders));
        }
    }, []);

    // Save orders to localStorage
    useEffect(() => {
        localStorage.setItem('soldam_orders', JSON.stringify(orders));
    }, [orders]);

    const addOrder = (orderData) => {
        const newOrder = {
            id: `ORD-${Date.now()}`,
            date: new Date().toISOString(),
            status: '배송준비중', // 배송준비중, 배송중, 배송완료
            ...orderData
        };
        setOrders([newOrder, ...orders]);
        return newOrder.id;
    };

    const updateOrderStatus = (orderId, status) => {
        setOrders(orders.map(order =>
            order.id === orderId ? { ...order, status } : order
        ));
    };

    return (
        <OrderContext.Provider value={{ orders, addOrder, updateOrderStatus }}>
            {children}
        </OrderContext.Provider>
    );
};
