export default function orderByProps(object, array) {
  const funcObject = {};

  const allKeysNotSort = Object.keys(object);
  const keysNotSort = allKeysNotSort.filter((key) => array.includes(key));
  const keysSort = allKeysNotSort.filter((key) => !array.includes(key));
  keysSort.sort();
  const allKeysSort = [...keysNotSort, ...keysSort];

  allKeysSort.forEach((key) => {
    funcObject[key] = object[key];
  });

  return funcObject;
}
