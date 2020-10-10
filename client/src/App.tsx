import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import JokesPage from './pages/dadJokes'
import { Container } from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <JokesPage />
      </Container>
    </div>
  );
}

export default App;
