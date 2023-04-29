const preset = require('ts-jest/presets');

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        isolatedModules: true,
      },
    ],
  },
  projects: [
    {
      displayName: 'pkg-a',
      rootDir: '<rootDir>/packages/pkg-a',
      ...preset.defaults,
    },
    {
      displayName: 'pkg-b',
      rootDir: '<rootDir>/packages/pkg-b',
      ...preset.defaults,
    },
  ],
}
