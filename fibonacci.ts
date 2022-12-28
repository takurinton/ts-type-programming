import type { Add, Sub } from "./utils";

type Fibonacci<
  N extends number,
  R extends any[] = [0, 1]
> = R["length"] extends N
  ? R
  : N extends 0
  ? Fibonacci<1>
  : N extends 1
  ? Fibonacci<2>
  : Fibonacci<N, [...R, Add<R[Sub<R["length"], 1>], R[Sub<R["length"], 2>]>]>;

// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
let fibonacci: Fibonacci<10>;
