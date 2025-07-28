"use client";

import { decrementCounter, incrementCounter } from "@/actions/counter.actions";
import { useActionState } from "react";

export default function ServerCounterPage() {
  // communication way between rendered compoenent and next server
  const [incrementState, incrementAction, isIncrementProcessPending] =
  useActionState(incrementCounter, { counter: 0 });

  const [decrementState, decrementAction, isdecrementProcessPending] =
  useActionState(decrementCounter, { counter: 0 });

  return (
    <div className="flex flex-col gap-4">
      <p>Count: {incrementState.counter + decrementState.counter}</p>
      <form action={incrementAction} className="flex flex-row items-center justify-center p-2 border border-black bg-red-200 rounded shadow-md">
        <input
  type="number"
  name="counter"
  hidden
  value={incrementState.counter}
/>

        <button type="submit">Increment</button>
      </form>
      <form action={decrementAction} className="flex flex-row items-center justify-center p-2 border border-black bg-blue-200 rounded shadow-md">
        <input
  type="number"
  name="counter"
  hidden
  value={decrementState.counter}
/>

        <button type="submit">Decrement</button>
      </form>
    </div>
  );
}
