export function oneAway(s1: string, s2: string): boolean {
  if (Math.abs(s1.length - s2.length) > 1) {
    return false;
  }

  if (s1 === s2) {
    return true;
  }

  let mistakesLeft = 1,
    s1Idx = 0,
    s2Idx = 0;
  for (s1Idx; s1Idx < Math.min(s1.length, s2.length); s1Idx++, s2Idx++) {
    const char1 = s1[s1Idx];
    const char2 = s2[s2Idx];

    if (char1 === char2) {
      continue;
    }

    if (mistakesLeft === 1) {
      mistakesLeft--;

      // Check for removal
      if (s1[s1Idx + 1] === char2) {
        s2Idx--;
        continue;
      }

      // Check for replacement
      if (s1[s1Idx + 1] === s2[s2Idx + 1]) {
        continue;
      }

      // Check for addition
      if (s2[s2Idx + 1] === char1) {
        s1Idx--;
        continue;
      }

      return false;
    }

    return false;
  }

  return true;
}
