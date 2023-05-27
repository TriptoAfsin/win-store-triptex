const nextJest = require('next/jest')

const createJestConfig = nextJest({dir: '.'})

const customJestConfig = {
    testEnvironment: 'jsdom',
    clearMocks: true,
    moduleDirectories: ['node_modules', 'src'],
    setupFilesAfterEnv: [
        './src/__setup__/setupTests.js',
      ],
    testMatch: [
        '<rootDir>/src/**/*.test.js',
        '<rootDir>/src/**/*.test.jsx',
    ],
}

module.exports = createJestConfig(customJestConfig)