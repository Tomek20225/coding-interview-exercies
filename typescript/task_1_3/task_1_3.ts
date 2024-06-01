// The question meant to perform array operations with no sophisticated/language-specific APIs, not test regex skills
// export function urlify(input: string, length: number): string {
//   return input.trim().replace(/\s+/g, '%20');
// }

// The question meant to replace in place, not return a new string, even if StringBuffers were used
// export function urlify(input: string, length: number): string {
//   const strArr: string[] = [];
//   for (let i = 0; i < length; i++) {
//     const char = input[i];
//     strArr.push(char === ' ' ? '%20' : char);
//   }
//   return strArr.join('');
// }

export function urlify(input: string[], trueLength: number): string[] {
  let strIdx = trueLength - 1;
  let urlIdx = input.length - 1;

  for (urlIdx; urlIdx >= 0; urlIdx--, strIdx--) {
    const char = input[strIdx];
    if (char == ' ') {
      input[urlIdx] = '0';
      input[--urlIdx] = '2';
      input[--urlIdx] = '%';
      continue;
    }
    input[urlIdx] = char;
  }

  return input;
}
