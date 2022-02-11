export const injectCSS = (css: string): HTMLStyleElement => {
  const el = document.createElement('style');
  el.innerText = css;
  document.head.appendChild(el);
  return el;
};

export const unescapeHTML = (str: string) => str.replace(
  /&amp;|&lt;|&gt;|&#39;|&quot;/g,
  (tag) => ({
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&#39;': "'",
    '&quot;': '"',
  }[tag] || tag),
);
