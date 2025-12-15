import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from './ToastContext';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const { addToast } = useToast();

    useEffect(() => {
        const storedUser = localStorage.getItem('soldam_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setIsAuthenticated(true);
        }
    }, []);

    const login = (email, password) => {
        // Mock login logic
        // In a real app, this would verify with a backend
        const storedUsers = JSON.parse(localStorage.getItem('soldam_users') || '[]');
        const foundUser = storedUsers.find(u => u.email === email && u.password === password);

        if (foundUser) {
            const userData = { email: foundUser.email, name: foundUser.name };
            setUser(userData);
            setIsAuthenticated(true);
            localStorage.setItem('soldam_user', JSON.stringify(userData));
            addToast(`${userData.name}님 환영합니다!`, 'success');
            return { success: true };
        }
        addToast('이메일 또는 비밀번호가 일치하지 않습니다.', 'error');
        return { success: false, message: '이메일 또는 비밀번호가 일치하지 않습니다.' };
    };

    const signup = (name, email, password) => {
        // Mock signup logic
        const storedUsers = JSON.parse(localStorage.getItem('soldam_users') || '[]');
        if (storedUsers.find(u => u.email === email)) {
            return { success: false, message: '이미 존재하는 이메일입니다.' };
        }

        const newUser = { name, email, password };
        storedUsers.push(newUser);
        localStorage.setItem('soldam_users', JSON.stringify(storedUsers));

        // Auto login after signup
        setUser({ email, name });
        setIsAuthenticated(true);
        localStorage.setItem('soldam_user', JSON.stringify({ email, name }));
        addToast('회원가입이 완료되었습니다.', 'success');
        return { success: true };
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('soldam_user');
        addToast('로그아웃 되었습니다.', 'info');
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
