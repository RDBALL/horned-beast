import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import AnimalData from './data.json'
import './App.css';
import './Header.css';
import './Footer.css';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title: '',
      imgurl: '',
      description: ''
    }
  }

  showModalHandler = (beastTitle, beastDescription, beastPic) => {
    console.log(`${beastTitle}, ${beastDescription}, ${beastPic}`);
    this.setState({
      title: beastTitle,
      description: beastDescription,
      imgurl: beastPic,
      showModal: true
    });
  };

  hideModalHandler = () => {
    this.setState({
      title: '',
      imgurl: '',
      description: '',
      showModal: false
    });
  };

  render() {

    return (
      <>
        <Header />
        <div className="cardLayout">
          <Main
            beasts={AnimalData}
            showModalHandler={this.showModalHandler}
          />
        </div>
        <Footer />
        <Modal show={this.state.showModal} onHide={this.hideModalHandler}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.state.imgurl} alt={this.state.description} width="100%" height="100%" />
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default App;