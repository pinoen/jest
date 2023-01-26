const sum = require('./sum');


// Common Matchers
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('two plus two is four', () => {
  expect(sum(2, 2)).toBe(4)
})

test('object assigment', () => {
  const data = { one: 1 };
  data.two = 2;
  data.three = 3;
  expect(data).toEqual({ one: 1, two: 2, three: 3 })
})

test('adding two positive numbers is not zero', () => {
  expect(sum(3, 5)).not.toBe(0)
})


// Truthiness
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});


// Numbers
test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  expect(value).toBe(4);
  expect(value).toEqual(4);

})

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);           This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});


// Strings
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

// Arrays and iterables
const shoppingList = ['diapers', 'kleenex', 'trash bags', 'paper towels', 'milk', 'cheese'];
test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('cheese');
})


