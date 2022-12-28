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

// 1
let num1: JudgeFizzBuzz<1>;
// 2
let num2: JudgeFizzBuzz<2>;
// "fizz"
let fizz: JudgeFizzBuzz<3>;
// "buzz"
let buzz: JudgeFizzBuzz<5>;
// "fizzbuzz"
let fizzbuzz: JudgeFizzBuzz<15>;

// [1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz"]
let fizzbuzzList: FizzBuzz<15>;
