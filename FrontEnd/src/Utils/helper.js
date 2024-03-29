// Function to check if user is logged in
const isLoggedIn = () => {
    // Check if token exists in local storage
    const token = localStorage.getItem('token');
    // If token exists and is not empty, consider user as logged in
    return !!token;
  };
  
  // Function to get user details
  const getUser = () => {
    // Get user details from local storage or any other source
   
    return user;
  };
  
  export { isLoggedIn, getUser };
  