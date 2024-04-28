import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { RiAdminLine, RiHome2Line } from 'react-icons/ri';
import { AlertDialog, Badge, Button, Flex, Skeleton, Table, TextField } from '@radix-ui/themes';
import { MagnifyingGlassIcon, TrashIcon } from '@radix-ui/react-icons';
import { FaUserGroup } from 'react-icons/fa6';
import { IoAdd } from 'react-icons/io5';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';



function Usermanagement() {
  const [loading, setLoading] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filterType, setFilterType] = useState('all');

  const handleRemove = async (email) => {
    try {
      const response = await axios.delete('http://localhost:8000/admin/user/delete', { data: { email: email } });
      if (response.status === 200) {
        console.log('User deleted successfully:', email);
        toast.success('User deleted successfully');
        getAllUsers();
      } else {
        console.error('Failed to delete user:', response.statusText);
        toast.error('Failed to delete user');
      }
    } catch (error) {
      console.error('Error deleting user:', error.message);
      toast.error('Failed to delete user');
    }
  };

  const getAllUsers = async () => {
    const url = 'http://localhost:8000/admin/user/getAll';
    try {
      setLoading(true);
      const response = await axios.get(url);
      setAllUsers(response.data);
      setFilteredUsers(response.data); // Initialize filteredUsers with all users
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
      toast.error('Unable to fetch data!');
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleAdmin = () => {
    
    const filtered = allUsers.filter((user) => user.role.name === 'admin');
    setFilterType('admin');
    
    

    setFilteredUsers(filtered);

  };

  const handleUser = () => {
    const filtered = allUsers.filter((user) => user.role.name === 'user');
    setFilterType('user');
    setFilteredUsers(filtered);
  };

  const handleAll = () => {
    setFilteredUsers(allUsers);
  };

  const handleSearch = () => {
    const trimmedInput = searchInput.trim(); // Trim trailing spaces
    const filtered = allUsers.filter((user) => {
      const searchLowerCase = trimmedInput.toLowerCase(); // Use trimmed input
      const fullName = user.name.toLowerCase();
      const email = user.email.toLowerCase();
      const status = user.isEmailVerified ? 'verified' : 'not verified';
      const role = user.role.name.toLowerCase();
      return fullName.includes(searchLowerCase) || email.includes(searchLowerCase) || status.includes(searchLowerCase) || role.includes(searchLowerCase);
    });
    setFilteredUsers(filtered);
  };
  

  const breadcrumbsItems = [
    { text: 'Home', link: '/', icon: <RiHome2Line /> },
    { text: 'User Management' },
  ];

  return (
    <div>
      <>
        <div className='flex flex-col pt-16 p-4'>
          <Breadcrumbs items={breadcrumbsItems} />
          <div className='flex justify-between mt-4 mx-4'>
  <div className='flex items-center'> {/* Updated to align items */}
    <Button className={`text-white p-2 rounded-md cursor-pointer ${filterType === 'all' && 'bg-blue-500'}`} onClick={handleAll}>All <FaUserGroup /></Button> {/* Updated className */}
    <Button className={`text-white p-2 rounded-md ml-2 cursor-pointer ${filterType === 'admin' && 'bg-blue-500'}`} onClick={handleAdmin}>Admin <RiAdminLine /></Button> {/* Updated className */}
    <Button className={`text-white p-2 rounded-md ml-2 cursor-pointer ${filterType === 'user' && 'bg-blue-500'}`} onClick={handleUser}>User <FaUser /></Button> {/* Updated className */}
  </div>
  <Link to="/create-user">
  <Button className='text-white p-2 rounded-md cursor-pointer'>Add User <IoAdd /></Button>
  </Link>
</div>


          <div className='flex justify-end mt-4 mr-6'>
            <TextField.Root placeholder="Search user" value={searchInput} onChange={(e) => { setSearchInput(e.target.value); handleSearch(); }}>
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
              <Skeleton loading={loading}>
              <Table.Body>
                {  filteredUsers.length === 0 ? ( <Table.Row><Table.Cell colSpan={5} align='center'>No users found</Table.Cell></Table.Row> )  :
                
                
                filteredUsers.map((user) => (
                  <Table.Row key={user._id}>
                    <Table.RowHeaderCell>{user.name}</Table.RowHeaderCell>
                    <Table.Cell>{user.email}</Table.Cell>
                    <Table.Cell><Badge radius="full" color={user.isEmailVerified ? "blue" : "red"}>{user.isEmailVerified ? "Verified User" : "Not Verified"}</Badge></Table.Cell>
                    <Table.Cell>{user.role.name}</Table.Cell>
                    <Table.Cell>
                      <AlertDialog.Root>
                        <AlertDialog.Trigger>
                          <Button className={user.role.name !== "admin" && 'bg-red-600'} disabled={user.role.name === "admin"}> Remove User <TrashIcon /> </Button>
                        </AlertDialog.Trigger>
                        <AlertDialog.Content maxWidth="450px">
                          <AlertDialog.Title>Remove User</AlertDialog.Title>
                          <AlertDialog.Description size="2">
                            Are you sure you want to remove this user?
                          </AlertDialog.Description>
                          <Flex gap="3" mt="4" justify="end">
                            <AlertDialog.Cancel>
                              <Button variant="soft" color="gray">
                                Cancel
                              </Button>
                            </AlertDialog.Cancel>
                            <AlertDialog.Action>
                              <Button variant="solid" color="red" onClick={() => handleRemove(user.email)}>
                                Remove
                              </Button>
                            </AlertDialog.Action>
                          </Flex>
                        </AlertDialog.Content>
                      </AlertDialog.Root>
                    </Table.Cell>
                  </Table.Row>
                  // Add this line
                  

                ))}
              </Table.Body>
              </Skeleton>
            </Table.Root>
          </div>
        </div>
      </>
    </div>
  );
}

export default Usermanagement;
