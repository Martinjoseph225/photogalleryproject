import { Card, CardContent, Grid } from '@material-ui/core';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { clearData, deleteUser } from '../features/user/User';
//  import EditIcon from '@mui/icons-material/Edit';
// import { EmpData } from "../EmpData";

const DisplayEmployee = () => {
     const dispatch = useDispatch();
    // const empList = useSelector((state) => state.users.userList);
    const { userList ,isLoading} = useSelector((state) => state.users);
  
        if(isLoading){
          return <div className="loading"><h1>Loading...</h1></div>
        }
      
  return (
    <Grid container spacing={2}> 
    {userList.map((user) => {
      return (
     <Grid item xs={12} sm={6} md={4} lg={3} key={user.id}><Card  style={{ maxWidth: 600, margin: "0 auto", padding: "20px 5px" }}>
     <CardContent>
       <Grid container spacing={1}>
         <Grid >
         <h3>{user.id}</h3>
         <h3>{user.name}</h3>
         <h3>{user.email}</h3>
         <h3>{user.address.city? `${user.address.city} ${user.address.street}`:user.address}</h3>
         {/* <Button onClick={()=>{dispatch(updateUser({id:user.id}))}} variant="outlined" startIcon={<EditIcon />}>Update</Button> */}
         <Button onClick={()=>{dispatch(deleteUser({id:user.id}))}} variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
         </Grid> 
       </Grid>
     </CardContent>
 </Card></Grid>)})}
 <Button className="cleardata" onClick={()=>{dispatch(clearData())}}>Clear Data</Button>
 </Grid>
  )
}

export default DisplayEmployee