import React from 'react';
import { priceFilterFn, surfaceFilterFn } from './costumTableFilters';

export const tableColumns = [
  {
    Header: 'Numer mieszkania',
    accessor: 'numberOfFlat',
    id: 'numberOfFlat',
    sortable: true,
  },
  {
    Header: 'Piętro',
    accessor: 'level',
    id: 'level',
    sortable: true,
  },
  {
    Header: 'Pokoje',
    accessor: 'numberOfRooms',
    id: 'numberOfRooms',
    sortable: true,
  },
  {
    Header: 'Powierzchnia',
    accessor: 'surface',
    id: 'surface',
    sortable: true,
    filter: surfaceFilterFn,
  },
  {
    Header: 'Cena 1 m²',
    accessor: 'priceOfMeter',
    id: 'priceOfMeter',
    sortable: true,
  },
  {
    Header: 'Cena brutto',
    accessor: 'priceOfFlat',
    id: 'priceOfFlat',
    sortable: true,
    filter: priceFilterFn,
  },
  {
    Header: 'Status',
    accessor: 'statute',
    id: 'statute',
    sortable: true,
  },
  {
    Header: '',
    accessor: 'img',
    sortable: false,
    Cell: (props) => (<img className="table-container__body-plan" src={props.row.original.img} alt="Plan mieszkania" />),
  },
  {
    Header: '',
    accessor: 'cardOfFlat',
    sortable: false,
    Cell: (props) => (
      <a className="table-container__body-link" href={props.row.original.cardOfFlat} target="_blank" rel="noreferrer">Otwórz kartę mieszkania<i
        className="fa-solid fa-arrow-up-right-from-square"
      />
      </a>
    ),
  },
];
