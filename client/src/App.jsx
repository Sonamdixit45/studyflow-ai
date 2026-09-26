import { useState } from 'react';
import PromptInput from './components/PromptInput';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async (input) => {
    console.log('User input:', input);

    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: input,
        }),
      });

      const data = await response.json();

      console.log('Backend response:', data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>StudyFlow AI</h1>

      <p>
        Turn your study topics into interactive practice.
      </p>

      <PromptInput
        onGenerate={handleGenerate}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;