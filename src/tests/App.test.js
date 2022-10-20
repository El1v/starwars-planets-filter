import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Testa componente Table', () => {
  test('Vefificando se carrega as informações da Api', async () => {
    render(<App />);
    await new Promise((r) => setTimeout(r, 2000));
    const firstCell = screen.getByRole('cell', { name: /tatooine/i })
    expect(firstCell).toBeInTheDocument();
  });
})

describe('Testa componente Filter', () => {
  test('Verifica se os campos de filtro estão no documento', async () => {
    render(<App />);
    await new Promise((r) => setTimeout(r, 2000));
    const inputSearch = screen.getByRole('textbox');
    expect(inputSearch).toBeInTheDocument();
    const optionSearch = screen.getByTestId('column-filter');
    expect(optionSearch).toBeInTheDocument();
    const comparisonSearch = screen.getByTestId('comparison-filter');
    expect(comparisonSearch).toBeInTheDocument();
    const inputNumber = screen.getByRole('spinbutton');
    expect(inputNumber).toBeInTheDocument();
    const btnFilter = screen.getByRole('button', { name: /filtrar/i });
    expect(btnFilter).toBeInTheDocument();
    userEvent.click(btnFilter);
    const nameRows = screen.getAllByTestId('planet-name');
    expect(nameRows.length).toBe(8);

  })
  test('Verifica o sortBy', async() => {
    render(<App />);
    await new Promise((r) => setTimeout(r, 2000));
    const btnSortBy = screen.getByRole('button', { name: /ordenar/i });
    expect(btnSortBy).toBeInTheDocument();
    userEvent.click(btnSortBy);
  })
  test('Verifica o radio button ASC e input list do filter', async() => {
    render(<App />);
    await new Promise((r) => setTimeout(r, 2000));

    const ascRadio = screen.getByTestId('column-sort-input-asc');
    expect(ascRadio.checked).toEqual(false);
    userEvent.click(ascRadio);
    expect(ascRadio.checked).toEqual(true);
    const btnSortBy = screen.getByRole('button', { name: /ordenar/i });
    expect(btnSortBy).toBeInTheDocument();
    userEvent.click(btnSortBy);

    const optionFilter = screen.getByTestId('column-sort');
    expect(optionFilter).toBeInTheDocument();
    userEvent.selectOptions(optionFilter, 'diameter')

    const descRadio = screen.getByTestId('column-sort-input-desc');
    userEvent.click(descRadio);
    userEvent.click(btnSortBy);
  })
})



