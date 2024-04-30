export default function hasValuesFromArray(set, array) {
  /* returns a boolean if all elements in the array exist in the set */
  return array.every((x) => set.has(x));
}
