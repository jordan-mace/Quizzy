import { myQuizzesContainer, myQuizzesList } from "./MyQuizzes.css";

function Quiz() {
    //1. List all quizzes stored in localStorage
    const quizzes = Object.keys(localStorage)
        .filter(key => key.startsWith('quiz-'))
        .map(key => {
            const quizData = localStorage.getItem(key);
            return quizData ? JSON.parse(quizData) : null;
        })
        .filter(quiz => quiz !== null);

    //2. Render the list of quizzes
    return (
        <div className={myQuizzesContainer}>
            <h1>My Quizzes</h1>
            {quizzes.length > 0 ? (
                <ul className={myQuizzesList}>
                    {quizzes.map((payload, index) => (
                        <li key={index}>
                            <h2>{payload.title}</h2>
                            <p>{payload.description}</p>
                            <a href={`/quiz/${btoa(JSON.stringify(payload))}`}>
                                Take Quiz
                            </a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No quizzes found. Create a new quiz!</p>
            )}
        </div>
    );

}

export default Quiz
