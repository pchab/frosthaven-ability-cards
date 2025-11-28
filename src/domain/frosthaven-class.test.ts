import { describe, it, expect } from 'vitest';
import {
    upperFirstLetter,
    classNameToURI,
    classURIToName,
} from './frosthaven-class';
import type { FrosthavenClassNames } from './frosthaven-class.type';

describe('frosthaven-class utils', () => {
    describe('upperFirstLetter', () => {
        it('should capitalize the first letter of a word', () => {
            expect(upperFirstLetter('hello')).toBe('Hello');
            expect(upperFirstLetter('world')).toBe('World');
        });

        it('should handle empty strings', () => {
            expect(upperFirstLetter('')).toBe('');
        });
    });

    describe('classNameToURI', () => {
        it('should convert class name to URI format', () => {
            expect(classNameToURI('Banner Spear')).toBe('banner-spear');
            expect(classNameToURI('Blinkblade')).toBe('blinkblade');
        });
    });

    describe('classURIToName', () => {
        it('should convert URI to class name format', () => {
            expect(classURIToName('banner-spear')).toBe('Banner Spear');
            expect(classURIToName('blinkblade')).toBe('Blinkblade');
        });
    });
});
