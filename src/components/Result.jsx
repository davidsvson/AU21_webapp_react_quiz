import { Link } from "react-router-dom";

const Result = ({score, restartQuiz }) => {
    
    return (
        <section>
            <h2>Resultat</h2>
            <p>Du fick {score} rätta svar!</p>
            <Link to="/game">
                <button onClick={restartQuiz}>Börja om</button>
            </Link>
        </section>
    )
}

export default Result;