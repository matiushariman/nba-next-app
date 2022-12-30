/* eslint-disable */
export default {
  displayName: 'api-client',
  preset: '../../jest.preset.js',
  globals: {},
  transform: {
    '^.+\\.[tj]s$': '@swc/jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/libs/api-client',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  coverageReporters: ['json', ['text', { skipFull: true }]],
};
