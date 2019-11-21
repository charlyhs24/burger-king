import React from 'react';
import Layout from './Containers/Layout';
import './App.scss';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import HomePage from './Containers/Pages/Home-Page';
import Register from './Containers/Pages/Register/index';
import Offers from './Containers/Pages/Offers/index';
import Trending from './Containers/Pages/Trending';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={HomePage}/>
          <Route path="/signup" component={Register}/>
          <Route path="/offers" component={Offers}/>
          <Route path="/Trending" component={Trending}/>
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
