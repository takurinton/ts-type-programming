type ToTuple<N extends number, R extends any[] = []> = R["length"] extends N
  ? R
  : ToTuple<N, [undefined, ...R]>;

type Add<T extends number, U extends number> = [
  ...ToTuple<T>,
  ...ToTuple<U>
]["length"] extends number
  ? [...ToTuple<T>, ...ToTuple<U>]["length"]
  : never;

type Sub<T extends number, U extends number> = ToTuple<T> extends [
  ...ToTuple<U>,
  ...infer S
]
  ? S["length"]
  : never;

type Mod<T extends number, U extends number> = Sub<T, U> extends undefined
  ? T
  : Mod<Sub<T, U>, U>;

type IsDivisible3<T extends number> = Mod<T, 3> extends 0 ? true : false;
type IsDivisible5<T extends number> = Mod<T, 5> extends 0 ? true : false;
type IsDivisible15<T extends number> = IsDivisible3<T> extends true &
  IsDivisible5<T>
  ? true
  : false;

type FizzBuzz<N extends number, R extends any[] = []> = R["length"] extends N
  ? R
  : FizzBuzz<
      N,
      [
        ...R,
        IsDivisible15<Add<R["length"], 1>> extends true
          ? "fizzbuzz"
          : IsDivisible3<Add<R["length"], 1>> extends true
          ? "fizz"
          : IsDivisible5<Add<R["length"], 1>> extends true
          ? "buzz"
          : Add<R["length"], 1>
      ]
    >;

// [1, 2, 'fizz', 4, 'buzz', ..., 14, 'fizzbuzz']
let fizzbuzz: FizzBuzz<15>;
