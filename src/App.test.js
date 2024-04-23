import { render, screen } from '@testing-library/react';
import Frame from './routes/Frame';

test('renders learn react link', () => {
  render(<Frame />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
