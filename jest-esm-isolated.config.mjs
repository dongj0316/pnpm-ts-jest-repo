import preset from 'ts-jest/presets/index.js'

/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        isolatedModules: true,
        tsconfig: 'tsconfig-esm.json',
        useESM: true,
      },
    ],
  },
  projects: [
    {
      displayName: 'pkg-a',
      rootDir: '<rootDir>/packages/pkg-a',
      ...preset.defaultsESM,
    },
    {
      displayName: 'pkg-b',
      rootDir: '<rootDir>/packages/pkg-b',
      ...preset.defaultsESM,
    },
  ],
}
