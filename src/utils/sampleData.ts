export interface DataProps {
    id?: number;
    subject: string;
    question: string;
    answer: string;
}

export const sampleData: DataProps[] = [
    {
        id: 1,
        subject: 'Math',
        question: 'What is 2 + 2?',
        answer: '4',
    },
    {
        id: 2,
        subject: 'Math',
        question: 'What is 5 x 5?',
        answer: '25',
    },
    {
        id: 3,
        subject: 'Math',
        question: 'What is 10 / 2?',
        answer: '5',
    },
    {
        id: 4,
        subject: 'Science',
        question: 'What is the powerhouse of the cell?',
        answer: 'Mitochondria',
    },
    {
        id: 5,
        subject: 'Science',
        question: 'What is the atomic number of Hydrogen?',
        answer: '1',
    },
    {
        id: 6,
        subject: 'Science',
        question: 'What is the chemical symbol for Gold?',
        answer: 'Au',
    },
    {
        id: 7,
        subject: 'History',
        question: 'Who was the first president of the United States?',
        answer: 'George Washington',
    },
    {
        id: 8,
        subject: 'History',
        question: 'Who was the first emperor of Rome?',
        answer: 'Augustus',
    },
    {
        id: 9,
        subject: 'History',
        question: 'Who was the first emperor of China?',
        answer: 'Qin Shi Huang',
    },
];