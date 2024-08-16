import React from "react";
import range from "../Iterators/utilts";

export default function RunIterators() {
  for (const value of range(0, 10, 1)) {
    console.log(value);
  }

  console.log([...range(1, 10, 1)]);
  console.log([...range(1, 100, 15)]);

  const iterator = range(1, 10, 1);
  console.log(iterator.next());
  console.log(iterator.next());

  return <div>run Iterators</div>;
}
