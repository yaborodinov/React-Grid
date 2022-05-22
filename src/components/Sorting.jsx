import React, {useState} from 'react'
import {
    SortingState,
    IntegratedSorting,
} from '@devexpress/dx-react-grid'
import {
    Grid,
    Table,
    TableHeaderRow,
} from '@devexpress/dx-react-grid-bootstrap4'
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css'
import { generateRows } from '../demo-data/generator'


const Sorting = () => {
    const [columns] = useState([
        { name: 'name', title: 'Name' },
        { name: 'gender', title: 'Gender' },
        { name: 'city', title: 'City' },
        { name: 'car', title: 'Car' },
      ])
      const [rows] = useState(generateRows({ length: 8 }))
      const [defaultSorting] = useState([
        { columnName: 'gender', direction: 'desc' },
      ])
      const [sortingStateColumnExtensions] = useState([
        { columnName: 'gender', sortingEnabled: false },
      ])
    return (
        <div className="card mt-4">
            <Grid
                rows={rows}
                columns={columns}
            >
                <SortingState
                defaultSorting={defaultSorting}
                columnExtensions={sortingStateColumnExtensions}
                />
                <IntegratedSorting />
                <Table />
                <TableHeaderRow showSortingControls />
            </Grid>
        </div>
    )
}

export default Sorting
