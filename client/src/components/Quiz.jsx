import { useState } from 'react';
import ProgressBar from './ProgressBar';

function Quiz({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  if (!questions || questions.length === 0) {
    return <p>No quiz questions available.</p>;
  }

  const question = questions[currentQuestion];

  const handleAnswer = (option) => {
    if (selectedAnswer) {
      return;
    }

    setSelectedAnswer(option);

    if (option === question.answer) {
      setScore((previousScore) => previousScore + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion === questions.length - 1) {
      setShowResult(true);
      return;
    }

    setCurrentQuestion(
      (previousQuestion) => previousQuestion + 1
    );

    setSelectedAnswer('');
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer('');
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div className="quiz-card">
        <div className="result-header">
          <h2>Quiz Complete!</h2>

          <p>
            You completed all {questions.length} questions.
          </p>
        </div>

        <div className="score-card">
          <p className="score-label">
            Your Score
          </p>

          <h2 className="score-value">
            {score} / {questions.length}
          </h2>
        </div>

        <div className="quiz-action">
          <button
            className="next-button"
            onClick={handleRestart}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const getOptionClass = (option) => {
    if (!selectedAnswer) {
      return 'quiz-option';
    }

    if (option === question.answer) {
      return 'quiz-option correct-option';
    }

    if (option === selectedAnswer) {
      return 'quiz-option incorrect-option';
    }

    return 'quiz-option';
  };

  return (
    <div className="quiz-card">
      <ProgressBar
        current={currentQuestion + 1}
        total={questions.length}
      />

      <p className="question-count">
        Question {currentQuestion + 1} of{' '}
        {questions.length}
      </p>

      <h3 className="quiz-question">
        {question.question}
      </h3>

      <div>
        {question.options.map((option, index) => (
          <button
            key={index}
            className={getOptionClass(option)}
            onClick={() => handleAnswer(option)}
            disabled={selectedAnswer !== ''}
          >
            <span className="option-letter">
              {String.fromCharCode(65 + index)}
            </span>

            {option}
          </button>
        ))}
      </div>

      {selectedAnswer && (
        <div className="quiz-feedback">
          {selectedAnswer === question.answer ? (
            <p className="correct-feedback">
              ✓ Correct! Great job.
            </p>
          ) : (
            <p className="incorrect-feedback">
              ✕ Incorrect. The correct answer is:{' '}
              {question.answer}
            </p>
          )}

          <button
            className="next-button"
            onClick={handleNext}
          >
            {currentQuestion === questions.length - 1
              ? 'Finish Quiz'
              : 'Next Question →'}
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;