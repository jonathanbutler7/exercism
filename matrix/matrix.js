//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(str) {
    this.str = str
      .split('\n')
      .map((row) => row.split(' ').map((el) => +el));
  }

  get rows() {
    return this.str;
  }

  columns(col) {
    let res = [];
    this.str.forEach((arr) => {
      res.push(arr[col]);
    });
    return res;
  }
}
