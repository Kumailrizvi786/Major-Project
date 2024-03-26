import React from 'react'
import { Table } from '@radix-ui/themes';

function Tables() {
  return (
    <div>
      <div className='w-half'>
<Table.Root variant="surface">
  <Table.Header>
    <Table.Row>
      <Table.ColumnHeaderCell>Rank</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Speed(W/M)</Table.ColumnHeaderCell>
    </Table.Row>
  </Table.Header>

  <Table.Body>
    <Table.Row>
      <Table.RowHeaderCell>1</Table.RowHeaderCell>
      <Table.Cell>Mohd Maaz</Table.Cell>
      <Table.Cell>250</Table.Cell>
    </Table.Row>

    <Table.Row>
      <Table.RowHeaderCell>2</Table.RowHeaderCell>
      <Table.Cell>Syed Kumail Rizvi</Table.Cell>
      <Table.Cell>248</Table.Cell>
    </Table.Row>

    <Table.Row>
      <Table.RowHeaderCell>3</Table.RowHeaderCell>
      <Table.Cell>Sahil Ali</Table.Cell>
      <Table.Cell>238</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table.Root>
</div>
    </div>
  )
}

export default Tables
