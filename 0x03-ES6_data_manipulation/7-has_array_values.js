export default function hasValuesFromArray(set, array) {
  /* returns a boolean if all elements in the array exist in the set */
  const newSet = new Set(array);
  return newSet.isSubsetOf(set);
}
