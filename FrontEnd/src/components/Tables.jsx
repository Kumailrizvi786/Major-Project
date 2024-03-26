import React from 'react';
import { Table } from '@radix-ui/themes';
import Search from './Search';

function Tables() {
  return (
    <div className="grid grid-cols-2 gap-8 mx-24">
      {/* Left half with text */}
      <div className="p-4">
        <h2 className="text-3xl font-bold">Our Top Speed Readers</h2>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper velit nec dolor ullamcorper, id ultrices sapien placerat. Donec dignissim tristique commodo.
        </p>
        {/* // including search bar */}
        <div className="mt-4">

        <Search text={"Search Speed Readers..."}/>
        </div>
      </div>

      {/* Right half with table */}
      <div className="p-4">
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
              <Table.Cell>250 w/m</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.RowHeaderCell>2</Table.RowHeaderCell>
              <Table.Cell>Syed Kumail Rizvi</Table.Cell>
              <Table.Cell>248 w/m</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.RowHeaderCell>3</Table.RowHeaderCell>
              <Table.Cell>Sahil Ali</Table.Cell>
              <Table.Cell>238 w/m</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </div>
    </div>
  );
}

export default Tables;
