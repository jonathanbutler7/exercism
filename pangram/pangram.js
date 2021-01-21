//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (str) => {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  str.split('').forEach((char) => {
    let i = alphabet.indexOf(char.toLowerCase());
    if (i > -1) {
      alphabet = alphabet.replace(alphabet[i], '');
    }
  });
  return alphabet.length === 0;
  // let newStr = str.toLowerCase()
  // for (let i = 0; i < alphabet.length; i++) {
  //   if (!newStr.includes(alphabet[i].toLowerCase())) return false;
  // }
  // return true;
};
