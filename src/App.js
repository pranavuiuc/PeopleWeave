import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Menu from './Menu';
import Introduction from './Introduction';
import Contact from './Contact';
import Data from './Data';
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
    <ChakraProvider>
   
    <Router>
    <Menu></Menu>
    <Routes>
        <Route exact path = "/" element={<Introduction/>}></Route>
        <Route exact path = "/data" element={<Data />}></Route>
        <Route exact path = "/contact" element={<Contact/>}></Route>
      </Routes>
      </Router>
      </ChakraProvider>
      </>
  );
}

export default App;
