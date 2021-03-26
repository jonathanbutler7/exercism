//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(str) {
    this.str = str;
  }

  get rows() {
    return this.str.split('\n').map((row) => row.split(' ').map((el) => +el));
  }

  get columns() {
    return this.rows[0].map((_element, index) =>
      this.rows.map((row) => row[index])
    );
  }
}
