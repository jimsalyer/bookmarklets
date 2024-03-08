const config = {
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{cjs,js,mjs}',
    '!**/coverage/**',
    '!**/jest.config.{cjs,js,mjs}',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  resetMocks: true,
  resetModules: true,
  testEnvironment: 'jsdom',
};
module.exports = config;
