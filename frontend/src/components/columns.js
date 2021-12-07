import { format } from 'date-fns'

export const COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id',
    disableFilters: true,
    sticky: 'left'
  },
  {
    Header: 'Card Name',
    Footer: 'Card Name',
    accessor: 'card_name',
    sticky: 'left'
  },
  // {
  //   Header: 'Type',
  //   Footer: 'Type',
  //   accessor: 'type',
  //   sticky: 'left'
  // },
  {
    Header: 'Mana Cost',
    Footer: 'Mana Cost',
    accessor: 'mana_cost'
  },
  {
    Header: 'Attack',
    Footer: 'Attack',
    accessor: 'attack'
  },
  {
    Header: 'Health',
    Footer: 'Health',
    accessor: 'health'
  },
  // {
  //   Header: 'Durability',
  //   Footer: 'Durability',
  //   accessor: 'durability'
  // },
]

export const GROUPED_COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id'
  },
  {
    Header: 'Name',
    Footer: 'Name',
    columns: [
      {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name'
      },
      {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name'
      }
    ]
  },
  {
    Header: 'Info',
    Footer: 'Info',
    columns: [
      {
        Header: 'Date of Birth',
        Footer: 'Date of Birth',
        accessor: 'date_of_birth'
      },
      {
        Header: 'Country',
        Footer: 'Country',
        accessor: 'country'
      },
      {
        Header: 'Phone',
        Footer: 'Phone',
        accessor: 'phone'
      }
    ]
  }
]