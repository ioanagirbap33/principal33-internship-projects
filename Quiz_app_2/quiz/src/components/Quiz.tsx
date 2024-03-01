import { QuestionType } from '../mocks/questionMocks'
import './quiz.css'
import {useState} from "react"

interface QuizProps {
  questions: QuestionType[]
}

export const  Quiz = ({questions}: QuizProps) => {
    
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