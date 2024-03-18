import { useState, useEffect } from "react";

export const useImageLoadState = (src: string | undefined) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (src) {
      const image = new Image();
      image.onload = () => setIsLoading(false);
      image.onerror = () => setError("Image failed to load");
      image.src = src;
      return () => {
        image.onload = null;
        image.onerror = null;
      };
    }
  }, [src]);

  return { isLoading, error };
};
