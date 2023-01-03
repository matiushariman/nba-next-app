/* eslint-disable */
export default {
  displayName: 'feature-scores',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': [
      '@swc/jest',
      { jsc: { transform: { react: { runtime: 'automatic' } } } },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/feature/scores',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  coverageReporters: ['json', ['text', { skipFull: true }]],
};
