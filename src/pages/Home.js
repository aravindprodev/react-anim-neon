import {Component} from 'react';
import {Body} from '../utils/styled';
import Button from '../components/Button.jsx';
import'./css/Home.css';

export default class Home extends Component{
  constructor(props) {
    super(props);
    document.title = "Home";
    this.state = {
      clicks:0
    };
  }
  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
    
         
    render(){
        
     return(
      <Body>
          <p>A <span className="h1">React Project </span>
          <span className="h2">With Neon Button and </span>
          <span className="h3">Animated Text</span>
          </p>
          <Button classname="first" onPress={this.DecreaseItem}
          btn="#e40017" sbtn="#000" text="Decrease"/>
          <Button classname="sec" onPress={this.IncrementItem} 
          btn="#fce38a" sbtn="#000" text="Increase"/>
          <p1>{this.state.clicks}</p1>
      </Body>
     );
    }
}