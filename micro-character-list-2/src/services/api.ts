export interface Character {
    id: string;
    name: string;
    image: string;
    house?: string;
    species?: string;
    gender?: string;
}

export const fetchCharacters = async (): Promise<Character[]> => {
    const response = await fetch('https://hp-api.onrender.com/api/characters');
    const data = await response.json();

    return data.slice(0, 20);
};