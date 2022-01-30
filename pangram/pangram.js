//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (str) => {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let counter = str.length;
  while (alphabet.length >= 0) {
    if (counter === 0 || alphabet.length === 0) break;
    if (str.toLowerCase().indexOf(alphabet[0]) !== -1) {
      alphabet = alphabet.replace(alphabet[0], '');
    }
    counter--;
  }
  return alphabet.length === 0;
};
