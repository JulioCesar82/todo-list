import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('renders without crashing', () => {
    render(<Home />);

    expect(screen.getByText('Todo Next App')).toBeInTheDocument();
  });

  it('adds a new todo', () => {
    render(<Home />);
  
    fireEvent.change(screen.getByPlaceholderText('New task'), { target: { value: 'New Todo' } });
    fireEvent.click(screen.getByText('Add'));
  
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });
});