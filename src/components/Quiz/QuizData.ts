
export type QuizData = {
    id: string;
    title: string;
    description: string;
    questions: {
        question: string;
        questionType: 'text' | 'multiple-choice';
        options: string[];
        answer: string | number;
    }[];
};