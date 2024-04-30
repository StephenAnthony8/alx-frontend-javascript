export default function cleanSet(set, startString) {
  /* returns a joined string with all words that begin with startString */
  const rtnString = [];
  if ((set instanceof Set) && (typeof startString === 'string')) {
    set.forEach((x) => {
      if (x.startsWith(startString) && startString !== '') {
        rtnString.push(x.substring(startString.length));
      }
    });
  }

  return rtnString.join('-');
}
