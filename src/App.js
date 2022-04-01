import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Welcome from './components/Welcome';
import Game from './components/Game';
import Result from './components/Result';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  
 // const WELCOME = 'welcome', GAME = 'game', RESULT = 'result';
 // const [currentScreen, setCurrentScreen] = useState(WELCOME);
  const [score , setScore] = useState(0);

  //let content = null;

  const restartQuiz = () => {
    setScore(0);
   // setCurrentScreen(GAME);
  }

  // switch(currentScreen ) {
  //   case WELCOME :
  //     content = <Welcome nextScreen={ () => setCurrentScreen(GAME) } /> 
  //     break;
  //   case GAME : 
  //     content = <Game answeredCorrectly={() => setScore(score + 1)} 
  //                     showResult={() => setCurrentScreen(RESULT) }/>
  //     break;
  //   default:
  //     content = <Result score={score} restartQuiz={restartQuiz} />
  // }

  return (
    <div className="App">
      <header className="App-header">
       <h1>Quiz</h1>
      </header>
      <main>
       <Router>
        <Routes>
          <Route exact path="/" element={
            <Welcome />
          } />
          <Route path="/game" element={
            <Game answeredCorrectly={() => setScore(score + 1)} />
          } />
          <Route path="/game/:currentquestion" element={
            <Game answeredCorrectly={() => setScore(score + 1)} />
          } />
          <Route path="/result" element={
             <Result score={score} restartQuiz={restartQuiz} />
          } />
        </Routes>
       </Router>
      </main>
    </div>
  );
}

export default App;
