import { test, expect } from 'vitest';
import sortInts from '../src/sort.js';

test('Test de la fonction sortInts d un tableau trie croissant ', () => {
    const result = sortInts([1, 2, 3]);
    expect(result).toEqual([1, 2, 3]);
});

test('Test de la fonction sortInts d un tableau trie decroissant', () => {
    const result = sortInts([3, 2, 1]);
    expect(result).toEqual([1, 2, 3]);
});

test('Test de la fonction sortInts d un tableau non trie', () => {
    const result = sortInts([1, 2, 3, 0]);
    expect(result).toEqual([0, 1, 2, 3]);
});

test('Test de la fonction sortInts avec un tableau vide', () => {
    const result = sortInts([]);
    expect(result).toEqual([]);
})


test('Test de la fonction sortInts avec un tableau avec des chars', () => {
    const result = sortInts(['a', 'b', 'c']);
    expect(result).toBeNull();
})

test('Test de la fonction sortInts avec un tableau avec des chars et des nombres', () => {
    const result = sortInts(['a', 'b', 'c', 1, 2, 3]);
    expect(result).toBeNull();
})
