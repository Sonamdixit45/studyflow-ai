import { useState } from 'react';
import PromptInput from './components/PromptInput';
import FlashcardDeck from './components/FlashcardDeck';
import Quiz from './components/Quiz';
import LoadingState from './components/LoadingState';
import ErrorState from './components/ErrorState';
import ResultView from './components/ResultView';
import { generateStudySet } from './lib/api';

function App() {
  const [studySet, setStudySet] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async (input) => {
    setIsLoading(true);
    setError('');
    setStudySet(null);

    try {
      const studySet = await generateStudySet(input);

      setStudySet(studySet);
    } catch (error) {
      console.error('Error:', error);

      setError(
        error.message || 'Something went wrong'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app">

      <header className="header">
        <div className="header-content">

          <div className="logo">
            <div className="logo-icon">
              S
            </div>

            <h2>StudyFlow AI</h2>
          </div>

          <div className="header-badge">
            AI Study Assistant
          </div>

        </div>
      </header>

      <main className="main">

        {!studySet && !isLoading && (
          <section className="hero">

            <h1>
              Study smarter with{' '}
              <span>AI</span>
            </h1>

            <p>
              Turn any topic into interactive flashcards
              and quizzes in seconds.
            </p>

          </section>
        )}

        <PromptInput
          onGenerate={handleGenerate}
          isLoading={isLoading}
        />

        {isLoading && <LoadingState />}

        {error && (
          <ErrorState message={error} />
        )}

        {studySet && (
          <div className="study-set">

            <ResultView
              studySet={studySet}
            />

            <section className="section">

              <div className="section-title">

                <div className="section-number">
                  1
                </div>

                <h2>Flashcards</h2>

              </div>

              <FlashcardDeck
                flashcards={studySet.flashcards}
              />

            </section>

            <section className="section">

              <div className="section-title">

                <div className="section-number">
                  2
                </div>

                <h2>Knowledge Check</h2>

              </div>

              <Quiz
                questions={studySet.quiz}
              />

            </section>

          </div>
        )}

      </main>

    </div>
  );
}

export default App;