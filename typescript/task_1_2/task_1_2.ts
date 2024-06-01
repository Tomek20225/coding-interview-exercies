export function checkPermutation(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) {
    return false;
  }

  if (s1.length === 0 || s2.length === 0) {
    return false;
  }

  const charMap = new Map<string, number>();
  for (const char of s1) {
    const charCount = charMap.get(char) ?? 0;
    charMap.set(char, charCount + 1);
  }
  for (const char of s2) {
    const charCount = charMap.get(char);
    if (!charCount || charCount - 1 < 0) {
      return false;
    }
    charMap.set(char, charCount - 1);
  }

  for (const [_, value] of charMap) {
    if (value > 0) {
      return false;
    }
  }

  return true;
}

// This is correct O(n) solution, assuming whitespace and case sensitivity are important
// I should also ask about the character set
