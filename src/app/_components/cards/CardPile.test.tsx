import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import CardPile from './CardPile';
import type { Card } from '@/domain/cards.type';

// Mock motion/react
vi.mock('motion/react', () => ({
    LazyMotion: ({ children }: any) => <>{children}</>,
    domAnimation: {},
    AnimatePresence: ({ children }: any) => <>{children}</>,
}));

vi.mock('motion/react-m', () => ({
    div: ({ children, onMouseEnter, onTouchStart, onFocus, className, animate, ...props }: any) => (
        <div
            data-testid="motion-div"
            className={className}
            onMouseEnter={onMouseEnter}
            onTouchStart={onTouchStart}
            onFocus={onFocus}
            data-animate={JSON.stringify(animate)}
            {...props}
        >
            {children}
        </div>
    ),
}));

// Mock CardComponent
vi.mock('./Card', () => ({
    CardComponent: ({ card, onCloseCard }: any) => (
        <div data-testid="card-component">
            {card.name}
            {onCloseCard && <button onClick={onCloseCard}>Close</button>}
        </div>
    ),
}));

describe('CardPile', () => {
    const mockCards: Card[] = [
        { name: 'Card 1', level: 1, path: 'p1', status: 'inHand', actions: { top: 'discard', bottom: 'lose' }, initiative: 10 },
        { name: 'Card 2', level: 1, path: 'p2', status: 'inHand', actions: { top: 'discard', bottom: 'lose' }, initiative: 20 },
        { name: 'Card 3', level: 1, path: 'p3', status: 'inHand', actions: { top: 'discard', bottom: 'lose' }, initiative: 30 },
    ];
    const mockActions = vi.fn(() => []);

    it('should render all cards', () => {
        render(<CardPile cards={mockCards} actions={mockActions} />);
        expect(screen.getAllByTestId('card-component')).toHaveLength(3);
    });

    it('should handle focus on mouse enter', () => {
        render(<CardPile cards={mockCards} actions={mockActions} />);

        const motionDivs = screen.getAllByTestId('motion-div');

        // Initial state: no focus. 
        // The component logic for zIndex when no focus is: 20 - Math.abs(cards.length - 1 - index)
        // Index 0: 20 - |3-1-0| = 18
        // Index 1: 20 - |3-1-1| = 19
        // Index 2: 20 - |3-1-2| = 20

        // Hover over the second card (index 1)
        fireEvent.mouseEnter(motionDivs[1]);

        // Check animate prop of the second card
        // It should have scale: 1.2
        expect(motionDivs[1]).toHaveAttribute('data-animate', expect.stringContaining('"scale":1.2'));

        // Check animate prop of the first card
        // It should have scale: 1
        expect(motionDivs[0]).toHaveAttribute('data-animate', expect.stringContaining('"scale":1'));
    });

    it('should show close button only on focused card when onCloseCard is provided', () => {
        const handleClose = vi.fn();
        render(<CardPile cards={mockCards} actions={mockActions} onCloseCard={handleClose} />);

        const motionDivs = screen.getAllByTestId('motion-div');

        // Hover over the second card
        fireEvent.mouseEnter(motionDivs[1]);

        // Only the second card should have a close button (mocked CardComponent renders it if onCloseCard is present)
        const closeButtons = screen.getAllByText('Close');
        expect(closeButtons).toHaveLength(1);

        // Click it
        fireEvent.click(closeButtons[0]);
        expect(handleClose).toHaveBeenCalledWith(mockCards[1]);
    });
});
