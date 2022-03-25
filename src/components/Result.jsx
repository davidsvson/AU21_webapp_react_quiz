const Result = ({score, restartQuiz }) => {
    
    return (
        <section>
            <h2>Resultat</h2>
            <p>Du fick {score} rätta svar!</p>
            <button onClick={restartQuiz}>Börja om</button>
        </section>
    )
}

export default Result;