export function assert(condition: unknown, msg?: string): asserts condition {
  if (!condition) {
    throw new Error(msg);
  }
}

export const sleep = (ms: number) => new Promise((resolve, reject) => {
  try {
    setTimeout(resolve, ms);
  } catch (error) {
    reject(error);
  }
});
