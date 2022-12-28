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
