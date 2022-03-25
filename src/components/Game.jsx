import { useState } from "react";

const Game = ({ answeredCorrectly , showResult }) => {
    const questions = getQuestions();
    const [currentQuestion, setQurrentQuestion ] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [decided, setDecided] = useState(false);

    let q = questions[currentQuestion];

    const handleDecided = () => {
        setDecided(true);
        if (selectedAnswer === q.correct) {
            answeredCorrectly();
        }
        setTimeout(() => {
            if( currentQuestion < questions.length - 1 ) {
                setQurrentQuestion(currentQuestion + 1);
                setSelectedAnswer(null);
                setDecided(false);
            } else {
                showResult();
            }  
        }, 1000); 
    }

    const options = q.answers.map((answer, index) => (
        <p className={"option" + ((decided && index === q.correct) ? ' correct' : '')} 
            key={index}>
            <label>
                <input type="radio" name="question" onClick={() => setSelectedAnswer(index)} /> {answer}
            </label>
        </p>
    ) )

    return (
        <section>
            <h2>Fråga {currentQuestion} av {questions.length}</h2>
            <h3>{q.question}</h3>
            {options}
            <button onClick={handleDecided}>Answer</button>
        </section>
    )
}

function getQuestions() {
    return [
        {
            question: 'När är Julafton?',
            answers: ['24 maj', '24 dec', '3 maj'],
            correct: 1
        },
        {
            question: 'Vad är senaste datum för inlämningsuppgiften?',
            answers: ['24 maj', '24 dec', '18 april'],
            correct: 2
        },
        {
            question: 'Vad är bäst?',
            answers: ['Teams', 'Discord', 'Zoom'],
            correct: 0
        },
        {
            question: 'Vad sitter bredvid t på tangentbordet',
            answers: ['a', 'y', 'v'],
            correct: 1
        }
    ]
}



export default Game;