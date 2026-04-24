import {useState, useEffect} from 'react'
import './Quiz.css'
function Quiz() {
  const [score, setScore] = useState(0)
  const [questions, setQuestions] = useState([])
  const [index, setIndex] = useState(0)
  const [correct, setCorrect] = useState(null)

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&category=22&type=boolean')
      .then(response => response.json())
      .then(data => {
        if (data.results) {
          setQuestions(data.results.slice(0, 5))
        }
      })
  }, [])

  const quizsuivant = () => {
    setScore(0)
    setIndex(0)
    fetch('https://opentdb.com/api.php?amount=5&category=22&type=boolean')
      .then(response => response.json())
      .then(data => {
        if (data.results) {
          setQuestions(data.results.slice(0, 5))
        }
      })
  }

  return(
    <>
      <h1>Quiz</h1>
      {index >= questions.length ? (
        <>
          <p>Quiz terminé ! Ton score est de {score}/5</p>
          <button className="Quiz-button" onClick={quizsuivant}>Rejouer</button>
        </>
      ) : (
        <>
          <p> Question {index + 1} sur {questions.length} </p>
          <div className="progression-bar">
            <div className="progression-fill" style={{width: `${((index + 1) / questions.length) * 100}%`}}></div>
          </div>
            {questions[index] && <p>{questions[index].question}</p>}
          <button className="Quiz-button" onClick={() => {
            if (questions[index].correct_answer === 'True') {
              setScore(score + 1)
              setCorrect("correct")
            } else {
              setCorrect("incorrect")
            }
            setTimeout(() => {
              setIndex(index + 1)
              setCorrect(null)
            }, 1000)
          }}>Vrai</button>
          <button className="Quiz-button" onClick={() => {
            if (questions[index].correct_answer === 'False') {
              setScore(score + 1)
              setCorrect("correct")
            } else {
              setCorrect("incorrect")
            }
            setTimeout(() => {
              setIndex(index + 1)
              setCorrect(null)
            }, 1000)
          }}>Faux</button>
          {correct && <p>{correct === "correct" ? "✅ Bonne réponse !" : "❌ Mauvaise réponse !"}</p>}
        </>
      )}
    </>
  )
}
export default Quiz