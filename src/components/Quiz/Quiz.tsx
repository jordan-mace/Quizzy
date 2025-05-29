import { quiz, quizItem, quizTitle } from './Quiz.css.ts'
import { useParams } from 'react-router-dom'
import type { QuizData } from './QuizData.ts'
import { useEffect, useState } from 'react'
import { quizButton } from './Quiz.css.ts'

function Quiz() {
    //1. Extract the quiz data from the base64 encoded string in the URL
    const { data } = useParams<{ data: string }>()
    const decodedData = data ? atob(data) : null
    const parsedData: QuizData | null = decodedData ? JSON.parse(decodedData) : null
    const [chosenAnswers, setChosenAnswers] = useState<string[]>([])
    const [quizData, setQuizData] = useState<QuizData | null>(null)
    const [score, setScore] = useState<number | null>(null)

    useEffect(() => {
        if (parsedData)
            setQuizData(parsedData)
    }, [])

    if (!parsedData || !quizData || !quizData.questions || quizData.questions.length === 0) {
        return <div className={quiz}><h1>Loading...</h1></div>
    }

    if (quizData === null) {
        return <div className={quiz}><h1>Quiz not found</h1></div>
    }

    function checkAnswers() {
        if (quizData === null || quizData.questions.length === 0) {
            alert("No questions available to check answers.");
            return;
        }

        //1. Compare the user's answers with the correct answers in quizData
        const correctAnswers = quizData.questions.map((question, index) => {
            if (question.questionType === 'text') {
                return question.answer.toString().toLowerCase() === chosenAnswers[index]?.toLowerCase();
            } else {
                const chosenOption = chosenAnswers[index];
                return parseInt(chosenOption) === question.answer;
            }
        });

        //2. Display the results to the user
        const score = correctAnswers.filter(answer => answer).length;
        setScore(score);
    }

    function setAnswer(questionIndex: number, answer: string) {
        const updatedAnswers = [...chosenAnswers];
        updatedAnswers[questionIndex] = answer;
        setChosenAnswers(updatedAnswers);
    }

    return (
        <div className={quiz}>
            <h1 className={quizTitle}>{quizData.title}</h1>
            <p>{quizData.description}</p>
            <div>
                {quizData.questions.map((question, index) => (
                    <div key={index} className={quizItem}>
                        <p>{question.question}</p>
                        {question.questionType === 'text' ? (
                            <input type="text" placeholder="Your answer" onChange={(e) => setAnswer(index, e.target.value)} />
                        ) : (
                            question.options.map((option, optionIndex) => (
                                <div key={optionIndex}>
                                    <input
                                        type="radio"
                                        name={`question-${index}`}
                                        value={optionIndex}
                                        onChange={(e) => setAnswer(index, e.target.value)}
                                    />
                                    {option}
                                </div>
                            ))
                        )}
                        {score !== null && (
                            <p>
                                Correct Answer: {question.questionType === 'text' ? question.answer : question.options[question.answer as number]}
                            </p>
                        )}
                    </div>
                ))}
            </div>
            {score !== null && (
                <div>
                    <p>Your Score: {score} out of {quizData.questions.length}</p>
                    <p>{(score / quizData.questions.length * 100).toFixed(2)}%</p>
                </div>
            )}
            <button className={quizButton} onClick={checkAnswers}>Check Answers</button>
        </div>
    )
}

export default Quiz
