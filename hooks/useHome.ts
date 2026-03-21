import { useMemo } from "react";

export default function useHome(name?: string) {
  const greeting = useMemo(() => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  }, []);

  const displayName = name ?? "User";

  return {
    greeting,
    displayName,
    message: `${greeting}, ${displayName}`,
  };
}