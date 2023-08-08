import logo from './logo.svg';
import './App.css';
import * as React from 'react'
import Button from '@mui/material/Button';
import BasicTable from './BasicTable';
import Avatar from '@mui/material/Avatar';
import avatarsrc from './links/15034403.jpeg';
import { tab } from '@mui/base/Tab';

function App() {  
  return (
    <div className="App">
      <header className="App-header">
        <tab></tab>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 1 2 3
          salih hat auch mitgemacht SVen auch
          <Button variant="contained">Hello World</Button>
        </a>

      <BasicTable></BasicTable>

      <Avatar alt="Cindy Baker" src={avatarsrc} />

      </header>

      
    </div>
  );
}

export default App;
