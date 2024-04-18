import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs';
import { RiAdminLine, RiHome2Line } from 'react-icons/ri';
import { Button, Table, TextField } from '@radix-ui/themes';
import { MagnifyingGlassIcon, TrashIcon } from '@radix-ui/react-icons';
import { RxAllSides } from 'react-icons/rx';
import { FaUserGroup } from 'react-icons/fa6';
import { IoAdd, IoAddSharp, IoRemove } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import { FiDelete } from 'react-icons/fi';

function Usermanagement() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'User' },
    { id: 4, name: 'Bob Brown', email: 'bob@example.com', role: 'User' },
    { id: 5, name: 'Eva White', email: 'eva@example.com', role: 'User' },
  ];
    const breadcrumbsItems = [
        { text: 'Home', link: '/', icon: <RiHome2Line /> },
        { text: 'User Management' },
      ];
  return (
    <div>
       <>
      <div className='flex flex-col pt-16 p-4'>
        <Breadcrumbs items={breadcrumbsItems} />

        {/* filter in left
         */}
        <div className='flex justify-between mt-4 mx-4'>
          <div className='flex'>
            <Button className='text-white p-2 rounded-md cursor-pointer'>All <FaUserGroup/>  </Button>
            <Button className='text-white p-2 rounded-md ml-2 cursor-pointer'>Admin <RiAdminLine/> </Button>
            <Button className='text-white p-2 rounded-md ml-2 cursor-pointer'>User <FaUser/> </Button>
          </div>
          <Button className='text-white p-2 rounded-md cursor-pointer'>Add User <IoAdd/> </Button>
        </div>

        {/* search  */}
        <div className='flex justify-end mt-4 mr-6'>
        <TextField.Root placeholder="Search user">
            <TextField.Slot>
              <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
          </TextField.Root>
        </div>


        <div className='p-4'>
        <Table.Root variant="surface">
  <Table.Header>
    <Table.Row>
      <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Role</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
    </Table.Row>
  </Table.Header>

  <Table.Body>
    <Table.Row>
      <Table.RowHeaderCell>Sahil Ali</Table.RowHeaderCell>
      <Table.Cell>danilo@example.com</Table.Cell>
      <Table.Cell>Developer</Table.Cell>
      <Table.Cell><Button className='bg-red-600'>Remove User <TrashIcon/> </Button></Table.Cell>
    </Table.Row>

    <Table.Row>
      <Table.RowHeaderCell>Syed Kumail Rizvi</Table.RowHeaderCell>
      <Table.Cell>zahra@example.com</Table.Cell>
      <Table.Cell>Admin</Table.Cell>
      <Table.Cell><Button className='bg-red-600 rounded-md'>Remove User  <TrashIcon/> </Button></Table.Cell>
    </Table.Row>

    <Table.Row>
      <Table.RowHeaderCell>Mohd Maaz</Table.RowHeaderCell>
      <Table.Cell>jasper@example.com</Table.Cell>
      <Table.Cell>Developer</Table.Cell>
      <Table.Cell><Button className='bg-red-600'>Remove User <TrashIcon/> </Button></Table.Cell>
    </Table.Row>
  </Table.Body>
</Table.Root>
        </div>
       
        


      
      </div>
    </>
    </div>
  )
}

export default Usermanagement
