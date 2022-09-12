
import { configureStore } from '@reduxjs/toolkit'; //To Configure store

// import usersReducer from "./features/User"

import usersReducer from "../features/user/User"


export const store=configureStore({reducer:{users:usersReducer}}) //instance of our store
// console.log(usersReducer)
