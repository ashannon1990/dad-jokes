import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Card from './components/Card'
import { Container } from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Card
          joke="Stupid joke"
          punchline="Stupid punchline"
        />
      </Container>
    </div>
  );
}

export default App;
