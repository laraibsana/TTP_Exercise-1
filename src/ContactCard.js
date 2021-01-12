import React, { Component } from 'react'

class ContactCard extends Component{
    constructor(props){
        super(props);
   
    }
    render() {
      return(
        <div className= "person">
          <p>Name: {this.props.name}</p>
          <p> Email: {this.props.email}</p>
          <p>Phone Number:{this.props.phone}</p>
        </div>);
    }
  }

export default ContactCard;