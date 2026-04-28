export const assessments = [
    {
        id: 'personality-1',
        title: 'Personality Matrix',
        description: 'Discover your core personality traits and how they align with workplace dynamics.',
        questions: [
            { id: 1, text: 'I enjoy working in large, fast-paced teams.', type: 'likert' },
            { id: 2, text: 'I prefer logical analysis over emotional reasoning.', type: 'likert' },
            { id: 3, text: 'I find creative problem solving more fulfilling than repetitive tasks.', type: 'likert' }
        ]
    },
    {
        id: 'skills-1',
        title: 'Technical Aptitude',
        description: 'Evaluate your strengths in logic, mathematics, and systematic thinking.',
        questions: [
            { id: 1, text: 'I can easily spot patterns in complex data.', type: 'likert' },
            { id: 2, text: 'I enjoy building and assembling mechanical or digital systems.', type: 'likert' },
            { id: 3, text: 'I am comfortable learning new software or tools quickly.', type: 'likert' }
        ]
    }
];

export const careers = [
    {
        id: 'c1',
        title: 'Software Architect',
        description: 'Design and oversee complex digital ecosystems.',
        alignment: ['logical', 'technical', 'creative'],
        salary: '$120k - $200k'
    },
    {
        id: 'c2',
        title: 'UX Designer',
        description: 'Create intuitive and beautiful digital experiences.',
        alignment: ['creative', 'empathetic', 'technical'],
        salary: '$80k - $150k'
    },
    {
        id: 'c3',
        title: 'Data Scientist',
        description: 'Extract meaningful insights from vast amounts of information.',
        alignment: ['analytical', 'mathematical', 'technical'],
        salary: '$100k - $180k'
    }
];
