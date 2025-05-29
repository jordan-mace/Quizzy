import { navbar } from './Navbar.css.ts'
import { useContext } from 'react'
import { DarkModeContext } from '../../providers/DarkModeContext.ts'
import { LightBulbIcon as Solid } from '@heroicons/react/24/solid'
import { LightBulbIcon as Outline } from '@heroicons/react/24/outline'

function Navbar() {
    const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext)

    return (
        <div className={navbar}>
            <h2><a href="/">Quizzy</a></h2>
            <a href="/new-quiz">New Quiz</a>
            <a href="/my-quizzes">My Quizzes</a>
            <button
                onClick={() => setIsDarkMode(!isDarkMode)}>{isDarkMode ? <Solid style={{ minWidth: "24px" }} /> : <Outline style={{ minWidth: "24px" }} />}</button>
        </div>
    )
}

export default Navbar
