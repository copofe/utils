export const copyToClipboardAsync = (str: string): Promise<void> => {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(str);
  }
  return Promise.reject(new Error('The Clipboard API is not available.'));
};

export const copyToClipboard = (str: string): void => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected = (document.getSelection() as Selection).rangeCount > 0
    ? (document.getSelection() as Selection).getRangeAt(0)
    : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
    (document.getSelection() as Selection).removeAllRanges();
    (document.getSelection() as Selection).addRange(selected);
  }
};
