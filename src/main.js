import { test } from 'vitest';
import add from './math.js';

test('Test de la fonction add', () => {
    const result = add(2, 3);
    expect(result).toBe(5);
});