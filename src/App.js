import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import ScrollToTop from './components/Layout/ScrollToTop';

import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router basename="/">
      	<ScrollToTop>
        	<Layout/>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
