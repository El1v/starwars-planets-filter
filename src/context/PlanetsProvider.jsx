import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [nameFilter, setNameFilter] = useState('');

  const handleFilterByName = ({ target }) => setNameFilter(target.value);

  const value = useMemo(() => ({
    planets,
    setPlanets,
    nameFilter,
    handleFilterByName,
  }), [planets, nameFilter]);

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
