import { fetchData } from '../src/async'; // Import de la fonction à tester
import { describe, it, expect } from 'vitest';



// TODO :ask about the fail case

describe('fetchData()', () => {
    it('should fetch data from the server', async () => {
        try {
            const data = await fetchData(); // Appel de la fonction asynchrone

            // Vérification des résultats attendus
            expect(data).toBeDefined(); // On s'assure que les données ont été renvoyées
            expect(data.userId).toBe(1); // On s'assure que les données ont été renvoyées
            // expect(Array.isArray(data)).toBe(true); // On vérifie que les données renvoyées sont un tableau
            // Ajoutez d'autres assertions selon les données attendues

        } catch (error) {
            // Si une erreur se produit pendant l'exécution de la fonction asynchrone
            // On signale le test comme échoué
            throw error;
        }
    });
});