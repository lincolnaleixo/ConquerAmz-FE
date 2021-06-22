export default {
  toCamelCase(word) {
    const toCamelCase = (str = '') => str
      .replace(/[^a-z0-9]/gi, ' ')
      .toLowerCase()
      .split(' ')
      .map((el, ind) => (ind === 0 ? el : el[0].toUpperCase() + el.substring(1, el.length)))
      .join('');
    return toCamelCase(word);
  },
};
