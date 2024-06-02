export function palindromePermutation(input: string): boolean {
  // The question probably wanted to emphasize the skipping of the characters in a loop, but that's still valid
  const escString = input.toLowerCase().replace(/[^a-z]+/g, '');
  const charMap = new Map<string, number>();

  for (const char of escString) {
    const charCount = charMap.get(char) ?? 0;
    charMap.set(char, charCount + 1);
  }

  const requiresMiddle = escString.length % 2 !== 0;
  let foundMiddle = false;
  for (const value of charMap.values()) {
    if (value % 2 === 0) {
      continue;
    }
    if (requiresMiddle && !foundMiddle) {
      foundMiddle = true;
      continue;
    }
    return false;
  }

  return true;
}
