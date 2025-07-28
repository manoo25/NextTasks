"use client";
import { incrementCounter, decrementCounter } from "@/actions/counter.actions";

/**
 * TODO: LAB1
 * REFACTOR THE BELOW LOGIC AND PLEASE communicate with the next APIs via next server action instead of client communication below
 */


import { FormEvent, useState } from "react";

export default function ServerApiCounterPage() {
  const [incrementCount, setIncrementCount] = useState(0);
  const [decrementCount, setDecrementCount] = useState(0);

  // const incrementHandler = async (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.currentTarget);
  //   const counter = formData.get("counter") as string;

  //   const response = await fetch("/api/increment", {
  //     method: "POST",
  //     body: JSON.stringify({ counter }),
  //   });
  //   const data = await response.json();
  //   setIncrementCount(data.counter);

  // };

  const incrementHandler = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const data = await incrementCounter({ counter: incrementCount }, formData);
  setIncrementCount(data.counter);
};

  // const decrementHandler = async (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.currentTarget);
  //   const counter = formData.get("counter") as string;
  //   const response = await fetch("/api/decrement", {
  //     method: "POST",
  //     body: JSON.stringify({ counter }),
  //   });
  //   const data = await response.json();
  //   setDecrementCount(data.counter);
  // };

  const decrementHandler = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const data = await decrementCounter({ counter: decrementCount }, formData);
  setDecrementCount(data.counter);
};

  return (
    <div className="flex flex-col gap-4">
      <p>Count: {incrementCount + decrementCount}</p>
      <form
        onSubmit={incrementHandler}
        className="flex flex-row items-center justify-center p-2 border border-black bg-red-200 rounded shadow-md"
      >
        <input type="hidden" name="counter" value={incrementCount} />
        <button type="submit">Increment</button>
      </form>
      <form
        onSubmit={decrementHandler}
        className="flex flex-row items-center justify-center p-2 border border-black bg-blue-200 rounded shadow-md"
      >
        <input type="hidden" name="counter" value={decrementCount} />
        <button type="submit">Decrement</button>
      </form>
    </div>
  );
}
