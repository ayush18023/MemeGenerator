import Head from "./header";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import Navbar from "./components/Navbar"
import Slides from "./components/Slides";
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { blue, red } from "@mui/material/colors";
import Login from "./components/Login";
import Maymay from "./components/Maymay";
import Template from "./components/Template";
import Reddit from "./components/Reddit";
import ContactNav from "./components/ContactNav";


const theme = createTheme({
  palette:{
    primary:red,
    secondary:blue
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>  
        <Navbar/>
        <Switch>
          {/* <Route path='/' element={<New/>}></Route> */}
          <Route path='/Tools' element={<Head/>}></Route>
          <Route path='/slide' element={<Slides/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/' element={<Maymay/>}></Route>
          <Route path='/maymay/:id' element={<Template/>}></Route>
          <Route path='/template/:id' element={<Template/>}></Route>
          <Route path='/reddit' element={<Reddit/>}></Route>
          <Route path='/Contact' element={<ContactNav/>}></Route>
          
          
          
        </Switch>
      </Router>
    </ThemeProvider>
    
       
  );
}

export default App;
