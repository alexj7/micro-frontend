export interface Character {
    id: number;
    name: string;
    image: string;
    species: string;
    gender: string;
}

const api = 'https://rickandmortyapi.com/api/character';
export const fetchCharacters = async (): Promise<Character[]> => {
    const response = await fetch(api);
    const data = await response.json();
    return data.results;
};;