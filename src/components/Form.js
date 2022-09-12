import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector, } from "react-redux";
import { addUser, deleteUser ,updateUser} from "../features/user/User";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
const Form = () => {


  const { userList ,isLoading} = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    lastName: "",
    email: "",
    id: "",
    address: "",
  };

  const [employeeDetails, setEmployeeDetails] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setEmployeeDetails({ ...employeeDetails, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(employeeDetails);
    dispatch(
      addUser({
        id: employeeDetails.id,
        name: employeeDetails.name,
        email: employeeDetails.email,
        address: employeeDetails.address,
      })
    );
    setEmployeeDetails(initialValues);
  };
  if(isLoading){
    return <div className="loading"><h1>Loading...</h1></div>
  }

 
  return (
    <>
      <Typography
        gutterBottom
        variant="h4"
        align="center"
        style={{ margin: "0 auto", padding: "15px 0px", color: "grey" }}>
        Add Employee
      </Typography>
      <Card style={{ maxWidth: 600, margin: "0 auto", padding: "20px 5px" }}>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <Grid container spacing={1}>
              <Grid xs={12}  item>
                <TextField
                  label="Name"
                  placeholder="Enter Name"
                  variant="outlined"
                  fullWidth
                  name="name"
                  onChange={handleInputChange}
                  value={employeeDetails.name}
                  required></TextField>
              </Grid>
             
              <Grid xs={12} item>
                <TextField
                  label="email"
                  type="email"
                  placeholder="Enter email"
                  variant="outlined"
                  name="email"
                  value={employeeDetails.email}
                  onChange={handleInputChange}
                  fullWidth
                  required></TextField>
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Employee ID"
                  type="number"
                  placeholder="Enter employee ID"
                  name="id"
                  value={employeeDetails.id}
                  onChange={handleInputChange}
                  variant="outlined"
                  fullWidth
                  required></TextField>
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Address"
                  multiline
                  minRows={4}
                  placeholder="Enter address"
                  variant="outlined"
                  name="address"
                  value={employeeDetails.address}
                  onChange={handleInputChange}
                  fullWidth
                  required></TextField>
              </Grid>
              <Grid xs={12} item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </form>
      </Card>
      <Grid container spacing={2}> 
   
    {userList.map((user) => {
      return (
     <Grid item xs={12} sm={6} md={4} lg={3} key={user.id}><Card  style={{ maxWidth: 600, margin: "0 auto", padding: "20px 5px" }}>
     <CardContent>
       <Grid container spacing={1}>
         <Grid >
         <h3>{user.id}</h3>
         {user.name ?<h3>{user.name} {user.lastName}</h3>:<h3>{user.name}</h3>}
         <h3>{user.email}</h3>
         <h3>{user.address.city? `${user.address.city} ${user.address.street}`:user.address}</h3>
         <Button onClick={()=>{dispatch(updateUser({...employeeDetails,id:user.id,}))}} variant="outlined" startIcon={<EditIcon />}>Update</Button>
         <Button onClick={()=>{dispatch(deleteUser({id:user.id}))}} variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
         </Grid> 
       </Grid>
     </CardContent>
 </Card></Grid>)})}</Grid>
    </>
  );
};

export default Form;
