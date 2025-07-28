/**
 * TODO: LAB2
 * Implement theme provider and use event bus or zustand or whatver statemanagement lib you need to change the app theme
 */
// app/providers/theme.provider.tsx
"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useEventBus } from "./event-bus.provider";

type Theme = "light" | "dark";

const ThemeContext = createContext<Theme>("light");

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const eventBus = useEventBus();

  useEffect(() => {
    const handleThemeChange = (newTheme: Theme) => {
      setTheme(newTheme);
    };

    eventBus.on("change-theme", handleThemeChange);

    return () => {
      eventBus.off("change-theme", handleThemeChange);
    };
  }, [eventBus]);

  return (
    <ThemeContext.Provider value={theme}>
      <div className={theme === "dark" ? "bg-black text-white" : "bg-white text-black"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
