import { useCallback, useState } from "react";

export function useUpdate<T>() {
  const [isLoading, setIsLoading] = useState(false);
  const update = useCallback((fn: () => Promise<any>) => {
    setIsLoading(true);
    fn().finally(() => setIsLoading(false));
  }, []);

  return [isLoading, update] as const;
}
