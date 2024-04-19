import { test, expect } from 'vitest';

import { uppercase } from '../src/uppercase.js';

test('Test de la fonction uppercase', () => {
    const result = uppercase('hello');
    expect(result).toBe('HELLO');
});

test('Test de la fonction uppercase avec une chaine vide', () => {
    const result = uppercase('');
    expect(result).toBe('');
});

test('Test de la fonction uppercase avec des chars speciales', () => {
    const result = uppercase('hello, world!');
    expect(result).toBe('Can\'t convert string with special chars');
});