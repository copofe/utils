/**
 * 两数之间的随机数
 */
export function getRandomArbitrary(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

/**
 * 两数之间的随机整数，不含最大值，含最小值
 */
export function getRandomInt(min: number, max: number): number {
  const $min = Math.ceil(min);
  const $max = Math.floor(max);
  return Math.floor(Math.random() * ($max - $min)) + $min;
}
