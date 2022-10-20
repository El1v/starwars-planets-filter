import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [colunsFilter, setColunsFilter] = useState('population');
  const [operatorFilter, setOperadorFilter] = useState('maior que');
  const [numberFilter, setNumberFilter] = useState(0);
  const [orderBy, setOrderBy] = useState({
    column: 'population', sort: 'ASC',
  });
  const [filter, setFilter] = useState(true);

  const handleChangeOrder = (event) => {
    const { name, value } = event.target;
    if (name) {
      setOrderBy((prevState) => ({ ...prevState, [name]: value }));
    } else {
      setOrderBy((prevState) => ({ ...prevState, column: value }));
    }
  };

  const handleFilterByName = ({ target }) => setNameFilter(target.value);
  const handleFilterByColuns = ({ target }) => setColunsFilter(target.value);
  const handleFilterByOperator = ({ target }) => setOperadorFilter(target.value);
  const handleFilterByNumber = ({ target }) => setNumberFilter(target.value);

  // const handleFilter = () => {
  //   let planetsFiltered;
  //   if (operatorFilter === 'maior que') {
  //     planetsFiltered = planets
  //       .filter((element) => Number(element[colunsFilter]) > Number(numberFilter));
  //   } else if (operatorFilter === 'menor que') {
  //     planetsFiltered = planets
  //       .filter((element) => Number(element[colunsFilter]) < Number(numberFilter));
  //   } else {
  //     planetsFiltered = planets
  //       .filter((element) => Number(element[colunsFilter]) === Number(numberFilter));
  //   }
  //   setPlanets(planetsFiltered);
  // };

  const value = useMemo(() => ({
    planets,
    setPlanets,
    nameFilter,
    colunsFilter,
    operatorFilter,
    numberFilter,
    handleFilterByName,
    handleFilterByColuns,
    handleFilterByOperator,
    handleFilterByNumber,
    orderBy,
    handleChangeOrder,
    filter,
    setFilter,
  }), [planets, nameFilter, colunsFilter, operatorFilter, numberFilter, orderBy, filter]);

  return (
    <PlanetsContext.Provider value={ value }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
