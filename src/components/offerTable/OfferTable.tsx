/* eslint-disable jsx-a11y/control-has-associated-label,no-console,no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import './offerTable.css';
import { useTable, useFilters, usePagination, useSortBy } from 'react-table';
import { collection, getDocs } from 'firebase/firestore';
import { tableColumns } from './tableColumns.js';
import { db } from '../../config/firebase';
import { Spinner } from '../index';
import useFlatsData from '../../utils/dataService.js';

const OfferTable = (props: any) => {
  const { flatsData } = useFlatsData();
  const [flatsList, setFlatsList] = useState([]);
  const [surfaceInputMax, setSurfaceInputMax] = useState(100);
  const [surfaceInputMin, setSurfaceInputMin] = useState(0);
  const [priceInputMax, setPriceInputMax] = useState(10000000);
  const [priceInputMin, setPriceInputMin] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    flatsData.length > 1 ? setIsLoading(false) : setIsLoading(true);
  }, [flatsData]);

  const columns = React.useMemo(() => tableColumns, []);
  const data = React.useMemo(() => flatsData, [flatsData]);

  const { getTableProps, getTableBodyProps, headerGroups, page, nextPage, previousPage, canPreviousPage, canNextPage, pageOptions, state, gotoPage, prepareRow, setAllFilters, setFilter } = useTable({ columns, data }, useFilters, useSortBy, usePagination);
  const { pageIndex } = state;
  const clearFilters = () => {
    setAllFilters([]);
    setSurfaceInputMin(0);
    setSurfaceInputMax(100);
    setPriceInputMin(0);
    setPriceInputMax(10000000);
    // eslint-disable-next-line no-param-reassign,no-return-assign
    document.querySelectorAll('.table-filter').forEach((el:any) => el.value = '');
  };
  useEffect(() => {
    setTimeout(clearFilters, 1000);
  }, []);

  useEffect(() => {
    setFilter('surface', [surfaceInputMin, surfaceInputMax]);
  }, [surfaceInputMin, surfaceInputMax]);
  useEffect(() => {
    setFilter('priceOfFlat', [priceInputMin, priceInputMax]);
  }, [priceInputMin, priceInputMax]);
  const changeOfferView = () => props.changeOnOfferDetails();

  return (
    <div className="table-container">
      <div className="table-container__filters">
        <div>
          <p>Dostępność:</p>
          <select name="statuteSelect" className="table-filter" onChange={(e) => setFilter('statute', e.target.value)}>
            <option value="">--Wybierz--</option>
            <option value="dostępne">Dostępne</option>
            <option value="rezerwacja">Rezerwacja</option>
            <option value="sprzedane">Sprzedne</option>
          </select>
        </div>
        <div>
          <p>Wybierz piętro</p>
          <select name="levelSelect" className="table-filter" onChange={(e) => setFilter('level', e.target.value)}>
            <option value="">--Wybierz--</option>
            <option value="parter">Parter</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div>
          <p>Liczba pokoi</p>
          <select name="roomsSelect" className="table-filter" onChange={(e) => setFilter('numberOfRooms', e.target.value)}>
            <option value="">--Wybierz--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <p>Powierzchnia</p> od:
          <input
            className="table-filter"
            type="number"
            defaultValue=""
            max={100}
            min={30}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSurfaceInputMin(Number(e.target.value))}
          />
          do:
          <input
            className="table-filter"
            type="number"
            defaultValue=""
            max={100}
            min={40}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSurfaceInputMax(Number(e.target.value))}
          />
        </div>
        <div>
          <p>Cena </p>
          od:
          <input
            className="table-filter"
            type="number"
            defaultValue=""
            step={50000}
            max={1000000}
            min={300000}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPriceInputMin(Number(e.target.value))}
          />
          do:
          <input
            className="table-filter"
            type="number"
            defaultValue=""
            step={50000}
            max={1000000}
            min={400000}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPriceInputMax(Number(e.target.value))}
          />
        </div>
        <button className="table-button" type="button" onClick={() => clearFilters()}>Wyczyść filtry</button>
      </div>

      {isLoading ? <Spinner />
        : (
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup: any) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column: any) => (
                    <th
                      key={column.accessor}
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render('Header')}
                      <span>
                        {column.sortable ? (column.isSorted ? (column.isSortedDesc
                          ? <i className="fa-solid fa-sort-up" /> : <i className="fa-solid fa-sort-down" />)
                          : <i className="fa-solid fa-sort" />) : ''}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.length < 1 ? (
                <tr>
                  <td colSpan={9}>
                    <span className="table-notification">Niestety nie znaleziono mieszkań spełaniających kryteria <br /> <button className="table-button" type="button" onClick={() => clearFilters()}>Wyczyść filtry</button>
                      lub
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <button className="table-button" type="button" onClick={() => changeOfferView()}>Sprawdź</button> mieszkania dostęne w kolejnych etapach
                    </span>
                  </td>
                </tr>
              ) : ''}
              {page.map((row: any) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} className={`${row.cells[6].value === 'dostępne' ? '' : 'status-not-available'}`}>
                    {row.cells.map((cell: any) => (
                      <td data-heading={cell.column.Header} {...cell.getCellProps()}> {cell.render('Cell')} </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      <div className="offer-container__table-pagination">
        <div>
          <button
            type="button"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            <i className="fa-solid fa-caret-left" />
          </button>
          {pageOptions.map((el :any, index: number) => <button type="button" key={index} className={`${pageIndex === el ? 'active-page' : ''}`} onClick={() => gotoPage(el)}>{el + 1}</button>)}
          <button
            type="button"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >{window.innerWidth < 550 ? ' ' : 'Następna'} <i className="fa-solid fa-caret-right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferTable;

