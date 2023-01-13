import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DAppProvider } from '@usedapp/core';
import { config } from './config';
import { BrowserRouter , Routes, Route} from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<BrowserRouter>
<DAppProvider config={config}>
      <App/>
       
      
    </DAppProvider>
</BrowserRouter>

 


 
 
);