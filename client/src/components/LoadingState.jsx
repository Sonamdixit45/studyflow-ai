function LoadingState() {
  return (
    <div className="loading-card">
      <div className="loading-spinner" />

      <h3>Generating your study set...</h3>

      <p>
        Please wait while StudyFlow AI prepares your
        flashcards and quiz.
      </p>
    </div>
  );
}

export default LoadingState;