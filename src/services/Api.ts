export const BASE_URL = 'https://pokeapi.co/api/v2';

export const detailsFetcher = (name: string) => async () => {
  const details = await fetch(`${BASE_URL}/pokemon/${name}`).then(res => res.json());
    const species = await fetch(details.species.url).then(res => res.json());

    return {...details, names: species.names};
}

export const listFetcher = () => async ({ pageParam = 0 }) => {
  const list = await fetch(`${BASE_URL}/pokemon?offset=${pageParam}&limit=${100}`).then(res => res.json());
  return list.results;
}