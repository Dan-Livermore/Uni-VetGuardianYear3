module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ["<rootDir>/setupTests.cjs"],
  moduleNameMapper: {
    '/\.css$/': '<rootDir>/src/__mocks__/cssMock.js',
    '\\.(jpg|jpeg|png|gif|webp|svg|avif)$': '<rootDir>/src/__mocks__/imageMock.js',
    "/\.(css|less|scss|sass)$/": "identity-obj-proxy",
    '^/client/src/(.*)$': '<rootDir>/src/$1',
  },
};
