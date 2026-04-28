import React from 'react';
import { motion } from 'framer-motion';
import { assessments } from '../data/mockData';
import { Users, FileText, Settings, Plus, Edit, Trash2, PieChart } from 'lucide-react';

const Admin = () => {
    return (
        <div style={{ padding: '40px' }}>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                <div>
                    <h1 style={{ marginBottom: '5px' }}>Admin <span className="text-gradient">Control Center</span></h1>
                    <p style={{ color: 'var(--text-dim)' }}>Manage assessments and monitor student progress</p>
                </div>
                <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Plus size={20} /> Create New Test
                </button>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px', marginBottom: '50px' }}>
                {[
                    { label: 'Total Students', value: '1,284', icon: Users, color: 'var(--primary-light)' },
                    { label: 'Tests Taken', value: '3,592', icon: FileText, color: 'var(--accent)' },
                    { label: 'Careers Mapped', value: '42', icon: PieChart, color: '#ffb703' },
                    { label: 'System Health', value: 'Optimal', icon: Settings, color: '#4cc9f0' }
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card"
                        style={{ padding: '25px' }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                            <stat.icon color={stat.color} size={24} />
                            <div style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>+12% vs last month</div>
                        </div>
                        <div style={{ fontSize: '1.8rem', fontWeight: 800 }}>{stat.value}</div>
                        <div style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>{stat.label}</div>
                    </motion.div>
                ))}
            </div>

            <div className="glass-card" style={{ padding: '30px' }}>
                <h2 style={{ marginBottom: '25px' }}>Active Assessment Tools</h2>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--glass-border)', color: 'var(--text-dim)' }}>
                                <th style={{ padding: '15px' }}>Assessment Name</th>
                                <th>Type</th>
                                <th>Completed</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {assessments.map((a, i) => (
                                <tr key={a.id} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                                    <td style={{ padding: '15px', fontWeight: 600 }}>{a.title}</td>
                                    <td>Personality</td>
                                    <td>1,120 students</td>
                                    <td><span style={{ color: 'var(--accent)', background: 'rgba(0, 245, 212, 0.1)', padding: '4px 10px', borderRadius: '20px', fontSize: '0.8rem' }}>Live</span></td>
                                    <td>
                                        <div style={{ display: 'flex', gap: '15px' }}>
                                            <button style={{ background: 'none', border: 'none', color: 'var(--text-dim)', cursor: 'pointer' }}><Edit size={18} /></button>
                                            <button style={{ background: 'none', border: 'none', color: 'rgba(255, 77, 77, 0.7)', cursor: 'pointer' }}><Trash2 size={18} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Admin;
