import React from 'react';
import ReactDOM from 'react-dom/client';

import './bootstrap.min.css'
import './index.css';
import App from './App';

import {ApolloClient, ApolloProvider} from '@apollo/client'



/*   const client = new ApolloClient({
    uri:"http://localhost:4000",
    cache :CustomInMemoryCache //Not defined yet
  }) */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
    <App />
    
  </React.StrictMode>
);



