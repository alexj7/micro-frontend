import { renderHook, act } from '@testing-library/react';
import { useFetch } from '../useFetch';


const mockPromise = () => new Promise(resolve => setTimeout(resolve, 0))

describe('useFetch hook', () => {
    it('should start with loading true and then fetch data correctly', async () => {
        const mockFetch = vi.fn(() => Promise.resolve(['Item 1', 'Item 2']));

        const { result } = renderHook(() => useFetch(mockFetch));

        expect(result.current.loading).toBe(true);
        expect(result.current.data).toBeNull();
        expect(result.current.error).toBeNull();

        await act(async () => {
            await mockPromise();
        });

        expect(result.current.loading).toBe(false);
        expect(result.current.data).toEqual(['Item 1', 'Item 2']);
        expect(result.current.error).toBeNull();
    });

    it('should handle error and set loading to false', async () => {
        const mockFetch = vi.fn(() => Promise.reject('Fetch error'));

        const { result } = renderHook(() => useFetch(mockFetch));

        expect(result.current.loading).toBe(true);
        expect(result.current.data).toBeNull();
        expect(result.current.error).toBeNull();

        await act(async () => {
            await mockPromise();
        });

        expect(result.current.loading).toBe(false);
        expect(result.current.data).toBeNull();
        expect(result.current.error).toBe('Error loading data');
    });
});