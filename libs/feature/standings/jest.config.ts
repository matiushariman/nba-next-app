/* eslint-disable */
export default {
  displayName: 'feature-standings',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': [
      '@swc/jest',
      { jsc: { transform: { react: { runtime: 'automatic' } } } },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/feature/standings',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  coverageReporters: ['json', ['text', { skipFull: true }]],
};
