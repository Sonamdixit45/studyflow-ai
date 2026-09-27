const API_URL = 'http://localhost:5000';

export const generateStudySet = async (prompt) => {
  const response = await fetch(`${API_URL}/api/generate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Failed to generate study set');
  }

  return data.data;
};