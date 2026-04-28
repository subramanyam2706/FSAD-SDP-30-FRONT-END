import React from 'react';
import { useAuth } from '../context/AuthContext';
import { LogOut, User, LayoutDashboard, Database, ClipboardList, Target } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const { user, logout } = useAuth();
    const location = useLocation();

    if (!user) return null;

    const isAdmin = user.role === 'admin';

    return (
        <nav className="glass-card" style={{
            margin: '20px',
            padding: '15px 30px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'sticky',
            top: '20px',
            zIndex: 1000
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'var(--primary)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Target color="white" size={24} />
                </div>
                <h2 className="text-gradient" style={{ margin: 0 }}>PathFinder</h2>
            </div>

            <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
                <Link to={isAdmin ? "/admin" : "/dashboard"} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: location.pathname.includes('dashboard') || location.pathname === '/admin' ? 'var(--accent)' : 'inherit'
                }}>
                    <LayoutDashboard size={18} />
                    {isAdmin ? 'Admin Panel' : 'Dashboard'}
                </Link>

                {!isAdmin && (
                    <>
                        <Link to="/assessments" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <ClipboardList size={18} />
                            Assessments
                        </Link>
                        <Link to="/careers" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Database size={18} />
                            Careers
                        </Link>
                    </>
                )}

                <div style={{ width: '1px', height: '24px', background: 'var(--glass-border)' }}></div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>{user.name}</div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'capitalize' }}>{user.role}</div>
                    </div>
                    <button onClick={logout} className="btn-primary" style={{ padding: '8px', borderRadius: '8px' }}>
                        <LogOut size={18} />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
