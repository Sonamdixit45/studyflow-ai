import { useState } from 'react';

function PromptInput({ onGenerate, isLoading }) {
  const [input, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedInput = input.trim();

    if (!trimmedInput) {
      return;
    }

    onGenerate(trimmedInput);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="study-input">
        What do you want to study?
      </label>

      <textarea
        id="study-input"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="Example: Explain Java OOP concepts for a beginner..."
        rows="6"
        disabled={isLoading}
      />

      <button
        type="submit"
        disabled={isLoading || !input.trim()}
      >
        {isLoading ? 'Generating...' : 'Generate Study Set'}
      </button>
    </form>
  );
}

export default PromptInput;