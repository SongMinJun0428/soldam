import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './AuthModal.css';

const AuthModal = ({ isOpen, onClose }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState('');
    const { login, signup } = useAuth();

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        let result;
        if (isLogin) {
            result = login(formData.email, formData.password);
        } else {
            result = signup(formData.name, formData.email, formData.password);
        }

        if (result.success) {
            onClose();
            setFormData({ name: '', email: '', password: '' });
        } else {
            setError(result.message);
        }
    };

    return (
        <div className="auth-overlay">
            <div className="auth-modal">
                <button className="close-btn" onClick={onClose}>&times;</button>
                <h2>{isLogin ? '로그인' : '회원가입'}</h2>

                <form onSubmit={handleSubmit}>
                    {!isLogin && (
                        <div className="form-group">
                            <label>이름</label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                    )}
                    <div className="form-group">
                        <label>이메일</label>
                        <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label>비밀번호</label>
                        <input
                            type="password"
                            required
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                    </div>

                    {error && <p className="error-msg">{error}</p>}

                    <button type="submit" className="btn-primary auth-submit">
                        {isLogin ? '로그인' : '가입하기'}
                    </button>
                </form>

                <p className="auth-switch">
                    {isLogin ? '계정이 없으신가요?' : '이미 계정이 있으신가요?'}
                    <button onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? '회원가입' : '로그인'}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default AuthModal;
