import ContactCard from './ContactCard'
import React, { Component } from 'react'
import './App.css';


function App(){
  return (
    <div>
    <ContactCard name="Samantha" phone="123-456-7890" email="samantha@gmail.com"/><br/>
    <ContactCard name="Jasmine" phone="111-222-3333" email="Jasmine@hotmail.com"/><br />
    <ContactCard name="Robert" phone="333-444-2345" email="robert@something.com"/><br />
    </div>
  );
}

export default App;
