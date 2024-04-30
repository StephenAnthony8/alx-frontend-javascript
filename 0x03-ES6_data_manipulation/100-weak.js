export const weakMap = new WeakMap();

weakMap.set({ protocol: 'http', name: 'getUsers' }, 0);

export function queryAPI(keyRef) {
  /* helps track number of times an object is called */

  const count = (weakMap.has(keyRef) ? weakMap.get(keyRef) + 1 : 1);

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  } else {
    weakMap.set(keyRef, count);
  }
}
