import './App.css';
import NavBar from "./components/NavBar"
import ButtonGenerator from './components/ButtonGenerator';
import { Container, Breadcrumb} from 'react-bootstrap'
import React from 'react';


function App (){
  return (
      <div className="App">
      <NavBar />
      <Container fluid="sm">
      <ButtonGenerator />
      </Container>

       
      </div>
    )
  } 
export default App;
