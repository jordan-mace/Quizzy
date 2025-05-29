
export type QuizData = {
    id: string;
    title: string;
    description: string;
    questions: {
        question: string;
        questionType: 'text' | 'multiple-choice';
        options: string[];
        correctAnswer: number; // Index of the correct answer in the options array
    }[];
};