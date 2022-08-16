
import React from 'react';
import HornedBeast from './HornedBeast.js';
import AnimalData from './data.json';

class Main extends React.Component {
  render() {
    let hornedBeastsArray = [];
    AnimalData.forEach((beast, idx) => {
      hornedBeastsArray.push(
        <HornedBeast
          title={beast.title}
          imageUrl={beast.image_url}
          description={beast.description}
          key={idx}
          />
      )
    });
    return (
      <>
        {hornedBeastsArray}
      </>
    );
  }
}
  
  export default Main;