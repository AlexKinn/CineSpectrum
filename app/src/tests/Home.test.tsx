import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home/Home';







test('renders display and sidebarItems', () => {
  render(<Home />);
  // expect(screen.getByRole('title', { name: "Display" }))
  expect(screen.getAllByRole('title')).toBeVisible();
});


