import { quiz } from './Quiz.css.ts'
import { useParams } from 'react-router-dom'
import type { QuizData } from './QuizData.ts'
import { useEffect, useState } from 'react'

function Quiz() {
    //1. Extract the quiz data from the base64 encoded string in the URL
    const { data } = useParams<{ data: string }>()
    const decodedData = data ? atob(data) : null
    const parsedData: QuizData | null = decodedData ? JSON.parse(decodedData) : null

    const [chosenAnswers, setChosenAnswers] = useState<string[]>([])

    const [quizData, setQuizData] = useState<QuizData | null>(null)

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
                return question.answer.toLowerCase() === chosenAnswers[index]?.toLowerCase();
            } else {
                return question.options[parseInt(chosenAnswers[index])] === question.answer;
            }
        });
        //2. Display the results to the user
        const score = correctAnswers.filter(answer => answer).length;
        alert(`You scored ${score} out of ${quizData.questions.length}`);
        console.log(chosenAnswers);
    }

    function setAnswer(questionIndex: number, answer: string) {
        const updatedAnswers = [...chosenAnswers];
        updatedAnswers[questionIndex] = answer;
        setChosenAnswers(updatedAnswers);
    }

    return (
        <div className={quiz}>
            <h1>{quizData.title}</h1>
            <p>{quizData.description}</p>
            <div>
                {quizData.questions.map((question, index) => (
                    <div key={index}>
                        <h2>{question.question}</h2>
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
                    </div>
                ))}
            </div>
            <button onClick={checkAnswers}>Check Answers</button>
        </div>
    )
}

export default Quiz
