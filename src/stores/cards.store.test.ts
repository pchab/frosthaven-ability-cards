import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useFrosthavenStore, initialState } from './cards.store';
import type { Card } from '@/domain/cards.type';

// Mock the storage to avoid IndexedDB dependency
vi.mock('./indexed-db.storage', () => ({
    indexedDBStorage: {
        getItem: vi.fn(() => Promise.resolve(null)),
        setItem: vi.fn(),
        removeItem: vi.fn(),
    },
}));

describe('useFrosthavenStore', () => {
    beforeEach(() => {
        // Reset store state before each test
        useFrosthavenStore.setState(initialState);
    });

    it('should set level', () => {
        const { setLevel } = useFrosthavenStore.getState();
        setLevel(5);
        expect(useFrosthavenStore.getState().level).toBe(5);
    });

    it('should select cards', () => {
        const mockCards: Card[] = [
            { name: 'Card 1', level: 1, path: 'path/1', status: 'inHand', actions: { top: 'discard', bottom: 'lose' }, initiative: 10 },
            { name: 'Card 2', level: 1, path: 'path/2', status: 'inHand', actions: { top: 'discard', bottom: 'lose' }, initiative: 20 },
        ];

        const { selectCards } = useFrosthavenStore.getState();
        selectCards(mockCards);

        const state = useFrosthavenStore.getState();
        expect(state.cards).toEqual(mockCards);
        expect(state.states).toHaveLength(1);
        expect(state.states[0]).toEqual(mockCards);
        expect(state.currentStateIndex).toBe(0);
    });

    it('should enhance a card', () => {
        const initialCard: Card = { name: 'Card 1', level: 1, path: 'path/1', status: 'inHand', actions: { top: 'discard', bottom: 'lose' }, initiative: 10 };
        const { selectCards, enhanceCard } = useFrosthavenStore.getState();

        // Setup initial state
        selectCards([initialCard]);
        // Also need to populate availableCards because enhanceCard updates both
        useFrosthavenStore.setState({ availableCards: [initialCard] });

        const enhancedCard: Card = { ...initialCard, enhancements: ['plus-one'] };
        enhanceCard(enhancedCard);

        const state = useFrosthavenStore.getState();
        expect(state.cards[0].enhancements).toEqual(['plus-one']);
        expect(state.availableCards[0].enhancements).toEqual(['plus-one']);
    });
});
