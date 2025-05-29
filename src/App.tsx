import { root, card } from './App.css.ts'

function App() {
  return (
    <div className={root}>
      <h1>Welcome to Quizzy</h1>
      <div className={card}>
        <p>Quizzy is a simple, open source Vite quiz app! 👋</p>
        <p>All quizzes are stored locally and are totally shareable!</p>
      </div>
    </div>
  )
}

export default App
