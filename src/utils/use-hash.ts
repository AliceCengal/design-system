import { useEffect, useReducer } from "preact/hooks";

export default function useHash(): [string, (nh: string) => void] {
  const [_, canary] = useReducer(canaryReducer, {});

  useEffect(() => {
    window.addEventListener("hashchange", canary);
    return () => {
      window.removeEventListener("hashchange", canary);
    };
  }, []);

  return [getHash(), setHash];
}

function canaryReducer(s: any) {
  return {};
}

function setHash(newHash: string) {
  window.location.hash = newHash;
}

function getHash() {
  return window.location.hash;
}
