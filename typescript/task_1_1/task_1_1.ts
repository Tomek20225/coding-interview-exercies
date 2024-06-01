export function isUnique(input: string): boolean {
  if (input.length === 0) {
    throw new Error('Input cannot be empty');
  }

  const charMap = new Map<string, boolean>();
  for (const char of input) {
    if (charMap.has(char)) {
      return false;
    }
    charMap.set(char, true);
  }
  return true;
}

// If we're talking about ASCII charset, then the string with only unique characters cannot contain more than 128 characters

// Another solution: Bit vector and shifting
// Another solution: Sort the string and check linearly
// Another solution: Allocate a boolean array with the length of all possible characters, where the index is the i-th character
