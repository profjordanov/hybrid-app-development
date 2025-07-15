# Challenge: Are all characters unique?

## Instructions

Write a function called `areAllCharactersUnique` that takes in a string and returns `true` or `false` depending on whether all characters in the string are unique (i.e., no character is repeated).

### Function Signature

```js
/**
 * Returns true if all characters in a string are unique.
 * @param {string} str - The string to check.
 * @returns {boolean} - Whether all characters in the string are unique.
 */
function areAllCharactersUnique(str: string): boolean;
```

### Examples

```js
areAllCharactersUnique('abcdefg'); // true
areAllCharactersUnique('abcdefgA'); // true
areAllCharactersUnique('programming'); // false
areAllCharactersUnique(''); // true
areAllCharactersUnique('a'); // true
```

### Constraints

- It should be case sensitive, so `a` and `A` are considered different characters
- An empty string should return `true` by default

### Hints

- You can use a for loop to iterate through the string and check if the current character is in the set or object.

### Test Cases

```js
test('Unique Characters in a String', () => {
  expect(areAllCharactersUnique('abcdefg')).toBe(true);
  expect(areAllCharactersUnique('abcdefgA')).toBe(true);
  expect(areAllCharactersUnique('programming')).toBe(false);
  expect(areAllCharactersUnique('')).toBe(true);
  expect(areAllCharactersUnique('a')).toBe(true);
});
```
