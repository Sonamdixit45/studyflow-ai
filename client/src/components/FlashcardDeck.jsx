import Flashcard from './Flashcard';

function FlashcardDeck({ flashcards }) {
  if (!flashcards || flashcards.length === 0) {
    return (
      <p>
        No flashcards available.
      </p>
    );
  }

  return (
    <div>
      {flashcards.map((card, index) => (
        <Flashcard
          key={index}
          question={card.question}
          answer={card.answer}
        />
      ))}
    </div>
  );
}

export default FlashcardDeck;