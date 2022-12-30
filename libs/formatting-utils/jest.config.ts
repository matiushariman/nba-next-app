/* eslint-disable */
export default {
  displayName: 'formatting-utils',
  preset: '../../jest.preset.js',
  globals: {},
  transform: {
    '^.+\\.[tj]s$': '@swc/jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/libs/formatting-utils',
  coverageReporters: ['json', ['text', { skipFull: true }]],
};
