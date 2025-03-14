export interface Character {
    id: string;
    name: string;
    image: string;
    house?: string;
    species?: string;
    gender?: string;
}

const api = 'https://hp-api.onrender.com/api/characters';
export const fetchCharacters = async (): Promise<Character[]> => {
    const response = await fetch(api);
    const data = await response.json();

    return data.slice(0, 20);
};