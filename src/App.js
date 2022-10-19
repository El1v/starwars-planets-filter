import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import Filter from './components/Filter';

function App() {
  return (
    <main>
      <PlanetsProvider>
        <Filter />
        <Table />
      </PlanetsProvider>
    </main>
  );
}

export default App;
