/* eslint-disable */
export default {
  displayName: 'ui-old',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/ui-old',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  collectCoverage: true,
  coverageReporters: ['json', ['text', { skipFull: true }]],
};
