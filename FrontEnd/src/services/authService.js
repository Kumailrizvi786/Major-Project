import { useSelector } from "react-redux";

function getUserData() {
  return useSelector((state) => {
    console.log("getUserData called" + state.currentUser);
    return state.currentUser;
  });
}

function getLoggedIn() {
  const loggedIn = useSelector((state) => {
    return state.loggedIn;
  });
  console.log("Logged in?", loggedIn);

  return loggedIn;
}

// const usersalldata = async ()=>{
//   console.log(user);
//   // user data from this api /user/getAllDetails
//  const response = await axios.post('http://localhost:8080/user/getAllDetails', {email: userEmail})
//   console.log(response.data);
//   setUserDetails(response.data);
// }

// function getUserRole() {
//   const role = useSelector((state) => state.role);
//   console.log("User Role:", role);
//   return role;
// }

export { getUserData, getLoggedIn };
