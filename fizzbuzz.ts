import type { Add, Mod } from "./utils";

type IsDivisible3<T extends number> = Mod<T, 3> extends 0 ? true : false;
type IsDivisible5<T extends number> = Mod<T, 5> extends 0 ? true : false;
type IsDivisible15<T extends number> = IsDivisible3<T> extends true &
  IsDivisible5<T>
  ? true
  : false;

type JudgeFizzBuzz<N extends number> = IsDivisible15<N> extends true
  ? "fizzbuzz"
  : IsDivisible3<N> extends true
  ? "fizz"
  : IsDivisible5<N> extends true
  ? "buzz"
  : N;

type FizzBuzz<N extends number, R extends any[] = []> = R["length"] extends N
  ? R
  : FizzBuzz<N, [...R, JudgeFizzBuzz<Add<R["length"], 1>>]>;

expect<IsDivisible3<1>>().toEqual<false>();
expect<IsDivisible3<3>>().toEqual<true>();
expect<IsDivisible5<1>>().toEqual<false>();
expect<IsDivisible5<5>>().toEqual<true>();
expect<IsDivisible15<1>>().toEqual<false>();
expect<IsDivisible15<15>>().toEqual<true>();

expect<JudgeFizzBuzz<1>>().toEqual<1>();
expect<JudgeFizzBuzz<3>>().toEqual<"fizz">();
expect<JudgeFizzBuzz<5>>().toEqual<"buzz">();
expect<JudgeFizzBuzz<15>>().toEqual<"fizzbuzz">();

expect<FizzBuzz<15>>().toEqual<
  [
    1,
    2,
    "fizz",
    4,
    "buzz",
    "fizz",
    7,
    8,
    "fizz",
    "buzz",
    11,
    "fizz",
    13,
    14,
    "fizzbuzz"
  ]
>();
