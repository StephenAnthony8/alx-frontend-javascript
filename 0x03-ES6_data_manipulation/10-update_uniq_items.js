export default function updateUniqueItems(map) {
  /* updates a map's items where initial quantity === 1 */

  try {
    for (const [key, value] of map) {
      if (value === 1) {
        map.set(key, 100);
      }
    }
  } catch (error) {
    throw new Error('Cannot process');
  }
  return map;
}
