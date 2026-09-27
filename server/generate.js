const Groq = require('groq-sdk');
require('dotenv').config();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const generateStudySet = async (prompt) => {
  const completion = await groq.chat.completions.create({
    model: 'openai/gpt-oss-120b',

    messages: [
      {
        role: 'system',
        content: `
You are StudyFlow AI, an expert study assistant.

Generate a study set based on the user's topic.

Return ONLY valid JSON.
Do not use markdown.
Do not add any explanation outside the JSON.

Use exactly this structure:

{
  "title": "string",
  "flashcards": [
    {
      "question": "string",
      "answer": "string"
    }
  ],
  "quiz": [
    {
      "question": "string",
      "options": [
        "string",
        "string",
        "string",
        "string"
      ],
      "answer": "string"
    }
  ]
}

Rules:
- Generate exactly 5 flashcards.
- Generate exactly 5 quiz questions.
- Every quiz question must have exactly 4 options.
- The answer must exactly match one of the options.
- Keep the content beginner-friendly.
- Questions must be directly related to the user's topic.
- Do not include markdown.
- Return valid JSON only.
        `,
      },
      {
        role: 'user',
        content: prompt,
      },
    ],

    temperature: 0.4,

    response_format: {
      type: 'json_object',
    },
  });

  const content = completion.choices[0].message.content;

  return JSON.parse(content);
};

module.exports = generateStudySet;  