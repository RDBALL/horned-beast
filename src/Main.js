
import React from 'react';
import HornedBeast from './HornedBeast.js';

class Main extends React.Component {
  render() {
    let beasts = this.props.beasts.map((beast) => {
      return (
        <HornedBeast
          title={beast.title}
          imageUrl={beast.image_url}
          description={beast.description}
          key={beast._id}
          showModalHandler={this.props.showModalHandler}
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