import React, {Component} from "react"
import Meme from "./Meme"
import MemeForm from "./MemeForm"
import "../styles.css"

class MemeLogic extends Component {

         state = {
            topCaption: "",
            bottomCaption: "",
            randomImage: "",
            imageSrc: [],
            memesList: []
        }
    componentDidMount() {
        fetch(`https://api.imgflip.com/get_memes`)
        .then(res => res.json())
        .then(values=> {
            const {memes} = values.data
            console.log(memes)
            this.setState(
                {
                    imageSrc: memes,
                    randomImage: memes[Math.floor(Math.random() * memes.length)].url
                })
        })
        .catch(err => console.log(err))
    }
    randomImg = () => {
        this.setState(prevState => {
            return {
                randomImage: prevState.imageSrc[Math.floor(Math.random() * prevState.imageSrc.length)].url
            }     
        })
    }
    addMeme = (newMeme) => {
        console.log("add meme was called")
        this.setState(prevState => {
            return {
                memesList: [...prevState.memesList, newMeme]
            }
        })
    }
    editMeme = (editMeme, id) => {
            let newArray = this.state.memesList.map((meme, index) => index === id ? editMeme : meme)
                this.setState({memesList: [...newArray]})
    }
    handleChange = e => {
            const {name, value} = e.target
            this.setState({[name]: value})
        }
    deleteMeme = index => {
        console.log(`index: ${index} removed`)
            const newMemesList = [...this.state.memesList]
            newMemesList.splice(index, 1)
                this.setState({
                    memesList: newMemesList
            })
    }
    render() {
        const {memesList} = this.state
        const memeComponent = memesList.map((meme, index) => 
        <Meme 
        delEvent={this.deleteMeme.bind(this, index)} 
        key={Math.ceil(Math.random() * meme.id + 1)} 
        id={index}
        meme={meme}
        submit={this.editMeme}
        />)
        
        const {randomImage} = this.state
        return (
            <div className="main">
                <MemeForm 
                    submit={this.addMeme}
                    randomImage={randomImage}
                    randomImg={this.randomImg}
                />
                <div className="meme-card-container">
                    {memeComponent}
                </div>
            </div>
        )
    }
}

export default MemeLogic
