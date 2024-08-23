import { useCallback, useSyncExternalStore } from "react";

function subscribe(cb: () => void) {
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener("storage", cb);
  };
}

export function useLocalStorage(key: string, defaultValue?: string) {
  const value = useSyncExternalStore(
    subscribe,
    () => localStorage.getItem(key),
    () => defaultValue
  );

  const setValue = useCallback(
    (v: string) => {
      localStorage.setItem(key, v);
    },
    [key]
  );
  return [value, setValue] as const;
}
