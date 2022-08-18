import React from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import AnimalData from './data.json'
import './styles/App.css';
import './styles/Header.css';
import './styles/Footer.css';
import { Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title: '',
      imgurl: '',
      description: '',
      filteredHornCount: AnimalData,
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

  handleSelect = event => {
    let choice = event.target.value;
    if (choice === 'oneHorn') {
      let newData = AnimalData.filter(animal => animal.horns === 1);
      this.setState({filteredHornCount: newData});
    } else
      if (choice === 'twoHorns') {
        let newData = AnimalData.filter(animal => animal.horns === 2 || animal.horns === 3);
        this.setState({filteredHornCount: newData});
      } else
      if (choice === 'overTwoHorns') {
        let newData = AnimalData.filter(animal => animal.horns === 100);
        this.setState({filteredHornCount: newData});
      } else {
        this.setState({
          filteredHornCount: AnimalData
        })
      }
  }

  render() {

    return (
      <>
        <Header />
        <Form className="dropDownFilter">
            <Form.Label >Filter the gallery by number of horns</Form.Label>
            <Form.Select
              name="select"
              onChange={this.handleSelect}>
              <option value="all">All Horned Beasts</option>
              <option value="overTwoHorns">Beasts with more than 2 horns</option>
              <option value="twoHorns">Beasts with 2 horns</option>
              <option value="oneHorn">Beasts with 1 horn</option>
            </Form.Select>
          </Form>
        <div className="cardLayout">
          <Main
            beasts={this.state.filteredHornCount}
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