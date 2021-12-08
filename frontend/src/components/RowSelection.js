import React, { useMemo, useState } from 'react'
import ReactTable from 'react-table'
import { useTable, useRowSelect } from 'react-table'
import CARD_DATA from './carddata.json'
import { COLUMNS } from './columns'
import './table.css'
import { Checkbox } from './Checkbox'
import axios from 'axios'
import index from '../index'




export const RowSelection = ({childToParent}) => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => CARD_DATA, [])
 
  const dataToSend = "This is data from Child Component to the Parent Component."
  

  function handleClick() {
    console.log(selectedFlatRows.map(row => row.original));
    
    console.log("Button Clicked");
    axios.post('http://localhost:8080/game/games/deck', selectedFlatRows.map(row => row.original)).then(function (response) {
        console.log(response.data.uuid);
        childToParent(response.data.uuid);
        
        
        
      })
    axios.get('http://localhost:8080/game/users/garg.pranav@gmail.com').then(function (response) { console.log(response)} );
    //axios.get('http://localhost:8080/game').then(function (response) { console.log(response.uuid)} );
    
   
    
    
    
    
  }

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows // gives flat array of rows that are selected
  } = useTable(
    {
      columns,
      data
    },
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        {
          id: 'selection',
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />
        },
        ...columns
      ])
    }
  )

  const listOfCards = rows.slice(0, 30) // 30 data rows

 
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {listOfCards.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>

      <pre> 
        <code>
          {JSON.stringify( 
            { // printing each selected row to the browser
              selectedFlatRows: selectedFlatRows.map(row => row.original)
            },
            null,
            2
          )}
        </code>
      </pre>
      <button onClick={handleClick}>Submit Deck</button>
    </>
    
  )
         
}