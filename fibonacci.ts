import type { Add, Sub } from "./utils";

type Fibonacci<
  N extends number,
  R extends any[] = [0, 1]
> = R["length"] extends N
  ? R
  : Fibonacci<N, [...R, Add<R[Sub<R["length"], 1>], R[Sub<R["length"], 2>]>]>;

expect<Fibonacci<10>>().toEqual<[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]>();
