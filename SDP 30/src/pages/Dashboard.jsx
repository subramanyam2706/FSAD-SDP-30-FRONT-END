import React from 'react';
import { motion } from 'framer-motion';
import { assessments } from '../data/mockData';
import { Link } from 'react-router-dom';
import { Play, ClipboardCheck, TrendingUp, Award } from 'lucide-react';

const Dashboard = () => {
    return (
        <div style={{ padding: '40px' }}>
            <div style={{ marginBottom: '40px' }}>
                <h1 style={{ marginBottom: '10px' }}>Hi, <span className="text-gradient">Explorer</span></h1>
                <p style={{ color: 'var(--text-dim)', fontSize: '1.2rem' }}>Ready to discover your perfect career path?</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '50px' }}>
                <div className="glass-card" style={{ padding: '30px', display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <div style={{ padding: '15px', background: 'rgba(157, 78, 221, 0.1)', borderRadius: '15px' }}>
                        <ClipboardCheck color="var(--primary-light)" size={30} />
                    </div>
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>24</div>
                        <div style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>Profiles Matched</div>
                    </div>
                </div>
                <div className="glass-card" style={{ padding: '30px', display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <div style={{ padding: '15px', background: 'rgba(0, 245, 212, 0.1)', borderRadius: '15px' }}>
                        <TrendingUp color="var(--accent)" size={30} />
                    </div>
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>85%</div>
                        <div style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>Match Accuracy</div>
                    </div>
                </div>
                <div className="glass-card" style={{ padding: '30px', display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <div style={{ padding: '15px', background: 'rgba(255, 215, 0, 0.1)', borderRadius: '15px' }}>
                        <Award color="#ffd700" size={30} />
                    </div>
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>Level 4</div>
                        <div style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>Discovery Level</div>
                    </div>
                </div>
            </div>

            <h2 style={{ marginBottom: '25px' }}>Available Assessments</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
                {assessments.map((a, index) => (
                    <motion.div
                        key={a.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-card"
                        style={{ padding: '30px' }}
                    >
                        <h3 style={{ marginBottom: '15px', fontSize: '1.4rem' }}>{a.title}</h3>
                        <p style={{ color: 'var(--text-dim)', marginBottom: '25px', minHeight: '60px' }}>{a.description}</p>
                        <Link to={`/assessment/${a.id}`} className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                            <Play size={18} fill="currentColor" />
                            Start Assessment
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
