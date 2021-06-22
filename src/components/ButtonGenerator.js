import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import MemeCard from "./MemeCard";


class ButtonGenerator extends Component {
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
  this.handleEdit = this.handleEdit.bind(this)
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
}

handleEdit(meme){
  const filteredMemes = this.state.memesList.filter( (m) => {
      return m.id !== meme.id;
  });
  this.setState({
    topCaption: meme.topCaption,
    bottomCaption: meme.bottomCaption,
    randomImage: meme.randomImage,
    memesList: filteredMemes
  })
}
  render() {
    const {memesList} = this.state
    const {handleDelete, handleEdit} = this
    const memeComponent = memesList.map((img, index) => {
    return (<MemeCard handleDelete={handleDelete.bind(this, index)} handleEdit={handleEdit} key={img.id} index={index} meme={img}/>)
    })

    const {bottomCaption, topCaption, randomImage} = this.state
    const {handleChange, handleSubmit, handleReset} = this

    return (
      <div className="App">

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
export default ButtonGenerator;
