import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filter() {
  const {
    nameFilter,
    handleFilterByName,
    colunsFilter,
    handleFilterByColuns,
    operatorFilter,
    handleFilterByOperator,
    numberFilter,
    handleFilterByNumber,
    handleFilter,
  } = useContext(PlanetsContext);

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
        onChange={ handleFilterByColuns }
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
        onChange={ handleFilterByOperator }
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
        onChange={ handleFilterByNumber }
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
