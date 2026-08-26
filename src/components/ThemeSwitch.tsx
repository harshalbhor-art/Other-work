"use client";

import { useSyncExternalStore } from "react";

type Mode = "auto" | "light" | "dark";

function subscribe(callback: () => void) {
  window.addEventListener("wave-theme-change", callback);
  return () => window.removeEventListener("wave-theme-change", callback);
}

function getSnapshot(): Mode {
  try {
    return (localStorage.getItem("wave-theme") as Mode) || "auto";
  } catch {
    return "auto";
  }
}

function getServerSnapshot(): Mode {
  return "auto";
}

export default function ThemeSwitch() {
  const mode = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function apply(next: Mode) {
    if (next === "light" || next === "dark") {
      document.documentElement.setAttribute("data-theme", next);
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    try {
      localStorage.setItem("wave-theme", next);
    } catch {}
    window.dispatchEvent(new Event("wave-theme-change"));
  }

  return (
    <div className="theme-switch" role="group" aria-label="Theme">
      {(["auto", "light", "dark"] as Mode[]).map((m) => (
        <button
          key={m}
          type="button"
          aria-pressed={mode === m}
          onClick={() => apply(m)}
        >
          {m[0].toUpperCase() + m.slice(1)}
        </button>
      ))}
    </div>
  );
}
