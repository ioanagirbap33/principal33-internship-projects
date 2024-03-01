import { questionsQuizTwo } from "../mocks/questionMocks"
import { Quiz } from "../components/Quiz"
export const QuizTwo = () => {
    return (
        <div>
             <Quiz questions={questionsQuizTwo}/>
        </div>
    )

}