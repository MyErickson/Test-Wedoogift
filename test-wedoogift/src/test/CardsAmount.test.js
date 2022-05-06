import { render, screen ,fireEvent } from '@testing-library/react';
import CardsAmount from '../component/CardsAmount';

test('click component CardsAmount', () => {
  const mockClick= jest.fn()
  render(<CardsAmount amount={48} cardAmount={[{value:45}]} handleClickSearchCombination={mockClick} />);
  const clickSearchCombination = document.querySelector(".App__card-item-amount")
  fireEvent.click(clickSearchCombination)
  expect(mockClick.mock.calls.length).toBe(1);
});
