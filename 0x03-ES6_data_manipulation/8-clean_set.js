export default function cleanSet(set, startString) {
  const newArr = [...set.values()].filter((x) => (startString !== '' ? x.startsWith(startString) : false));

  return (newArr.length > 0 ? newArr.reduce((start, next) => `${start}${start === '' ? '' : '-'}${next.substring(startString.length)}`, '') : '');
}
