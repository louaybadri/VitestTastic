// Écrivez des cas de test pour cette fonction en couvrant les limites de la plage ainsi que les cas où le prix est en dehors de la plage.

import { test, expect } from 'vitest';

import isPriceInRange from '../src/boundry.js';


test("Le prix est inférieur au min", () => {
    const result = isPriceInRange(4, 5, 15);
    expect(result).toBe(false);
});

test("Le prix est supérieur au max", () => {
    const result = isPriceInRange(20, 5, 15);
    expect(result).toBe(false);

})

test("Le prix est dans la plage", () => {
    const result = isPriceInRange(12, 5, 15);
    expect(result).toBe(true);
})

test("Le prix est égal au min", () => {
    const result = isPriceInRange(5, 5, 15);
    expect(result).toBe(true);
})

test("Le prix est égal au max", () => {
    const result = isPriceInRange(15, 5, 15);
    expect(result).toBe(true);
})