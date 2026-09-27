import { useState } from 'react';

function Flashcard({ question, answer }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((previousValue) => !previousValue);
  };

  return (
    <div
      className="flashcard"
      onClick={handleFlip}
      role="button"
      tabIndex="0"
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          handleFlip();
        }
      }}
    >
      <p className="flashcard-label">
        {isFlipped ? 'Answer' : 'Question'}
      </p>

      <h3>
        {isFlipped ? answer : question}
      </h3>

      <p className="flashcard-hint">
        Click to {isFlipped ? 'see question' : 'reveal answer'}
      </p>
    </div>
  );
}

export default Flashcard;