module.exports = {
  roots: ['<rootDir>/'],
  testMatch: ['**/task_*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironment: 'node',
};
