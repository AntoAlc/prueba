import { render, screen } from '@testing-library/react';
import { fireEvent } from "@testing-library/dom";
import CitiesSearchBar from '../CitiesSearchBar/CitiesSearchBar';

/* test('test', () => {
  expect(true).toBeTruthy();
}) */

test('should render CitiesSearchBar', async() => {
  await render(<CitiesSearchBar />);
  const citySBElement = screen.getAllByTestId('citySB-001')

  expect(citySBElement[0]).toBeInTheDocument();
});

test('should render Input', async() => {
  await render(<CitiesSearchBar />);
  const inputElement = screen.getAllByTestId('citySB-002')
  
  expect(inputElement[0].placeholder).toMatch('¿A dónde vamos?')
});

test('should display list of cities', async () => {
  await render(<CitiesSearchBar />);
  const inputElement = screen.getAllByTestId('citySB-002')
  const ulElement = screen.getAllByTestId('citySB-003');
  fireEvent.keyDown(inputElement[0], {key: 'A', code: 'KeyA'})
  
  expect(ulElement[0]).toBeInTheDocument();
  expect(CitiesSearchBar.displayMatches).toBeTruthy()
});
