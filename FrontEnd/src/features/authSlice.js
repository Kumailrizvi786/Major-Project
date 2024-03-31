// slices = reducers ka bahut bada collection
// reducers = functions jo state ko manipulate karte hai
// unique id ke lie uuid ya nanoid use karna
import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  currentUser: null,
  loggedIn: false,
  role: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // isme properties aur function define karenge
    login: (state, action) => {
      // state hota hai current state | jo ki ek object hai aur usme status aur userData hai
      // action hota hai jo ki ek object hai aur usme type aur payload hai
      state.loggedIn = true;
      state.role = action.payload.role;
      state.currentUser = action.payload;
      // console.log("Current User Is ",currentUser)
    },
    // reducers
    // reducers are functions that manipulate the state
    // reducers are called by dispatching actions
    // actions are objects that contain the type of action and the payload
    // actions are dispatched by calling
    logout: (state, action) => {
      state.loggedIn = false;
      state.currentUser = null;
      state.role = null;
      // state.role = "";
    },
  },
});

export const { login, logout } = authSlice.actions;
// export actions
export default authSlice.reducer;
