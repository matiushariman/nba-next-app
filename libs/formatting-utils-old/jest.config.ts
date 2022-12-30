/* eslint-disable */
export default {
  displayName: 'formatting-utils-old',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/libs/formatting-utils-old',
  collectCoverage: true,
  coverageReporters: ['json', ['text', { skipFull: true }]],
};
