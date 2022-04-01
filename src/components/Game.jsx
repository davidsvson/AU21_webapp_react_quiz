import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Game = ({ answeredCorrectly , showResult }) => {


    const questions = getQuestions();
    //const [currentQuestion, setQurrentQuestion ] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [decided , setDecided ] = useState(false);

    let navigate = useNavigate();
    const params = useParams();

    let currentQuestion = 1;
    if ('currentquestion' in params ) {
        if (params.currentquestion > 0 && params.currentquestion <= questions.length) {
            currentQuestion = Number(params.currentquestion);
        }
    }

    let q = questions[currentQuestion - 1];

    const handleDecided = () => {
        setDecided(true);
        if (selectedAnswer === q.correct) {
            answeredCorrectly();
        }
        
        setTimeout(() => {
            setDecided(false);
            if( currentQuestion < questions.length) {
                navigate("/game/"+(currentQuestion + 1));
            } else {
                navigate("/result"); 
            }
        }, 1000); 

    }

    const options = q.answers.map((answer, index) => (
        <p className={"option" + ((decided && index === q.correct) ? ' correct' : '')} key={index}>
            <label>
                <input type="radio" name="question" onClick={() => setSelectedAnswer(index)} /> {answer}
            </label>
        </p>
    ) )

    return (
        <section>
            <h3>{q.question}</h3>
            {options}
            <button disabled={decided} onClick={handleDecided}>Answer</button>
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