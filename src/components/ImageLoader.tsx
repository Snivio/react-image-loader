import { cloneElement, forwardRef } from "react";
import { useImageLoadState } from "../hooks";
import { ReactElement, ReactNode } from "react";

export interface ImageLoaderProps {
  src?: string;
  loader: ReactNode;
  error?: ReactNode;
  children: ReactElement;
}

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
