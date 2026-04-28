import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, LogIn, Sparkles } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const result = login(email, password);
        if (result.success) {
            navigate(email.includes('admin') ? '/admin' : '/dashboard');
        } else {
            setError(result.message);
        }
    };

    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--bg-gradient)'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card"
                style={{
                    padding: '40px',
                    width: '100%',
                    maxWidth: '450px',
                    textAlign: 'center'
                }}
            >
                <div style={{ marginBottom: '30px' }}>
                    <div style={{
                        display: 'inline-flex',
                        padding: '15px',
                        background: 'var(--glass)',
                        borderRadius: '20px',
                        marginBottom: '20px'
                    }}>
                        <Sparkles size={40} color="var(--primary-light)" />
                    </div>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Welcome Back</h1>
                    <p style={{ color: 'var(--text-dim)' }}>Plan your career path with AI precision</p>
                </div>

                <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-dim)' }}>Email Address</label>
                        <div style={{ position: 'relative' }}>
                            <Mail size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
                            <input
                                type="email"
                                placeholder="student@career.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{ width: '100%', paddingLeft: '40px' }}
                                required
                            />
                        </div>
                    </div>

                    <div style={{ marginBottom: '25px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-dim)' }}>Password</label>
                        <div style={{ position: 'relative' }}>
                            <Lock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
                            <input
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{ width: '100%', paddingLeft: '40px' }}
                                required
                            />
                        </div>
                    </div>

                    {error && <div style={{ color: '#ff4d4d', marginBottom: '20px', textAlign: 'center' }}>{error}</div>}

                    <button type="submit" className="btn-primary" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                        <LogIn size={20} />
                        Sign In
                    </button>
                </form>

                <div style={{ marginTop: '30px', color: 'var(--text-dim)', fontSize: '0.85rem' }}>
                    <p>Mock Credentials:</p>
                    <p>Admin: admin@career.com / admin123</p>
                    <p>Student: student@career.com / student123</p>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
