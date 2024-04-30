export default function cleanSet(set, startString) {
  let rtnString = '';

  set.forEach((x) => {
    if (x.startsWith(startString) && startString !== '') {
      rtnString += (rtnString === '' ? '' : '-') + x.substring(startString.length);
    }
  });

  return rtnString;
}
