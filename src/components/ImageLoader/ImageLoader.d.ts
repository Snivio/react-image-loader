import { ReactElement, ReactNode } from "react";

export interface ImageLoaderProps {
  src?: string;
  loader: ReactNode;
  error?: ReactNode;
  children: ReactElement;
}
