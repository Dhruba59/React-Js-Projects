import React from 'react';
import BurgerBuilder from './containers/BurgerBuilder/burgerBuilder';
import Layout from './components/layouts/layout';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <BurgerBuilder />      
    </Layout>
    </BrowserRouter>
    
  );
}

export default App;
