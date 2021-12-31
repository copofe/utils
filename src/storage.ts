/* eslint-disable import/prefer-default-export */

interface ScopeStorageRaw {
  [key: string]: unknown;
}

export function asyncScopeStorage(
  keys: ScopeStorageRaw,
  prefix = '',
  DB: Storage = localStorage,
): void {
  Object.keys(keys).forEach((key) => {
    const k: string = prefix ? `${prefix}/${key}` : key;
    Object.defineProperty(keys, key, {
      set(value: unknown): void {
        if (value === null) {
          DB.removeItem(k);
        } else {
          DB.setItem(k, JSON.stringify(value));
        }
      },
      get(): unknown {
        const value = DB.getItem(k);
        return value ? JSON.parse(value) : null;
      },
    });
  });
}
