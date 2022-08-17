import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {
  
  render() {
    return (
      <Modal
        onHide={this.props.hideModalHandler}
        show={this.props.showModal}
        >
        <Modal.Header>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img 
            src={this.props.imageUrl} 
            alt={this.props.description} 
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark">Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default SelectedBeast;