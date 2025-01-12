import '@testing-library/jest-dom';
import server from './src/mocks/server';

jest.mock('next/navigation', () => {
  return {
    useRouter: jest.fn(() => ({
      push: jest.fn(),
      replace: jest.fn(),
    })),
    useSearchParams: jest.fn(() => ({
      get: jest.fn(),
    })),
    usePathname: jest.fn(),
  };
});

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

afterEach(() => server.resetHandlers());
