/* eslint-disable */
export default {
  displayName: 'date-utils-old',
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
  coverageDirectory: '../../coverage/libs/date-utils-old',
  collectCoverage: true,
  coverageReporters: ['json', ['text', { skipFull: true }]],
};
