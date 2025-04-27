module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
'^.+\\.jsx?$': 'babel-jest',
},
moduleNameMapper: {
  '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock CSS imports
},
moduleFileExtensions: ['js', 'jsx'],
setupFilesAfterEnv: ['<rootDir>/setupTests.js'], // Path to the setup file
};