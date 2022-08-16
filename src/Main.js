import React from "react";
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render(){
    return (
      <main>
      <div className='hornedBeastMain'>
        <HornedBeast title='Horned Beast 1' imageURL='#' description='Description of Horned Beast 1'/>
        <HornedBeast title='Horned Beast 2' imageURL='#' description='Description of Horned Beast 2'/>
      </div> 
      </main>
      )
    }
  }

  export default Main;