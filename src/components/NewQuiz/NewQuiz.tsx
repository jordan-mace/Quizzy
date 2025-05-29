
import { useState } from 'react';
import type { QuizData } from '../Quiz/QuizData.ts';
import { newQuizContainer, newQuizTitle, newQuizDescription, quizQuestion, newQuizInput, newQuizButton } from './NewQuiz.css.ts';

function NewQuiz() {
    const [quizTitle, setQuizTitle] = useState('');
    const [quizQuestions, setQuizQuestions] = useState<QuizData['questions']>([]);
    const [quizDescription, setQuizDescription] = useState('');

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuizTitle(e.target.value);
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setQuizDescription(e.target.value);
    };

    const createQuiz = () => {
        //Save quiz as JSON to localStorage
        const quizData = {
            id: `quiz-${Date.now()}`, // Unique ID based on timestamp
            title: quizTitle,
            description: quizDescription,
            questions: quizQuestions // Initialize with an empty array for questions
        };
        localStorage.setItem(`quiz-${Date.now()}`, JSON.stringify(quizData));
        // Log the created quiz data
        console.log('Quiz Created:', { title: quizTitle, description: quizDescription });
        // Reset fields after creation
        setQuizTitle('');
        setQuizDescription('');
    };

    return (
        <div className={newQuizContainer}>
            <h1 className={newQuizTitle}>Create a New Quiz</h1>
            <input
                type="text"
                placeholder="Quiz Title"
                value={quizTitle}
                onChange={handleTitleChange}
            />
            <textarea
                placeholder="Quiz Description"
                value={quizDescription}
                onChange={handleDescriptionChange}
                className={newQuizDescription}
            />
            <h2>Questions</h2>
            <div>
                {quizQuestions.map((question, index) => (
                    <div key={index} className={quizQuestion}>
                        <input
                            className={newQuizInput}
                            type="text"
                            placeholder={`Question ${index + 1}`}
                            value={question.question}
                            onChange={(e) => {
                                const newQuestions = [...quizQuestions];
                                newQuestions[index].question = e.target.value;
                                setQuizQuestions(newQuestions);
                            }}
                        />
                        <label>Question Type:</label>
                        <select className={newQuizInput} onChange={(e) => {
                            const newQuestions = [...quizQuestions];
                            newQuestions[index].questionType = e.target.value as 'text' | 'multiple-choice';
                            setQuizQuestions(newQuestions);
                        }} value={question.questionType}>
                            <option value="text">Text</option>
                            <option value="multiple-choice">Multiple Choice</option>
                        </select>
                        {question.questionType === 'multiple-choice' && (
                            <div>
                                <label>Options:</label>
                                {question.options.map((option, optionIndex) => (
                                    <input
                                        key={optionIndex}
                                        className={newQuizInput}
                                        type="text"
                                        placeholder={`Option ${optionIndex + 1}`}
                                        value={option}
                                        onChange={(e) => {
                                            const newQuestions = [...quizQuestions];
                                            newQuestions[index].options[optionIndex] = e.target.value;
                                            setQuizQuestions(newQuestions);
                                        }}
                                    />
                                ))}
                                <button className={newQuizButton} onClick={() => {
                                    const newQuestions = [...quizQuestions];
                                    newQuestions[index].options.push('');
                                    setQuizQuestions(newQuestions);
                                }}>Add Option</button>
                            </div>
                        )}
                        {question.questionType === 'multiple-choice' && (
                            <input
                                className={newQuizInput}
                                type="number"
                                placeholder="Correct Answer Index (0-based)"
                                value={question.answer || ''}
                                onChange={(e) => {
                                    const newQuestions = [...quizQuestions];
                                    const answerIndex = parseInt(e.target.value, 10);
                                    if (!isNaN(answerIndex)) {
                                        newQuestions[index].answer = answerIndex;
                                    }
                                    setQuizQuestions(newQuestions);
                                }}
                            />
                        )}
                        {question.questionType === 'text' && (
                            <input
                                className={newQuizInput}
                                type="text"
                                placeholder="Correct Answer"
                                value={question.answer || ''}
                                onChange={(e) => {
                                    const newQuestions = [...quizQuestions];
                                    newQuestions[index].answer = e.target.value;
                                    setQuizQuestions(newQuestions);
                                }}
                            />
                        )}
                        <button className={newQuizButton} onClick={() => {
                            const newQuestions = quizQuestions.filter((_, i) => i !== index);
                            setQuizQuestions(newQuestions);
                        }}>Remove Question</button>
                    </div>
                ))}
                <button onClick={() => {
                    setQuizQuestions([...quizQuestions, { question: '', questionType: 'text', options: [] }]);
                }}>Add Question</button>
            </div>

            <button type="submit" onClick={createQuiz}>Create Quiz</button>
        </div>
    );
}

export default NewQuiz;