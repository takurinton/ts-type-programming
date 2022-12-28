export type ToTuple<
  N extends number,
  R extends any[] = []
> = R["length"] extends N ? R : ToTuple<N, [undefined, ...R]>;

export type Add<T extends number, U extends number> = [
  ...ToTuple<T>,
  ...ToTuple<U>
]["length"] extends number
  ? [...ToTuple<T>, ...ToTuple<U>]["length"]
  : never;

export type Sub<T extends number, U extends number> = ToTuple<T> extends [
  ...ToTuple<U>,
  ...infer S
]
  ? S["length"]
  : never;

export type Mod<T extends number, U extends number> = Sub<
  T,
  U
> extends undefined
  ? T
  : Mod<Sub<T, U>, U>;

expect<Add<1, 2>>().toEqual<3>();
expect<Sub<1, 2>>().toEqual<never>();
expect<Sub<2, 1>>().toEqual<1>();
expect<Mod<1, 1>>().toEqual<0>();
expect<Mod<3, 2>>().toEqual<1>();
