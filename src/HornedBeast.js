import React from 'react';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
    };
  }

  handleClick = () => {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  render() {
    return (
      <>
      <Card 
      border="light" 
      bg="primary"
      text='light'
      style={{ width: '22rem', margin: '10px', textAlign: 'center'}}>
        <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Header>Click the Picture if you like this Animal! <br></br> {this.props.title} has {this.state.clicks} likes</Card.Header>
        <Card.Img
          src={this.props.imageUrl}
          alt={this.props.description}
          title={this.props.title}
          onClick={this.handleClick} />
        <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
        </Card>
      </>
    );
  }
}

export default HornedBeast;