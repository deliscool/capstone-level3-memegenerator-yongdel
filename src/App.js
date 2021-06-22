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
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            Library
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            Data
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    )
  } 
export default App;
