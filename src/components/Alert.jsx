import React, { Component } from "react";

//a subclass to the Component class in react. It will also be a child compoennt to <App/>

class Alert extends Component {
  constructor(props){
    //The super function calls the parent class's constructor.
    super(props);
    this.color = null;
    this.bgColor = null;
  }
//dynamically rendering a CSS style into the style attribute of <p> 
  getStyle = () => {
    return {
      color: this.color,
      backgroundColor: this.bgColor,
      borderWidth: "2px",
      borderStyle: "solid",
      fontWeight: "bolder",
      borderRadius: "7px",
      borderColor: this.color,
      textAlign: "center",
      fontSize: "12px",
      margin: "10px 0",
      padding: "10px"
    }
  };

  //use render() to create an instance of the Alert class object
  render(){
    return (
      <div className='Alert'>
        <p style={this.getStyle()}> {this.props.text}</p>
      </div>
    )
  }
}


// subclasses of the Alert class- each has a specific color property

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'rgb(0, 0, 255)';
    this.bgColor = 'rgb(220, 220, 255)';
  }
}

class WarningAlert extends Alert {
  constructor(props){
    super(props);
    this.color = 'orange'
  }
}

class ErrorAlert extends Alert {
  constructor(props){
    super(props);
    this.color = 'red';
  }
}



export {InfoAlert, WarningAlert, ErrorAlert};

