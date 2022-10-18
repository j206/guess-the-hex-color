import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState<string>();
  const [answers, setAnswers] = useState<string[]>();
  const [isIncorrect, setIsIncorrect] = useState<boolean>();

  const reset = () => {
    const correctColor = getColor();
    setColor(correctColor);
    setAnswers(
      [correctColor, getColor(), getColor()].sort(() => Math.random() - 0.5)
    );
  };

  const getColor = () => {
    const colorInt = Math.floor(Math.random() * 16777216);
    return `#${colorInt.toString(16).toUpperCase()}`;
  };

  // Run code on mount; use empty dependency array
  useEffect(() => {
    reset();
  }, []);

  const handleAnswerClicked = (answer: string) => {
    if (answer === color) {
      setIsIncorrect(false);
      reset();
    } else {
      setIsIncorrect(true);
    }
  };

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
        {isIncorrect && <div className="wrong-answer">Wrong Answer! Try again!</div>}
      </div>
    </div>
  );
}

export default App;
