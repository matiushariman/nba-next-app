/**
 * Enable `@testing-library/jest-dom` matchers such as toHaveTextContent or toHaveAttribute.
 */
import '@testing-library/jest-dom';
import { server } from './__mocks__/server';

beforeAll(() => {
  // Enable the mocking in tests.
  server.listen();
});

afterEach(() => {
  // Reset any runtime handlers tests may use.
  server.resetHandlers();
});

afterAll(() => {
  // Clean up once the tests are done.
  server.close();
});
