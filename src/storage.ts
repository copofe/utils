const getFullKey = (key: string, prefix: string) => (prefix ? `${prefix}/${key}` : key);

export function proxyStorage<T extends Record<string, unknown>>(
  keys: T,
  prefix = '',
  DB: Storage = localStorage,
): T {
  return new Proxy(keys, {
    get(target: T, key: string) {
      const fullKey = getFullKey(key, prefix);
      const value = DB.getItem(fullKey);
      return value ? JSON.parse(value) : null;
    },
    set(target: T, key: string, value: unknown) {
      const fullKey = getFullKey(key, prefix);
      DB.setItem(fullKey, JSON.stringify(value));
      return true;
    },
  });
}
