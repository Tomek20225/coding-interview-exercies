import { reverseString } from "./task_01";

test("reverseString test", () => {
  const input = "hello";
  const expectedOutput = "olleh";
  expect(reverseString(input)).toBe(expectedOutput);
});
