import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../components/Breadcrumbs';
import { RiAdminLine, RiHome2Line } from 'react-icons/ri';
import { Badge, Button, Table, TextField } from '@radix-ui/themes';
import { MagnifyingGlassIcon, TrashIcon } from '@radix-ui/react-icons';
import { RxAllSides } from 'react-icons/rx';
import { FaUserGroup } from 'react-icons/fa6';
import { IoAdd, IoAddSharp, IoRemove } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import { FiDelete } from 'react-icons/fi';
import axios from 'axios';
import { toast } from 'react-hot-toast';

function Usermanagement() {
  const [loading, setLoading] = useState(false);
  const [Allusers, setAllusers] = useState([]);
  

  const getAllUsers = async () => {
    const url = 'http://localhost:8000/admin/user/getAll';  
    try{
      setLoading(true);
      const response = await axios.get(url);
      console.log(response.data);
      setAllusers(response.data);
      setLoading(false);

    }catch(error){
      setLoading(false);
      console.error(error);
      toast.error("Unable to fetch data!")
    }
  }

  useEffect(()=>{
    // const users = 
    getAllUsers();
  },[])
 
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
      <Table.ColumnHeaderCell>Verified Status</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Role</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
    </Table.Row>
  </Table.Header>

  <Table.Body>
 { Allusers.map((user) => (
    <Table.Row>
      <Table.RowHeaderCell>{user.name}</Table.RowHeaderCell>
      <Table.Cell>{user.email}</Table.Cell>
      <Table.Cell><Badge radius="full" color={user.isEmailVerified ? "blue": "red"}>{user.isEmailVerified ? "Verified User": "Not Verified"}</Badge></Table.Cell>
      <Table.Cell>{user.role.name}</Table.Cell>
      <Table.Cell><Button className={user.role.name !== "admin" && 'bg-red-600'} disabled={user.role.name == "admin"}>Remove User <TrashIcon/> </Button></Table.Cell>
    </Table.Row>
  ))}
  

   \

    
  </Table.Body>
</Table.Root>
        </div>
       
        


      
      </div>
    </>
    </div>
  )
}

export default Usermanagement
