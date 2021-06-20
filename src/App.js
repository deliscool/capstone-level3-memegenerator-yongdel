import './App.css';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import React, {Component} from 'react';
import MemeCard from "./MemeCard"

class App extends Component {
  constructor() {
    super()
    this.state = {
      topCaption: "",
      bottomCaption: "",
      randomImage: "",
      imageSrc: [],
      memesList: []
  }
  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
  this.handleReset = this.handleReset.bind(this)
  this.handleDelete = this.handleDelete.bind(this)
}

componentDidMount() {
  fetch(`https://api.imgflip.com/get_memes`)
  .then(res => res.json())
  .then(data => {
      const {memes} = data.data
      this.setState(
          {
              imageSrc: memes,
              randomImage: memes[Math.floor(Math.random() * memes.length)].url
          })
  })
  .catch(err => console.log(err))
}
handleChange = e => {
  e.preventDefault()
  const {name, value} = e.target
  this.setState({
      [name]: value
  })
}
handleReset = e => {
  e.preventDefault()
  this.setState({
      topCaption: "",
      bottomCaption: ""
  })
}
handleSubmit = e => {
  e.preventDefault()
  const getRandomImage = this.state.imageSrc[Math.floor(Math.random() * this.state.imageSrc.length)].url
  const {topCaption, bottomCaption, randomImage} = this.state
  const newMeme = {
      bottomCaption: bottomCaption,
      topCaption: topCaption,
      randomImage: randomImage
  }
  this.setState(prevState => ({
      memesList: [...prevState.memesList, newMeme]
  }))
  this.setState({
      randomImage: getRandomImage
  })
  this.setState({
      topCaption: "",
      bottomCaption: ""
  })
}
handleDelete = index => {
      const newMemesList = [...this.state.memesList]
      newMemesList.splice(index, 1)
          this.setState({
              memesList: newMemesList
      })
=======
import NavBar from "./components/NavBar"
import ButtonGenerator from './components/ButtonGenerator';
import MemeForm from './components/MemeForm'
import MemeGroup from './components/MemeGroup';
import { Container,Row, Col, Breadcrumb} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container fluid="sm">
        <Row>
            <Col>
              <ButtonGenerator />
              </Col>
        </Row>
        <Row>
          <Col>
              <MemeForm />
          </Col>
        </Row>
        <Row>
              <MemeGroup />
        </Row>
      </Container>
      <Breadcrumb>
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
    Library
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>

    </div>
  );
>>>>>>> 6abad897c33fafccc9429316778784a80b5ef9a3
}

  render() {
    const {memesList} = this.state
    const {handleDelete, handleEdit} = this
    const memeComponent = memesList.map((img, index) => {
    return (<MemeCard handleDelete={handleDelete} handleEdit={handleEdit} key={img.id} index={index} meme={img}/>)
    })

    const {bottomCaption, topCaption, randomImage} = this.state
    const {handleChange, handleSubmit, handleReset} = this

    return (
      <div className="App">
        <Navbar bg="dark" variant="dark"
          sticky="top" expand="sm" collapseOnSelect>
          <Navbar.Brand>
            <img src={logo} width="40px" height="40px" />{' '}
            Logo
          </Navbar.Brand>

          <Navbar.Toggle className="coloring" />
          <Navbar.Collapse>
            <Nav>
              <NavDropdown title="Products">
                <NavDropdown.Item href="#products/tea">Tea</NavDropdown.Item>
                <NavDropdown.Item href="#products/coffee">Coffee</NavDropdown.Item>
                <NavDropdown.Item href="#products/chocolate">Chocolate</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#products/promo">Promo</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#about-us">About Us</Nav.Link>
              <Nav.Link href="#contact-us">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Navbar>

        <div className="content">
          <div className="meme-container">
            <img src={randomImage} alt="" />
            <h2 className="top-cap">{topCaption}</h2>
            <h2 className="bottom-cap">{bottomCaption}</h2>
        </div>
        <form className="meme-caption" onSubmit={handleSubmit}>
            <input
            type="text"
            name="topCaption"
            placeholder="Top Caption"
            value={topCaption}
            onChange={handleChange}
            />
            <input
            type="text"
            name="bottomCaption"
            placeholder="Bottom Caption"
            value={bottomCaption}
            onChange={handleChange}
            />
            <button className="button-gen">Generate Meme</button>
            <button className="button-reset" onClick={handleReset}>Reset</button>
        </form>
          <div className="meme-card-container">
              {memeComponent}
          </div>
        </div>
      </div>
    )
  } 
}
export default App;
