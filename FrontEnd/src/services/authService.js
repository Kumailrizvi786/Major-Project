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

// function getUserRole() {
//   const role = useSelector((state) => state.role);
//   console.log("User Role:", role);
//   return role;
// }

export { getUserData, getLoggedIn };
