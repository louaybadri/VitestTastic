import { describe, it, expect } from 'vitest';
import { fetchRandomUser } from '../src/fetchRandomUser.js';


describe('fetchRandomUser', () => {
    it('should fetch a random user', async () => {
        const user = await fetchRandomUser();
        expect(user).toBeDefined();
    });

    it('should return an object', async () => {
        const user = await fetchRandomUser();
        expect(typeof user).toBe('object');
    });

})