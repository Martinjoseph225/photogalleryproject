import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Form from "../../components/Form";
// import { EmpData } from "../../EmpData";

// reducers are functions for doing actions create/update/deleting store values
const url="https://jsonplaceholder.typicode.com/users"
export const getUserData = createAsyncThunk("users/getUsers", async(name,thunkAPI) => {
  try{
   const resp=await axios(url);
  return resp.data;
  }catch(error){
      return thunkAPI.rejectWithValue("something went wrong")
  }
});


export const userSlice = createSlice({
  name: "users",
  initialState: { userList : [] ,isLoading: true,},
  reducers: {
    getUser: (state, action) => {
    state.isLoading = false;
    state.userList = action.payload
    // state.userList = []
      console.log("getUser1",state.userList)
    },
    addUser: (state, action) => {
    state.userList=[...state.userList,action.payload]

      console.log("addUser","payload",action.payload,"userList",state.userList)
    },
    deleteUser: (state, action) => {
      state.userList = state.userList.filter(
        (user) => user.id !== action.payload.id
      );
    },
      updateUser: (state, action) => {
      
         console.log(action.payload)
        state.userList.map((user) => {
            if(user.id===action.payload.id){
                user.name=action.payload.name;
                 user.email=action.payload.email;
                user.address=action.payload.address
                console.log("test1",action.payload)
            }
        }) 
        console.log(state)}
        ,clearData: (state,action)=>{
          state.userList = []
        }
       
  },
  extraReducers: {
    [getUserData.pending]: (state) => {
      state.isLoading = true;
    },
    [getUserData.fulfilled]: (state, action) => {
      // console.log("test",action.payload);
      
      state.isLoading = false;
      state.userList = action.payload;
    },
    [getUserData.rejected]: (state,action) => {
      console.log(action);
      state.isLoading = false;
    },
  },
});

export const { addUser, deleteUser, getUser ,updateUser,clearData} = userSlice.actions;
export default userSlice.reducer;
