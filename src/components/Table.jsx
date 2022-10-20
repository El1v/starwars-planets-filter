import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import IsLoading from './IsLoading';
import getPlanetList from '../services/PlanetListApi';

function Table() {
  const { planets, setPlanets,
    nameFilter } = useContext(PlanetsContext);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getPlanets = async () => {
      const data = await getPlanetList();
      data.results.forEach((object) => {
        delete object.residents;
      });
      setPlanets(data.results);
    };
    getPlanets();
    setIsLoading(false);
  }, [setPlanets, setIsLoading]);

  return (
    <div>
      {!isLoading && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Rotation Period</th>
              <th>Orbital Period</th>
              <th>Diameter</th>
              <th>Climate</th>
              <th>Gravity</th>
              <th>Terrain</th>
              <th>Surface Water</th>
              <th>Population</th>
              <th>Films</th>
              <th>Created</th>
              <th>Edited</th>
              <th>URL</th>
            </tr>
          </thead>

          <tbody>
            {planets
              .filter(({ name }) => name.toLowerCase().includes(nameFilter.toLowerCase()))
              .map((element, index) => (
                <tr key={ index }>
                  <td data-testid="planet-name">{element.name}</td>
                  <td>{element.rotation_period}</td>
                  <td>{element.orbital_period}</td>
                  <td>{element.diameter}</td>
                  <td>{element.climate}</td>
                  <td>{element.gravity}</td>
                  <td>{element.terrain}</td>
                  <td>{element.surface_water}</td>
                  <td>{element.population}</td>
                  <td>{element.films}</td>
                  <td>{element.url}</td>
                  <td>{element.edited}</td>
                </tr>
              ))}
          </tbody>
        </table>)}
      {isLoading && <IsLoading /> }
    </div>
  );
}

export default Table;
