import { ReactN, ReactNodeode } from "react";

export interface ImageLoaderProps {
  src?: string;
  loader: ReactNode;
  error?: ReactNode;
  children: ReactNode;
}
