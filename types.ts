/**
 * test utility function
 */
declare function expect<T>(): {
  toEqual<U extends T>(): void;
};
