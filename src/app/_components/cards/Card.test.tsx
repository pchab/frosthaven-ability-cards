import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CardComponent } from './Card';
import type { Card } from '@/domain/cards.type';

// Mock next/image
vi.mock('next/image', () => ({
    default: ({ src, alt, ...props }: any) => (
        <img src={src} alt={alt} {...props} />
    ),
}));

// Mock motion/react
vi.mock('motion/react', () => ({
    LazyMotion: ({ children }: any) => <>{children}</>,
    domAnimation: {},
    AnimatePresence: ({ children }: any) => <>{children}</>,
}));

vi.mock('motion/react-m', () => ({
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
}));

describe('CardComponent', () => {
    const mockCard: Card = {
        name: 'Test Card',
        level: 1,
        path: '/path/to/card.webp',
        status: 'inHand',
        actions: { top: 'discard', bottom: 'lose' },
        initiative: 10,
    };

    it('should render the card image', () => {
        render(<CardComponent card={mockCard} />);
        const img = screen.getByRole('img', { name: 'card Test Card' });
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute('src', '/path/to/card.webp');
    });

    it('should call onCloseCard when close button is clicked', () => {
        const handleClose = vi.fn();
        render(<CardComponent card={mockCard} onCloseCard={handleClose} />);

        const closeButton = screen.getByRole('button', { name: 'remove card' });
        fireEvent.click(closeButton);

        expect(handleClose).toHaveBeenCalledTimes(1);
    });
});
