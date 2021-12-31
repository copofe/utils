export function assert(condition: unknown, msg?: string): asserts condition {
  if (!condition) {
    throw new Error(msg);
  }
}

// eslint-disable-next-line max-len
export const pipe = (...fns: ((n: unknown) => unknown)[]) => (x: unknown) => fns.reduce((v, f) => f(v), x);
