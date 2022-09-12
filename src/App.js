import "./App.css";
import Homepage from "./pages/Homepage";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Picture from "./components/Picture";
import Form from "./components/Form";
import { Typography } from "@material-ui/core";
import DisplayEmployee from "./components/DisplayEmployee";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser, getUserData } from "./features/user/User";
import { EmpData } from "./EmpData";

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {   
    // console.log("useefect getuser")  
     dispatch(getUserData()) 
    // dispatch(getUser(EmpData))

},[]); 
  return (
    <div className="App">
 <Router>
        <div className="App">
          <Typography
            gutterBottom
            variant="h3"
            align="center"
            style={{
              margin: "0 auto",
              padding: "15px 0px",
              color: "darkblue",
            }}>
            <Link
              to="/"
              style={{ paddingLeft: 40, textDecoration: "none", fontSize: 25 }}>
              Home
            </Link>

            <Link
              to="/photogallery"
              style={{ paddingLeft: 40, textDecoration: "none", fontSize: 25 }}>
              Photo Gallery
            </Link>

            <Link
              to="/employeeform"
              style={{ paddingLeft: 40, textDecoration: "none", fontSize: 25 }}>
              Add Employee
            </Link>
            <Link
              to="/employeelist"
              style={{ paddingLeft: 40, textDecoration: "none", fontSize: 25 }}>
              Employee List
            </Link>
          </Typography>
          <Routes>
            <Route exact path="/" element={<Homepage />}></Route>
            <Route exact path="/photogallery" element={<Picture />}></Route>
            <Route exact path="/employeeform" element={<Form />}></Route>
            <Route exact path="/employeelist" element={<DisplayEmployee />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
