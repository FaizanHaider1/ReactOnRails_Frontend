import React from 'react';
import './App.css';
import Home from './Components/Home'
import Products from './Components/Products'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Error_404 from './Components/Errors/404'
import './loader.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router forceRefresh= {true}>
        <div className="App m-auto">
          <Header />
          <Switch>
            <Route exact path='/' component={Home}></Route>
            {localStorage.getItem('user_name') && <Route exact path='/products' component={Products}></Route>}
            <Route path='/login' component={Login}></Route>
            <Route path='/sign_up' component={SignUp}></Route>
            <Route component={Error_404}></Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;