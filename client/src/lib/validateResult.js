export const validateStudySet = (data) => {
  if (!data || typeof data !== "object") {
    return false;
  }

  if (
    typeof data.title !== "string" ||
    data.title.trim() === ""
  ) {
    return false;
  }

  if (!Array.isArray(data.flashcards) || data.flashcards.length === 0) {
    return false;
  }

  if (!Array.isArray(data.quiz) || data.quiz.length === 0) {
    return false;
  }

  for (const card of data.flashcards) {
    if (
      !card ||
      typeof card.question !== "string" ||
      typeof card.answer !== "string" ||
      card.question.trim() === "" ||
      card.answer.trim() === ""
    ) {
      return false;
    }
  }

  for (const question of data.quiz) {
    if (
      !question ||
      typeof question.question !== "string" ||
      !Array.isArray(question.options) ||
      question.options.length !== 4 ||
      typeof question.answer !== "string"
    ) {
      return false;
    }

    if (!question.options.includes(question.answer)) {
      return false;
    }
  }

  return true;
};