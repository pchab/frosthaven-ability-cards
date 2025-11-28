import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ActionWheel from './ActionWheel';

// Mock motion/react-m
vi.mock('motion/react-m', () => ({
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
}));

describe('ActionWheel', () => {
    const mockActions = [
        { name: 'Action 1', onClick: vi.fn() },
        { name: 'Action 2', onClick: vi.fn() },
        { name: 'Action 3', onClick: vi.fn() },
    ];
    const mockOnAction = vi.fn();

    it('should render all actions', () => {
        render(<ActionWheel actions={mockActions} onAction={mockOnAction} />);

        expect(screen.getByRole('menu')).toBeInTheDocument();
        expect(screen.getAllByRole('menuitem')).toHaveLength(3);

        mockActions.forEach(action => {
            expect(screen.getByText(action.name)).toBeInTheDocument();
        });
    });

    it('should handle action clicks', () => {
        render(<ActionWheel actions={mockActions} onAction={mockOnAction} />);

        const firstAction = screen.getByText('Action 1');
        fireEvent.click(firstAction);

        expect(mockActions[0].onClick).toHaveBeenCalledTimes(1);
        expect(mockOnAction).toHaveBeenCalledTimes(1);
    });

    it('should position buttons correctly', () => {
        render(<ActionWheel actions={mockActions} onAction={mockOnAction} />);

        const buttons = screen.getAllByRole('menuitem');
        // Just checking that styles are applied, exact math verification is brittle
        buttons.forEach(button => {
            expect(button).toHaveClass('absolute');
            expect(button.style.left).toContain('calc');
            expect(button.style.top).toContain('calc');
        });
    });
});
