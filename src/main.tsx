import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css.ts'
import App from './App.tsx'
import Navbar from './components/NavBar/Navbar.tsx'
import DarkModeProvider from './providers/DarkModeProvider.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyQuizzes from './components/MyQuizzes/MyQuizzes.tsx'
import Quiz from './components/Quiz/Quiz.tsx'
import NewQuiz from './components/NewQuiz/NewQuiz.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DarkModeProvider>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/my-quizzes" element={<MyQuizzes />} />
          <Route path="/new-quiz" element={<NewQuiz />} />
          <Route path="/quiz/:data" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  </StrictMode >
)
