import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState<string>();
  const [answers, setAnswers] = useState<string[]>();
  const [isIncorrect, setIsIncorrect] = useState<boolean>();

  const getColor = () => {
    const colorInt = Math.floor(Math.random() * 16777216);
    return `#${colorInt.toString(16).toUpperCase()}`;
  };

  // Run code on mount; use empty dependency array
  useEffect(() => {
    const correctColor = getColor();
    setColor(correctColor);
    setAnswers([correctColor, getColor(), getColor()]);
  }, []);

  const handleAnswerClicked = (answer: string) => {
    if (answer === color) {
      setIsIncorrect(false);
    } else {
      setIsIncorrect(true);
      // reset
    }
  }

  return (
    <div className="App">
      <div className="col">
        <div className="guess-color" style={{ background: color }}></div>
        <div className="buttons">
          {answers?.map((answer) => (
            <button onClick={() => handleAnswerClicked(answer)} key={answer}>
              {answer}
            </button>
          ))}
        </div>
        {isIncorrect && <div className="wrong-answer">Wrong Answer</div>}
      </div>
    </div>
  );
}

export default App;
