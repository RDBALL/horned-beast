import React from "react";
import hornedBeast1 from "./img/placeholder1.jpg"
import hornedBeast2 from "./img/placeholder2.jpg"
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render(){
    return (
      <main>
      <div className='hornedBeastMain'>
        <HornedBeast title='Horned Beast 1' imageURL={hornedBeast1} description='Description of Horned Beast 1'/>
        <HornedBeast title='Horned Beast 2' imageURL={hornedBeast2}  description='Description of Horned Beast 2'/>
      </div> 
      </main>
      )
    }
  }

  export default Main;