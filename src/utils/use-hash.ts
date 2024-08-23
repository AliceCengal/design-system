import { useSyncExternalStore } from "react";

export default function useHash() {
  const hash = useSyncExternalStore(subscribe, getHash, getServerHash);

  return [hash, setHash] as const;
}

function subscribe(cb: () => void) {
  window.addEventListener("hashchange", cb);
  return () => {
    window.removeEventListener("hashchange", cb);
  };
}

function setHash(newHash: string) {
  window.location.hash = newHash;
}

function getHash() {
  return window.location.hash;
}

function getServerHash() {
  return "";
}
