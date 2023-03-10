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
  collectCoverageFrom: [
    '!./**/*.styles.tsx',
    '!./**/api/**',
    '!./next.config.js',
    '!./pages/_app.tsx',
    '!./pages/_document.tsx',
  ],
  coverageReporters: ['json', ['text', { skipFull: true }]],
};
