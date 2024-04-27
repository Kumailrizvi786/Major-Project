import React, { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { Button, Card, TextField } from '@radix-ui/themes';
import { IoAdd } from 'react-icons/io5';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';

function AddUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [role, setRole] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/admin/user/create', {
        name,
        email,
        password,
        city,
        role,
        age
      });
      if (response.status === 200) {
        toast.success('User created successfully');
        // Clear form fields after successful submission
        setName('');
        setEmail('');
        setPassword('');
        setCity('');
        setRole('');
        setAge('');
      } else {
        console.error('Failed to create user:', response.statusText);
        toast.error('Failed to create user');
      }
    } catch (error) {
      console.error('Error creating user:', error);
      toast.error(''+ error.response.data.message);
    }
  };

  return (
    <div>
      <div className='flex flex-col pt-16 p-4'>
        <Breadcrumbs items={[{ text: 'Home', link: '/' }, { text: 'Add User' }]} />
        <Card className="p-6 mt-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <PlusCircledIcon className="h-8 w-8 text-[] mr-3" />
              <h2 className="text-2xl font-bold leading-none">Create New User</h2>
            </div>
            <div className="flex items-center gap-2">
              <Link to="/usermanagement">
                <Button radius="full" className="cursor-pointer">
                  View All User <FaEye />
                </Button>
              </Link>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
                Full Name
              </label>
              <TextField.Root
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter User Full Name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <TextField.Root
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter User Email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                Password
              </label>
              <TextField.Root
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter user password"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="city" className="block text-gray-700 font-bold mb-2">
                City
              </label>
              <TextField.Root
                id="city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter User City"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="role" className="block text-gray-700 font-bold mb-2">
                Role
              </label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="age" className="block text-gray-700 font-bold mb-2">
                Age
              </label>
              <TextField.Root
                id="age"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter User Age"
                required
              />
            </div>
            <Button type="submit">Add User</Button>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default AddUser;
