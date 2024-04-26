import React, { useState } from 'react';
import  {TextField, Box,Table,IconButton, Kbd} from '@radix-ui/themes';
import {DotsHorizontalIcon, MagnifyingGlassIcon} from '@radix-ui/react-icons';
import { Flex,Badge,Card,Avatar, DropdownMenu,Section, Text, Button } from '@radix-ui/themes';
import {toast} from 'react-hot-toast'

function Tables() {
 
  const [searchValue, setSearchValue] = useState("")
  const data = [
    { rank: 1, name: 'Mohd Maaz', speed: '250 w/m' },
    { rank: 2, name: 'Syed Kumail Rizvi', speed: '248 w/m' },
    { rank: 3, name: 'Sahil Ali', speed: '238 w/m' },
    { rank: 4, name: 'Lucky Ali', speed: '235 w/m' },
    { rank: 5, name: 'Ayesha Siddiqua', speed: '230 w/m' },
    { rank: 6, name: 'Sana Fatima', speed: '225 w/m' },
    { rank: 7, name: 'Zeba Shaikh', speed: '220 w/m' },
    { rank: 8, name: 'Mohd Owais', speed: '215 w/m' },
    { rank: 9, name: 'Mohd Zaid', speed: '210 w/m' },
    { rank: 10, name: 'Mohd Abdullah', speed: '205 w/m' },
  ]
  const [filterData , setFilterData] = useState(data)

  const handleSearch = (e) => {
    console.log(e.target.value)
    setSearchValue(e.target.value)
    let oldData = data
    let newData = oldData.filter((item) => {
      return Object.values(item).join("").toLowerCase().includes(e.target.value.toLowerCase())
    })
    console.log(newData)
    setFilterData(newData)
  }
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

        <Box maxWidth="250px">
    <TextField.Root placeholder="Search your rank.. " size="2" onChange={handleSearch} value={searchValue}>
      <TextField.Slot>
        <MagnifyingGlassIcon height="16" width="16" />
      </TextField.Slot>
      <TextField.Slot>
        {/* <IconButton size="1" variant="ghost">
          <DotsHorizontalIcon height="14" width="14" />
       
        </IconButton> */}
        <Kbd shortcut="⌘ S">⌘ S</Kbd>
      </TextField.Slot>
    </TextField.Root>
  </Box>
 {/* including  top three user profiles as cards */}
  <div className="flex justify-between mt-6">
    {/* text */}
    <h3 className="text-xl font-bold ml-2">Top 3</h3>
    {/* button */}
    <button className="text-blue-500 cursor-pointer mr-2" onClick={()=>{toast.error("Please login to get access!")}}>View All</button>
  </div>

  {/* now using map array */}
  {data.slice(0,3).map((item) => (
  <Card key={item.rank} className='mt-2'>
    <Flex gap="3" align="center">
      <Avatar
        size="3"
        // src="./img/sahil.jpg"
        radius="full"
        fallback={item.name[0]}
      />
      <Box>
        <Text as="div" size="2" weight="bold">
          {item.name}
        </Text>
        <Text as="div" size="2" color="gray">
          {item.speed}
        </Text>
      </Box>
    </Flex>
  </Card>
))}
 
        </div>
      </div>

      {/* Right half with table */}
      <div className="p-4">
        {/* Using data array */}
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Rank</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Speed(W/M)</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>

            {filterData.length == 0? <tr className="text-center">
  <td colSpan="6">User Not Found</td>
</tr> :filterData.map((item) => (
              <Table.Row key={item.rank}>
                <Table.RowHeaderCell>{item.rank}</Table.RowHeaderCell>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.speed}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>

      </div>
    </div>
  );
}

export default Tables;
