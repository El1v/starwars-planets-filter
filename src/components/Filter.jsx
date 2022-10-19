import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filter() {
  const { nameFilter, handleFilterByName } = useContext(PlanetsContext);
  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        name="name"
        value={ nameFilter }
        placeholder="Digite um nome"
        onChange={ handleFilterByName }
      />
    </div>
  );
}

export default Filter;
