# Challenge: Hashtag Generator

## Instructions

Write a function called `generateHashtag` that takes a string as input and returns a hashtag-generated string according to the rules below. If the generated hashtag string is longer than 140 characters or the input/result is an empty string, the function should return `false`.

### Function Signature

```js
/**
 * Generates a hashtag from the input string.
 * @param {string} str - The input string.
 * @returns {string|boolean} - The generated hashtag string or false.
 */
function generateHashtag(str: string): string | boolean;
```

### Examples

```JS
generateHashtag("JavaScript is awesome"); // "#JavaScriptIsAwesome"
generateHashtag("hello world"); // "#HelloWorld"
generateHashtag("This is a very very very very very very very very very very very very very very long input that should result in a false hashtag because it exceeds the character limit of 140"); // false
generateHashtag(""); // false
```

### Constraints

- Return `false` if the input string is empty or contains only whitespace characters.
- Return `false` if the generated hashtag string is longer than 140 characters.
- Every word in the hashtag should start with a capital letter.
- The input string may contain leading/trailing whitespace characters.

### Hints

- You can use the string manipulation methods `trim()`, `split()`, and `join()` to work with the input string.
- You can use the string method `charAt()` to get the character at a specific index.
- Use string methods to capitalize the first letter of each word.
