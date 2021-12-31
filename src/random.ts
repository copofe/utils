// 两数之间的随机数
export function getRandomArbitrary(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

// 两数之间的随机整数
export function getRandomInt(min: number, max: number): number {
  /* eslint-disable no-param-reassign */
  min = Math.ceil(min);
  max = Math.floor(max);
  /* eslint-enable no-param-reassign */
  return Math.floor(Math.random() * (max - min)) + min; // 不含最大值，含最小值
}
