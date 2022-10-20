import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filter() {
  const {
    planets,
    setPlanets,
    nameFilter,
    handleFilterByName,
    orderBy,
    handleChangeOrder,
    filter,
    setFilter,
  } = useContext(PlanetsContext);

  const [colunsFilter, setColunsFilter] = useState('population');
  const [operatorFilter, setOperatorFilter] = useState('maior que');
  const [numberFilter, setNumberFilter] = useState(0);
  const [optionsList, setOptionsList] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);

  const orderByList = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  // const [optionsButtons, setOptionsButtons] = useState([]);

  // const addColunsButton = (column) => (
  //   setOptionsButtons((prevState) => ([
  //     ...prevState, column,
  //   ]))
  // );

  // const removeColunsButton = (columnn) => (
  //   // setOptionsList((prevState) => ([
  //   //   ...prevState, columnn,
  //   // ]))
  // );

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
    setOptionsList(optionsList.filter((element) => element !== colunsFilter));
    setColunsFilter(optionsList[0]);
  };

  const handleOrderBy = () => {
    let planetsOrderBy;

    const hasUnknown = planets
      .filter((element) => element[orderBy.column] === 'unknown');

    if (hasUnknown) {
      const newList = planets
        .filter((element) => element[orderBy.column] !== 'unknown');
      hasUnknown.forEach((element) => newList.push(element));

      if (orderBy.sort === 'ASC') {
        planetsOrderBy = newList
          .sort((a, b) => Number(a[orderBy.column]) - Number(b[orderBy.column]));
      } else {
        planetsOrderBy = newList
          .sort((a, b) => Number(b[orderBy.column]) - Number(a[orderBy.column]));
      }
    } else if (orderBy.sort === 'ASC') {
      planetsOrderBy = planets
        .sort((a, b) => Number(a[orderBy.column]) - Number(b[orderBy.column]));
    } else {
      planetsOrderBy = planets
        .sort((a, b) => Number(b[orderBy.column]) - Number(a[orderBy.column]));
    }

    setPlanets(planetsOrderBy);
    setFilter(!filter);
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
        {optionsList.map((element, index) => (
          <option key={ index } value={ element }>{element}</option>
        ))}
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

      <select
        value={ orderBy.column }
        data-testid="column-sort"
        onChange={ handleChangeOrder }
      >
        {orderByList.map((element, index) => (
          <option name="column" key={ index } value={ element }>{element}</option>
        ))}
      </select>
      <br />

      <input
        type="radio"
        value="ASC"
        name="sort"
        data-testid="column-sort-input-asc"
        onChange={ handleChangeOrder }
      />
      Ascendente
      <input
        type="radio"
        value="DESC"
        name="sort"
        data-testid="column-sort-input-desc"
        onChange={ handleChangeOrder }
      />
      Descendente

      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ handleOrderBy }
      >
        Ordenar
      </button>
      {/*
      <div>
        {optionsButtons
          .map((element, index) => (
            <button
              type="button"
              key={ index }
              // onClick={ removeColunsButton(element) }
            >
              { element }
            </button>))}
      </div> */}
    </div>
  );
}

export default Filter;
