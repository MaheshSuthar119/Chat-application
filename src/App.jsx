import Home from "./Pages/Home"
import styles from './App.module.css'
import NavHome from "./components/NavHome"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return(
  <div className="App">
  <Home/>
  
   {/* <NavHome/> */}
  </div>
)
}

export default App

// {/* <Router> 
// <Routes> 
//       <Route exact path="*" element={<Home/>} /> 
//       {/* <Route path="/navhome" element={<NavHome/> } />   */}
//   </Routes> */}
//  </Router> 