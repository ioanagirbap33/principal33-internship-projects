import "./navbar.css"

export const Navbar = () => {

    return (
        <nav className="nav">

            <div className="quiz-options">
                <a href = "/quiz1" className="option">Quiz 1</a>
                <a href = "/quiz2" className="option">Quiz 2</a>
            </div>

            <a href= "/" className="title">
                EXIT
            </a>


            
        </nav>
    )

}