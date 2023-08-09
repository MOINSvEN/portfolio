import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { Button } from '@mui/material';
// import { Button } from '@mui/base/Button';
import BasicTable from './BasicTable';
import Avatar from '@mui/material/Avatar';
import avatarsrc from './links/15034403.jpeg';
import Navigation from './Tabs';
import BasicButton from  './Button';
import MediaPage from './mediapage';

function App() {  
  return (
    <div className="App">
      <header className="App-header">
      <Navigation></Navigation>


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
          <p>Salih hat auch mitgemacht Sven auch</p>
            <BasicButton>Salih baut Buttons mit Klötzchen</BasicButton>
            <Button variant='contained'>Next try</Button>
        </a>
    <br/>
      <BasicTable>Test</BasicTable>

      <Avatar alt="Cindy Baker" src={avatarsrc} />

      <MediaPage></MediaPage>    

      </header>

      
    </div>
  );
}

export default App;
