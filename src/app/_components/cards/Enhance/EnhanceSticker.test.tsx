import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import EnhanceSticker from './EnhanceSticker';

// Mock next/image
vi.mock('next/image', () => ({
    default: ({ src, alt, style, ...props }: any) => (
        <img src={src} alt={alt} style={style} {...props} />
    ),
}));

describe('EnhanceSticker', () => {
    const mockProps = {
        enhancement: 'plus-one' as const,
        position: { x: 50, y: 100, size: 20 },
    };

    it('should render the sticker image with correct path', () => {
        render(<EnhanceSticker {...mockProps} />);

        const img = screen.getByRole('img', { name: 'enhancement-sticker-plus-one' });
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute('src', '/enhancement-stickers/fh-plus-one-sticker.webp');
    });

    it('should position the sticker correctly', () => {
        render(<EnhanceSticker {...mockProps} />);

        const img = screen.getByRole('img');
        // x - size/2 = 50 - 10 = 40
        // y - size/2 = 100 - 10 = 90
        expect(img).toHaveStyle({
            left: '40px',
            top: '90px',
        });
    });

    it('should use default size if not provided', () => {
        const propsWithoutSize = {
            enhancement: 'fire' as const,
            position: { x: 50, y: 50 },
        };
        render(<EnhanceSticker {...propsWithoutSize} />);

        const img = screen.getByRole('img');
        // Default size is 10. 
        // x - 5 = 45
        // y - 5 = 45
        expect(img).toHaveStyle({
            left: '45px',
            top: '45px',
        });
    });
});
