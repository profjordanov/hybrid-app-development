# Challenge: Find First Non-Repeating Character

This challenge is similar to the last. So if you understood that, you should be able to get this one on your own.

## Instructions

Write a function called `findFirstNonRepeatingCharacter` that takes in a string and returns the first non-repeating character in the string.

If there are no non-repeating characters, the function should return `null`.

### Function Signature

```js
/**
 * Returns the first non-repeating character in a string.
 * @param {string} str - The string to search.
 * @returns {string | null} - The first non-repeating character in the string or null if there are no non-repeating characters.
 */
function findFirstNonRepeatingCharacter(str: string): string | null;
```

### Examples

```js
findFirstNonRepeatingCharacter('aabccdeff'); // should return 'b'
findFirstNonRepeatingCharacter('aabbcc'); // should return null
findFirstNonRepeatingCharacter('abcdef'); // should return 'a'
```

### Constraints

- The input string will only contain lowercase letters and spaces

### Hints

- You can use an object or a map to keep track of the number of times each character appears in the string.
- You can iterate through the string and check if the current character has only appeared once.


### Test Cases

```js
test('Find First Non-Repeating Character', () => {
  expect(findFirstNonRepeatingCharacter('aabccdeff')).toBe('b');
  expect(findFirstNonRepeatingCharacter('aabbcc')).toBe(null);
  expect(findFirstNonRepeatingCharacter('hello world')).toBe('h');
});
```
