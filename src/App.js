import React, { Component } from "react";
import './App.css';
import imgSrc from "./cat.jpg";



class App extends Component {
  state = {
    Personn: {
      fullName: "Fayza Dev4Women",
      imgSrc: imgSrc,
      profession: "student developper",
      bio: "I'm a student developper React in GoMyCode"
    },
    show: false,
    counter: 0
  };
  incrementCounter = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  componentDidMount() {
    setInterval(this.incrementCounter, 1000);
  }

  handleClick = () => this.setState({ show: !this.state.show})

  render() {
    const styleProfile ={
      color: '#E899A9', display: 'flex', margin: "100px 60px",
      justifyItems: 'center', textAlign: 'start',
    }
     
    return (
      <>

      <div className="show"style={{backgroundColor: '#87CEFA'}} >
        <h1 style={{marginLeft: '150px'}}>Cliquez ici pour voir le profil</h1>
        <h2 style={{marginLeft: '150px'}}>{this.state.counter}</h2>
        <button onClick={this.handleClick} style={{marginLeft: '150px'}}> {this.state.show ? 'Hide Profile' : 'Show Profile'}</button>
        {(this.state.show) &&
        <div style={styleProfile}>
          <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center'}}>
            <div>
              <img src={this.state.Personn.imgSrc} alt="Profile" /></div>
          </div>
          <div style={{ margin: '70px 50px' }} >
            <h1>{this.state.Personn.fullName}</h1>
            <h3>{this.state.Personn.profession}</h3>
            <h5> {this.state.Personn.bio} </h5>
          </div>
        </div>
        }
      </div>
      
      </>
    )
  }
}



export default App;
