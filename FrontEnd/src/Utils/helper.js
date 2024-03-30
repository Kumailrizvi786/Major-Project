import { getUserData } from "../services/authService";
import axios from 'axios';

const getUser = async () => {
  try {
    // Retrieve user data from local storage
    const user = getUserData();
    if (!user || !user.userEmail) {
      throw new Error('User data not found or incomplete');
    }

    // Extract user email
    const { userEmail } = user;

    // Make request to fetch user details
    const response = await axios.post('http://localhost:8080/user/getAllDetails', { email: userEmail }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}` // Include token in request headers
      }
    });

    // Check response status
    if (response.status === 200) {
      // Return user details
      return response.data;
    } else {
      throw new Error('Failed to fetch user details');
    }
  } catch (error) {
    console.error('Error fetching user details:', error.message);
    throw error; // Rethrow the error to be handled by the caller
  }
};

export { getUser };
