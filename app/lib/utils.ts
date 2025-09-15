/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// or with just classnames:
// import classNames from "classnames";

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
