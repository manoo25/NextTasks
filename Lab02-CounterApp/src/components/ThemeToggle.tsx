// components/ThemeToggle.tsx
"use client";

import { useEventBus } from "../providers/event-bus.provider";
import { useState } from "react";

export function ThemeToggle() {
  const eventBus = useEventBus();
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    eventBus.emit("change-theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-300 rounded border border-black"
    >
      Toggle Theme ({currentTheme})
    </button>
  );
}
