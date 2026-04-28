import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { assessments } from '../data/mockData';
import { ArrowLeft, ArrowRight, CheckCircle, BrainCircuit } from 'lucide-react';

const AssessmentEngine = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const assessment = assessments.find(a => a.id === id);
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [completed, setCompleted] = useState(false);

    if (!assessment) return <div>Assessment not found</div>;

    const handleNext = () => {
        if (currentStep < assessment.questions.length - 1) {
            setCurrentStep(prev => prev + 1);
        } else {
            setCompleted(true);
            // In a real app, save results here
            setTimeout(() => navigate('/results'), 2000);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) setCurrentStep(prev => prev - 1);
    };

    const setAnswer = (val) => {
        setAnswers({ ...answers, [assessment.questions[currentStep].id]: val });
    };

    return (
        <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px' }}>
            <AnimatePresence mode="wait">
                {!completed ? (
                    <motion.div
                        key="question"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="glass-card"
                        style={{ padding: '40px' }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
                            <span style={{ color: 'var(--primary-light)', fontWeight: 600 }}>Question {currentStep + 1} of {assessment.questions.length}</span>
                            <div style={{ width: '100px', height: '6px', background: 'var(--glass)', borderRadius: '3px', overflow: 'hidden', marginTop: '10px' }}>
                                <div style={{
                                    width: `${((currentStep + 1) / assessment.questions.length) * 100}%`,
                                    height: '100%',
                                    background: 'var(--primary)',
                                    transition: 'width 0.3s ease'
                                }}></div>
                            </div>
                        </div>

                        <h2 style={{ marginBottom: '40px', fontSize: '1.8rem' }}>{assessment.questions[currentStep].text}</h2>

                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', marginBottom: '50px' }}>
                            {[1, 2, 3, 4, 5].map((val) => (
                                <button
                                    key={val}
                                    onClick={() => setAnswer(val)}
                                    style={{
                                        flex: 1,
                                        padding: '15px',
                                        borderRadius: '12px',
                                        border: '1px solid var(--glass-border)',
                                        background: answers[assessment.questions[currentStep].id] === val ? 'var(--primary)' : 'var(--glass)',
                                        color: 'white',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    {val === 1 ? 'Strongly Disagree' : val === 5 ? 'Strongly Agree' : val}
                                </button>
                            ))}
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <button
                                onClick={handleBack}
                                disabled={currentStep === 0}
                                style={{ opacity: currentStep === 0 ? 0.3 : 1, display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
                            >
                                <ArrowLeft size={20} /> Back
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={!answers[assessment.questions[currentStep].id]}
                                className="btn-primary"
                                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                            >
                                {currentStep === assessment.questions.length - 1 ? 'Finish' : 'Next'} <ArrowRight size={20} />
                            </button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="completed"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="glass-card"
                        style={{ padding: '60px', textAlign: 'center' }}
                    >
                        <CheckCircle size={80} color="var(--accent)" style={{ marginBottom: '30px' }} />
                        <h1>Assessment Complete!</h1>
                        <p style={{ color: 'var(--text-dim)', marginTop: '10px' }}>Analyzing your responses to generate personalized career paths...</p>
                        <div style={{ marginTop: '40px' }}>
                            <BrainCircuit size={40} className="text-gradient" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AssessmentEngine;
