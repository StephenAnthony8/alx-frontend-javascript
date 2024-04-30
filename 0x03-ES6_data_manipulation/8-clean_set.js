export default function cleanSet(set, startString) {
  const rtnString = [];

  set.forEach((x) => {
    if (x.startsWith(startString) && startString !== '') {
      rtnString.push(x.substring(startString.length));
    }
  });

  return rtnString.join('-');
}
