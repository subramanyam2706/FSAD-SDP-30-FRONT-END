import React from 'react';
import { motion } from 'framer-motion';
import { careers } from '../data/mockData';
import { Award, Briefcase, DollarSign, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Results = () => {
    return (
        <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
            <header style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h1 style={{ marginBottom: '20px' }}>Your <span className="text-gradient">Career Matches</span></h1>
                <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem' }}>Based on your personality matrix and technical aptitude scores.</p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
                {careers.map((career, index) => (
                    <motion.div
                        key={career.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-card"
                        style={{ padding: '35px', position: 'relative', overflow: 'hidden' }}
                    >
                        <div style={{
                            position: 'absolute',
                            top: '-10px',
                            right: '-10px',
                            background: 'var(--primary)',
                            padding: '20px',
                            borderRadius: '50%',
                            opacity: 0.1,
                            zIndex: 0
                        }}>
                            <Award size={60} />
                        </div>

                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginBottom: '15px' }}>
                                <div style={{ padding: '8px', background: 'var(--glass)', borderRadius: '8px' }}>
                                    <Briefcase color="var(--accent)" size={20} />
                                </div>
                                <h3 style={{ fontSize: '1.5rem' }}>{career.title}</h3>
                            </div>

                            <p style={{ color: 'var(--text-dim)', marginBottom: '25px', lineHeight: '1.6' }}>{career.description}</p>

                            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem' }}>
                                    <DollarSign size={16} color="var(--primary-light)" />
                                    <span>{career.salary}</span>
                                </div>
                                <div style={{ display: 'flex', gap: '5px' }}>
                                    {career.alignment.map(tag => (
                                        <span key={tag} style={{
                                            fontSize: '0.7rem',
                                            background: 'var(--glass)',
                                            padding: '4px 10px',
                                            borderRadius: '20px',
                                            textTransform: 'uppercase',
                                            border: '1px solid var(--glass-border)'
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <button className="btn-primary" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                                Explore Path <ArrowRight size={18} />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div style={{ marginTop: '60px', textAlign: 'center' }}>
                <Link to="/dashboard" style={{ color: 'var(--text-dim)' }}>Retake another assessment</Link>
            </div>
        </div>
    );
};

export default Results;
