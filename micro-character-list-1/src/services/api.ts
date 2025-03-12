export interface Character {
    id: number;
    name: string;
    image: string;
    species: string;
    gender: string;
}

export const fetchCharacters = async (): Promise<Character[]> => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    return data.results;
};;