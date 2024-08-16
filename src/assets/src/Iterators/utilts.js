class RangeIterator {
  constructor(start, end, step) {
    this.current = start;
    this.end = end;
    this.step = step;
  }

  [Symbol.iterator]() {
    return this;
  }

  next() {
    if (this.current < this.end) {
      const result = { value: this.current, done: false };
      this.current += this.step;
      return result;
    } else {
      return { value: undefined, done: true };
    }
  }
}

function range(start, end, step) {
  return new RangeIterator(start, end, step);
}

export default range;
