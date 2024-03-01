import { Quiz } from "../components/Quiz"
import {  questionsQuizOne } from "../mocks/questionMocks"

export const QuizOne = () => {
    return(
     <div>
        <Quiz questions={questionsQuizOne}/>

    </div>
    )
}