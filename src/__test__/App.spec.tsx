import { render } from '@testing-library/react';
import App from '../App';

test('renders Localiza text', () => {
  const { getByText } = render(<App />);
  expect(getByText(/Localiza/i)).toBeTruthy();
});
