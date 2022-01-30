//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const responses = {
  question: 'Sure.',
  caps: 'Whoa, chill out!',
  yelledQ: "Calm down, I know what I'm doing!",
  else: 'Whatever.',
  fine: 'Fine. Be that way!',
};
const isYelled = (prompt) => {
  return prompt.toUpperCase() === prompt;
};
const isQuestion = (prompt) => {
  return prompt[prompt.length - 1] === '?';
};
const isValidSentence = (prompt) => {
  return (
    prompt[prompt.length - 1] === '.' ||
    prompt[prompt.length - 1] === '?' ||
    prompt[prompt.length - 1] === '!'
  );
};

export const hey = (prompt) => {
  prompt = prompt.trim();
  if (isYelled(prompt)) return responses.caps;
  if (isQuestion(prompt)) return responses.question;
  if (isYelled(prompt) && isQuestion(prompt)) return responses.yelledQ;
  if (!isValidSentence(prompt)) return responses.fine;
  return responses.else;
};
