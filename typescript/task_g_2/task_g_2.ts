export function volumeOfLakes(input: number[]): number {
  let volume = 0;
  let localMax = input[0];
  let potentialLake = false;
  let potentialLakeStart: number = -1;
  const lakeRanges: [number, number][] = [];

  for (let i = 1; i < input.length; i++) {
    const height = input[i];
    console.log(i);

    if (height >= localMax) {
      localMax = height;
      if (potentialLake) {
        potentialLake = false;
        lakeRanges.push([potentialLakeStart, i]);
        potentialLakeStart = -1;
        localMax = -1;
        i--;
      }
      continue;
    }

    if (height < localMax) {
      potentialLake = true;
      potentialLakeStart = i - 1;
      continue;
    }
  }

  console.log(lakeRanges);

  return volume;
}
