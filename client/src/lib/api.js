const API_URL = "http://localhost:5000/api/generate";

export const generateStudySet = async (prompt, signal) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
    signal,
  });

  if (!response.ok) {
    throw new Error("Failed to generate study set");
  }

  const data = await response.json();

  if (!data.success || !data.data) {
    throw new Error("Invalid response from server");
  }

  return data.data;
};