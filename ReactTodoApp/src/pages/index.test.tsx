import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('renders without crashing', () => {
    render(<Home />);

    expect(screen.getByText('Todo Next App')).toBeInTheDocument();
  });

  it('adds a new todo', () => {
    render(<Home />);

    const todoTitle = 'New Todo';
  
    fireEvent.change(screen.getByPlaceholderText('New task'), { target: { value: todoTitle } });
    fireEvent.click(screen.getByText('Add'));
  
    expect(screen.getByText(todoTitle)).toBeInTheDocument();
  });
});