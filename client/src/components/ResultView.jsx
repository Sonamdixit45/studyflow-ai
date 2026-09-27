function ResultView({ studySet }) {
  if (!studySet) {
    return null;
  }

  return (
    <div className="result-header">
      <h2>{studySet.title}</h2>

      <p>Your study set is ready!</p>

      <p>
        {studySet.flashcards.length} flashcards
        {' • '}
        {studySet.quiz.length} quiz questions
      </p>
    </div>
  );
}

export default ResultView;