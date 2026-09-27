function ErrorState({ message }) {
  return (
    <div className="error-card">
      <h3>Something went wrong</h3>

      <p>{message}</p>
    </div>
  );
}

export default ErrorState;