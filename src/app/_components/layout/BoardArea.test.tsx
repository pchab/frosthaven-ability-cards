import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import BoardArea from './BoardArea';

describe('BoardArea', () => {
    it('should render children', () => {
        render(
            <BoardArea>
                <div data-testid="child">Child Content</div>
            </BoardArea>
        );
        expect(screen.getByTestId('child')).toBeInTheDocument();
    });

    it('should render title when provided', () => {
        render(<BoardArea title="My Board Area" />);
        expect(screen.getByRole('heading', { name: 'My Board Area' })).toBeInTheDocument();
    });

    it('should render actions when provided', () => {
        const actions = [
            { name: 'action1', node: <button>Action 1</button> },
            { name: 'action2', node: <button>Action 2</button> },
        ];
        render(<BoardArea actions={actions} />);

        expect(screen.getByRole('button', { name: 'Action 1' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Action 2' })).toBeInTheDocument();
    });

    it('should apply correct border radius classes based on props', () => {
        const { rerender } = render(<BoardArea>Content</BoardArea>);

        // No title, no actions -> should have rounded-tr-lg and rounded-tl-lg
        // The div with these classes is the first child of the flex-col-reverse div
        // screen.getByText('Content') returns the div containing "Content"
        let contentWrapper = screen.getByText('Content');
        expect(contentWrapper).toHaveClass('rounded-tr-lg');
        expect(contentWrapper).toHaveClass('rounded-tl-lg');

        // With title, no actions -> should have rounded-tr-lg, NO rounded-tl-lg
        rerender(<BoardArea title="Title">Content</BoardArea>);
        contentWrapper = screen.getByText('Content');
        expect(contentWrapper).toHaveClass('rounded-tr-lg');
        expect(contentWrapper).not.toHaveClass('rounded-tl-lg');

        // No title, with actions -> should have rounded-tl-lg, NO rounded-tr-lg
        rerender(<BoardArea actions={[{ name: 'a', node: 'a' }]}>Content</BoardArea>);
        contentWrapper = screen.getByText('Content');
        expect(contentWrapper).toHaveClass('rounded-tl-lg');
        expect(contentWrapper).not.toHaveClass('rounded-tr-lg');
    });
});
