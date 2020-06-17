import React from 'react';
import './App.css';

import {
  Route,
  Switch,
  withRouter
} from "react-router-dom";

import About from './About/About';
import Contacts from './Contacts/Contacts';
import Header from './Header/Header';
import Rate from './Rate/Rate';
import Footer from './Footer/Footer';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { history } = this.props
    return (
      <div>
        <Header />
        <div className="container">
          <main>
            <Switch>
              <Route history={history} exact path='/' component={Rate} />;
              <Route history={history} exact path='/about' component={About} />;
              <Route history={history} exact path='/contacts' component={Contacts} />;
            </Switch>
          </main>
        </div>

        <div className="container" id="cookie_info">
          <div className="site-content">
            <div className="well">На нашем сайте мы используем cookie для сбора информации технического характера.<br />В
            частности, для персонифицированной работы сайта мы обрабатываем IP-адрес региона вашего
            местоположения.&nbsp;<button className="btn btn-primary btn-sm">OK</button></div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withRouter(App);
