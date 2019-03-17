import React, { Component } from 'react';
import logo from './kanye.png';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quote : "burn that excel spread sheet"
    }
    
    this.updateQuote = this.updateQuote.bind(this);
  }

  componentDidMount(){
    this.updateQuote();
  }

  updateQuote(){
    setInterval(()=>fetch('https://api.kanye.rest')
                      .then((response)=> response.json())
                      .then((json) => this.setState({
                        quote: json.quote
                      })), 10000)
  }

  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.quote}
          </p>
          ~ Kanye
      </div>
    );
  }
}

export default App;
