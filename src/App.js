import Home from './pages/Home';
import { Component } from 'react';
import { BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import './index.css';
export default class App extends Component{
  render(){
    
    return(
        <Router>
          <Switch>
            <Route path='/' component = {Home}/>
          </Switch>
        </Router>
    );
  }
}