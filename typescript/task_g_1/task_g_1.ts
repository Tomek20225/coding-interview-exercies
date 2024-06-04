export function decompressString(input: string): string {
  const chunks: string[] = [];
  let currentNum = '';
  let currentStr = '';
  let readingStr = false;

  for (const char of input) {
    // If the character is a number
    if (char.match(/^\d$/)) {
      currentNum += char;
      continue;
    }

    if (char === ']') {
      const num = Number.parseInt(currentNum);
      for (let i = 0; i < num; i++) {
        chunks.push(currentStr);
      }

      currentNum = '';
      currentStr = '';
      readingStr = false;

      continue;
    }

    if (char === '[') {
      readingStr = true;
      continue;
    }

    if (readingStr) {
      currentStr += char;
      continue;
    }

    chunks.push(char);
  }

  return chunks.join('');
}
