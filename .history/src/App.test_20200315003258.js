import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Reactを学べ/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Reactを学べ/i);
  expect(linkElement).toBeInTheDocument();
});