//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
console.log('hello')

export const gigasecond = (time) => {
  return new Date(time.getTime() + Math.pow(10,12))
};
