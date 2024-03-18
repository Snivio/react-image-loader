import { cloneElement, forwardRef } from "react";
import { ImageLoaderProps } from "./ImageLoader.d";
import { useImageLoadState } from "../../hooks";

export const ImageLoader = forwardRef<HTMLDivElement, ImageLoaderProps>(
  ({ src, error: errorElement, loader, children, ...props }, ref) => {
    const { isLoading, error } = useImageLoadState(src);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const renderStringOrElement = (el: any) =>
      typeof el === "string" ? (
        <div>{el}</div>
      ) : (
        cloneElement(el, { ...props, ref })
      );

    if (error && errorElement) {
      return renderStringOrElement(errorElement);
    }

    return isLoading
      ? renderStringOrElement(loader)
      : cloneElement(children, { ...props, ref });
  }
);
