export default function extend (...sources) {
  return sources.reduce((extended, obj) => {
    if (obj && typeof obj === 'object') {
      Object.keys(obj).forEach(prop => {
        extended[prop] = obj[prop];
      });
    }
    return extended;
  }, {});
}


