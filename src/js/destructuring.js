export default function destruct(obj) {
  const { special } = obj;
  for (let i = 0; i < special.length; i += 1) {
    if (!('description' in special[i])) {
      special[i].description = 'Описание недоступно';
    }
  }
  return special;
}
