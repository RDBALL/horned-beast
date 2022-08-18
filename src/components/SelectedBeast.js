import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
  
  render() {
    return (
      <Modal
      border="primary" 
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
      </Modal>
    )
  }
}

export default SelectedBeast;