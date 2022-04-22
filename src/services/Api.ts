export const BASE_URL = 'https://pokeapi.co/api/v2';

export const detailsFetcher = (name: string) => async () => {
  const details = await fetch(`${BASE_URL}/pokemon/${name}`).then(res => res.json());
    const species = await fetch(details.species.url).then(res => res.json());

    return {...details, names: species.names};
}

export const listFetcher = (offset: number, limit: number) => async ({ pageParam = 0 }) => {
  const res = await fetch(`${BASE_URL}/pokemon?offset=${pageParam != 0 ? (pageParam + offset) * limit : offset}&limit=${limit}`).then(res => res.json());
  return { ...res, page: pageParam };
}