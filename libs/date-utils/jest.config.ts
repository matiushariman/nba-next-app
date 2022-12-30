/* eslint-disable */
export default {
  displayName: 'date-utils',
  preset: '../../jest.preset.js',
  globals: {},
  transform: {
    '^.+\\.[tj]s$': '@swc/jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/libs/date-utils',
  coverageReporters: ['json', ['text', { skipFull: true }]],
};
