import { describe, it, expect } from "vitest";
import range from "./assets/src/Iterators/utilts";

describe("RangeIterator", () => {
  it("should iterate over the range correctly", () => {
    const iterator = range(0, 10, 2);

    expect(iterator.next().value).toBe(0);
    expect(iterator.next().value).toBe(2);
    expect(iterator.next().value).toBe(4);
    expect(iterator.next().value).toBe(6);
    expect(iterator.next().value).toBe(8);
    expect(iterator.next().done).toBe(true);
  });

  it("should handle ranges with step size of 1", () => {
    const iterator = range(1, 5, 1);

    expect(iterator.next().value).toBe(1);
    expect(iterator.next().value).toBe(2);
    expect(iterator.next().value).toBe(3);
    expect(iterator.next().value).toBe(4);
    expect(iterator.next().done).toBe(true);
  });

  it("should handle negative step sizes", () => {
    const iterator = range(10, 0, -2);

    expect(iterator.next().value).toBe(10);
    expect(iterator.next().value).toBe(8);
    expect(iterator.next().value).toBe(6);
    expect(iterator.next().value).toBe(4);
    expect(iterator.next().value).toBe(2);
    expect(iterator.next().done).toBe(true);
  });

  it("should handle cases where the start is greater than end", () => {
    const iterator = range(10, 0, 2);

    expect(iterator.next().done).toBe(true);
  });
});
