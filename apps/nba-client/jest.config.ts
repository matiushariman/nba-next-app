/* eslint-disable */

export default {
  displayName: 'nba-client',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/next/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/nba-client',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  collectCoverage: true,
  coverageReporters: ['json', ['text', { skipFull: true }]],
};
