const PLANET_LIST_API = 'https://swapi.dev/api/planets';

const getPlanetList = async () => {
  const response = await fetch(PLANET_LIST_API);
  const json = await response.json();

  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export default getPlanetList;
