export const toCamelCase = (str: string) => {
  const s = str && (str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g) as RegExpMatchArray)
    .map((x: string) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
    .join('');
  return s.slice(0, 1).toLowerCase() + s.slice(1);
};

export const toKebabCase = (str: string) => str && (str
  .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g) as RegExpMatchArray)
  .map((x: string) => x.toLowerCase())
  .join('-');

export const toPascalCase = (str: string) => (str
  .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g) as RegExpMatchArray)
  .map((x: string) => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
  .join('');

export const toSnakeCase = (str: string) => str && (str
  .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g) as RegExpMatchArray)
  .map((x: string) => x.toLowerCase())
  .join('_');

export const toTitleCase = (str: string) => (str
  .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g) as RegExpMatchArray)
  .map((x: string) => x.charAt(0).toUpperCase() + x.slice(1))
  .join(' ');
