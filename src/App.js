import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Welcome from './components/Welcome';
import Game from './components/Game';
import Result from './components/Result';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  
  const [score , setScore] = useState(0);

  const restartQuiz = () => {
    setScore(0);
  }

  return (
    <div className="App">
      <header className="App-header">
       <h1>Quiz</h1>
      </header>
      <main>
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
      </main>
    </div>
  );
}

export default App;
