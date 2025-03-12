import { useEffect, useState } from 'react';

export const useFetch = <T>(fetchFn: () => Promise<T>) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const result = await fetchFn();
                setData(result);
            } catch (err) {
                setError('Error loading data');
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, [fetchFn]);

    return { data, loading, error };
};