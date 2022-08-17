
import React from 'react';
import HornedBeast from './HornedBeast.js';

class Main extends React.Component {
  render() {
    let beasts = this.props.beasts.map((beast, index) => {
      return (
        <HornedBeast
          title={beast.title}
          imageUrl={beast.image_url}
          description={beast.description}
          key={index}
          />
      )
    });
    return (
      <>
        {beasts}
      </>
    );
  }
}
  
  export default Main;