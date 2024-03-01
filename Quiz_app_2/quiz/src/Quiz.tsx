import './quiz.css'
import {useState} from "react"

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Mars", "Jupiter", "Saturn", "Earth"],
    correctAnswer: "Jupiter",
  },
  {
    question: "What is React ?",
    options: [
      "A JavaScript Framework",
      "A CSS Framework",
      "A Java Framework",
      "Power rangers",
    ],
    correctAnswer: "A JavaScript Framework",
  },
];

export default function Quiz() {
    
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [showText, setShowText] = useState(false)
  const[currentQuestion, setCurrentQuestion] = useState(0)

  const handleAnswearOption = (selectedAnswear: string) => {
    selectedAnswear === questions[currentQuestion].correctAnswer && setScore(score+1)

    const nextQuestion = currentQuestion+1;
    if(nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion)

    }else{
      setShowScore(true)
      score == questions.length -1 && setShowText(true)
    }
  }

  const restartPage = () => {
    setScore(0)
    setShowScore(false)
    setCurrentQuestion(0)
    setShowText(false)
 }


    return (
      <>
          <h1>Quiz game</h1>
          <div className='quiz-app'>
          {showScore ? (
            <div className='score-section'>
              Your score: {score} out of {questions.length}
              {showText && (
                <h4>Congrats! You passed the test!</h4>
              )}
                <div>
                    <button className='restart-button' onClick={restartPage}>Restart</button>
                </div>
            </div>
          ): (
            <>
              
                  <div className='question-section'>
                    <div className='question-count'>
                      
                      <span>Question {currentQuestion + 1}</span> / {questions.length}
                    </div>
                    <div className='question-text'>
                      {questions[currentQuestion].question}
                    </div>
                  </div>
                  <div className='answer-section'>
                    {questions[currentQuestion].options.map((option) => (
                      <button className='answer-button' key={option} onClick={() => handleAnswearOption(option)}>
                        {option}
                      </button>
                    ))}
                  </div>
            </>
          )}
          </div>
      </>
      )
}