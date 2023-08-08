import logo from './logo.svg';
import './App.css';
import * as React from 'react'
import Button from '@mui/material/Button';
import BasicTable from './BasicTable';
import Avatar from '@mui/material/Avatar';
import avatarsrc from './links/15034403.jpeg';
import { Tab } from '@mui/base/Tab';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { Tabs } from '@mui/base/Tabs';
npm install @mui/base

function App() {  
  return (
    <div className="App">
      <header className="App-header">

      <Tabs>
      <TabsList>
        <Tab>{/* tab one */}</Tab>
        <Tab>{/* tab two */}</Tab>
      </TabsList>
        <TabPanel>{/* panel one */}</TabPanel>
        <TabPanel>{/* panel two */}</TabPanel>
    </Tabs>


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
                    <Button variant="contained" href="#">Hello World</Button>
        </a>

      <BasicTable></BasicTable>

      <Avatar alt="Cindy Baker" src={avatarsrc} />

      </header>

      
    </div>
  );
}

export default App;
