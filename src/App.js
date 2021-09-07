import React from 'react'; 
import './App.css';
import Menu from './Components/Menu'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Footer from './Components/Footer'
import Header from './Components/Header'
import './loader.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path='/home' component={Menu}></Route>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/sign_up' component={SignUp}></Route>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;