import orderByProps from '../forIn';

test('func', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const sortRuleArr = ['name', 'level'];
  const expResult = {
    name: 'мечник',
    level: 2,
    attack: 80,
    defence: 40,
    health: 10,
  };
  const result = orderByProps(obj, sortRuleArr);
  expect(result).toStrictEqual(expResult);
});
