//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (str) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  str.split('').forEach((char) => {
    let i = alphabet.indexOf(char);
    if (i > -1) {
      alphabet.replace(alphabet[i], '');
    }
  });
  return alphabet.length === 0;
};

// I recognize that this solution does not work, but I am submitting it anyway, because I think the logic is right, and I'm not sure why it's not working, so I want to stick with it.

// Here's the pseudocode

// split string into an array to iterate over it
// if char exists in alphabet, replace that index of alphabet with nothing
// do this for each char of str
// if alphabet is empty at the end of the forEach loop, return true. else return false
