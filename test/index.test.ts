import { NpmJs } from '../src/index';

test('init', () => {
  expect(new NpmJs('test').init()).toBe('test');
});
