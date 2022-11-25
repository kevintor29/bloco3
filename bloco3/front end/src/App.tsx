import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid } from '@material-ui/core';
import Home from './pagina/home/Home';
import Navbar from './estaticos/navbar/navbar';
import Footer from './estaticos/footer/footer';
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { Login } from '@mui/icons-material';

function App() {
  return (
   <Router>

     <Navbar/>
     <Routes>
     <Route path='/' element={ <Login/>}/>
      <Route path='/home' element={ <Home/>}/>
     </Routes>
    
     <Footer/>
   </Router>
  ); {/* <Grid container spacing={3}>
    <Grid item xs={12}>
      <Home/>
    </Grid>
    <Grid item xs={12} sm={6}>
    <Home/>
    </Grid>
    <Grid item xs={12} sm={6}>
    <Home/>
    </Grid>
    <Grid item xs={12} sm={3}>
    <Home/>
    </Grid>
    <Grid item xs={12} sm={3}>
    <Home/>
    </Grid>
    <Grid item xs={12} sm={3}>
    <Home/>
    </Grid>
    <Grid item xs={12} sm={3}>
    <Home/>
    </Grid>
   </Grid> */}
}

export default App;
