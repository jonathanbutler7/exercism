//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (str) => {
  if (str.length <= 1) return str;
  return reverseString(str.slice(1)) + str[0]
};
