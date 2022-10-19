import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';

function App() {
  return (
    <main>
      <PlanetsProvider>
        <Table />
      </PlanetsProvider>
    </main>
  );
}

export default App;
