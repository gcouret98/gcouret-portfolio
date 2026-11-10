import { clsx, type ClassValue } from "clsx";

/** Concatène des classes CSS conditionnelles. */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
