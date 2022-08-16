import React from "react";


class HornedBeast extends React.Component{
  render (){
    return (
      <div className="hornedBeastElement">
        <h2>{this.props.title}</h2>
        <img title={this.props.title} src={this.props.imageURL} alt={this.props.description} />
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default HornedBeast;