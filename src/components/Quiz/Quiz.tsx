import { quiz } from './Quiz.css.ts'
import { useParams } from 'react-router-dom'
import type { QuizData } from './QuizData.ts'
import { useEffect, useState } from 'react'

function Quiz() {
    //1. Extract the quiz data from the base64 encoded string in the URL
    const { data } = useParams<{ data: string }>()
    const decodedData = data ? atob(data) : null
    const parsedData: QuizData | null = decodedData ? JSON.parse(decodedData) : null

    const [quizData, setQuizData] = useState<QuizData | null>(null)

    useEffect(() => {
        if (parsedData)
            setQuizData(parsedData)
    }, [])

    if (!parsedData || !quizData) {
        return <div className={quiz}><h1>Loading...</h1></div>
    }

    function checkAnswers() {
        // Placeholder function to handle answer checking logic
        console.log("Checking answers...")
    }

    return (
        <div className={quiz}>
            <h1>{quizData.title}</h1>
            <p>{quizData.description}</p>
            <div>
                {quizData.questions.map((question, index) => (
                    <div key={index}>
                        <h2>{index + 1}. {question.question}</h2>
                        <select>
                            {question.options.map((option, optionIndex) => (
                                <option key={optionIndex}>{option}</option>
                            ))}
                        </select>
                    </div>
                ))}
            </div>
            <button onClick={checkAnswers}>Submit Answers</button>
        </div>
    )
}

export default Quiz
