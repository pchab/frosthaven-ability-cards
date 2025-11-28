import { describe, it, expect } from 'vitest';
import { createCards } from './card.factory';
import type { Card } from './cards.type';

describe('createCards', () => {
    it('should create cards with correct paths and status', () => {
        const mockCards: Omit<Card, 'status' | 'path'>[] = [
            {
                name: 'Test Card',
                level: 1,
                actions: { top: 'discard', bottom: 'lose' },
                initiative: 10,
            },
        ];

        const basePath = '/assets/cards';
        const result = createCards(mockCards, basePath);

        expect(result).toHaveLength(1);
        expect(result[0]).toEqual({
            ...mockCards[0],
            status: 'inHand',
            path: '/assets/cards/fh-test-card.webp',
        });
    });
});
