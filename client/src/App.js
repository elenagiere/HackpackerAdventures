import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Layout from './components/Layout.jsx';
import LandingPage from './components/LandingPage.jsx';
import About from './components/About.jsx';
import Trips from './components/Trips.jsx';
import Photography from './components/Photography.jsx';
import Contact from './components/Contact.jsx';
import AddTripForm from './components/AddTripForm.jsx';
import Destination from './components/Destination.jsx';
import MainHeader from './components/MainHeader.jsx';
import Expenses from './components/Expenses.jsx';
import Health from './components/Health.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

require('./scss/styles.scss');

class App extends Component {
  render() {
    const blogName = "Hackpacker Adventures"
    return (
      <Router>
        <div className="App">
          <Layout>
            <ScrollToTop>
              <Route exact path="/" component={LandingPage}/>
              <Route path="/mainHeader" component={MainHeader} />
              <Route path="/home" component={LandingPage} />
              <Route path="/about" component={About} />
              <Route path="/trips" component={Trips} />
              <Route path="/photography" component={Photography} />
              <Route path="/expenses" component={Expenses} />
              <Route path="/health" component={Health} />
              <Route path="/contact" component={Contact} />
              <Route path="/addTripForm" component={AddTripForm} />
              <Route path="/destination/:title/:date/:imgName/:photoUrls/:textFile/:summaryText/:videoId" component={Destination} /> 
            </ScrollToTop>
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
