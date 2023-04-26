import type { JestConfigWithTsJest } from 'ts-jest'
import { jsWithTsESM as tsjPreset } from 'ts-jest/presets'

const jestConfig: JestConfigWithTsJest = {
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    ...tsjPreset.transform,
  },
  projects: [
    {
      displayName: 'pkg-a',
      rootDir: '<rootDir>/packages/pkg-a',
    },
    {
      displayName: 'pkg-b',
      rootDir: '<rootDir>/packages/pkg-b',
    },
  ],
}

export default jestConfig
