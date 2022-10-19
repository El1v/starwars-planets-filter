import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filter() {
  const {
    planets,
    setPlanets,
    nameFilter,
    handleFilterByName,
    // colunsFilter,
    // handleFilterByColuns,
    // operatorFilter,
    // handleFilterByOperator,
    // numberFilter,
    // handleFilterByNumber,
    // handleFilter,
  } = useContext(PlanetsContext);

  const [colunsFilter, setColunsFilter] = useState('population');
  const [operatorFilter, setOperatorFilter] = useState('maior que');
  const [numberFilter, setNumberFilter] = useState(0);

  const handleFilter = () => {
    let planetsFiltered;
    if (operatorFilter === 'maior que') {
      planetsFiltered = planets
        .filter((element) => Number(element[colunsFilter]) > Number(numberFilter));
    } else if (operatorFilter === 'menor que') {
      planetsFiltered = planets
        .filter((element) => Number(element[colunsFilter]) < Number(numberFilter));
    } else {
      planetsFiltered = planets
        .filter((element) => Number(element[colunsFilter]) === Number(numberFilter));
    }
    setPlanets(planetsFiltered);
  };

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        name="nameFilter"
        value={ nameFilter }
        placeholder="Digite um nome"
        onChange={ handleFilterByName }
      />

      <select
        value={ colunsFilter }
        data-testid="column-filter"
        onChange={ ({ target }) => { setColunsFilter(target.value); } }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        value={ operatorFilter }
        data-testid="comparison-filter"
        onChange={ ({ target }) => { setOperatorFilter(target.value); } }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        data-testid="value-filter"
        type="number"
        name="numberFilter"
        value={ numberFilter }
        placeholder="Digite um nome"
        onChange={ ({ target }) => { setNumberFilter(target.value); } }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleFilter }
      >
        Filtrar
      </button>

    </div>
  );
}

export default Filter;
