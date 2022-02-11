export function assert(condition: unknown, msg?: string): asserts condition {
  if (!condition) {
    throw new Error(msg);
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const is = (type: string, val: any) => {
  return val !== undefined && val !== null && val.constructor === type;
};

// eslint-disable-next-line no-promise-executor-return
export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
