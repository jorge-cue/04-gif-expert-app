import { getGifs } from '../../helpers/getGifs';

describe('Test suite for getGifs helper', () => {

    test('should fetch 10 elements or less', async() => {
        const gifs = await getGifs('One Punch');
        expect( gifs.length ).toBeLessThanOrEqual(10);
    });

    test('should fetch no elements when category is ""', async() => {
        const gifs = await getGifs('');
        expect( gifs.length ).toBe(0);
    });
});

