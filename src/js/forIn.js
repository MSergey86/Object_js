export default function orderByProps(object, array) {
  const copy = { ...object };
  const funcObject = {};
  for (let i = 0; i < array.length; i += 1) {
    for (const property in object) {
      if (property === array[i]) {
        funcObject[array[i]] = object[property];
        delete copy[property];
      }
    }
  }
  const arr = Object.entries(copy);

  arr.sort((prev, next) => {
    if (prev[0] < next[0]) return -1;
    if (prev[0] > next[0]) return 1;
  });

  for (let i = 0; i < arr.length; i += 1) {
    const key = arr[i][0];
    const value = arr[i][1];
    funcObject[key] = value;
  }
  return funcObject;
}
