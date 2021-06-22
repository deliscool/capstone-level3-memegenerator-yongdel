import React, {Component} from 'react'
import ButtonGenerator from './ButtonGenerator'

class MemeCard extends Component {
    constructor(props) {
        super(props)
         this.state= {
            id: this.props.id,
            editMode:false,
            bottomCaption: this.props.bottomCaption,
            topCaption: this.props.topCaption,
        }

        this.editToggle = this.editToggle.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
    }

    editToggle(e) {

        this.setState(prevState => {
            return {
                editMode: !prevState.editMode
            }
        })
    }   

    handleEdit(e) {
            const { name, value } = e.target
            this.setState({ [name]: value })
    }


    render(){

    const memeStyle = {
        border: "2px solid black",
        display: "grid",
        position: "relative"
    }

    const imageStyle = {
        width: "100%",
        height: "auto",
    }

    const h2Style = {
        textTransform: "uppercase",
        color: "white",
        textShadow: "1px 1px 6px black",
        left: "50%",
        transform: "translateX(-50%)",
        textAlign: "center",
        width: "80%",
        fontSize: "1.3em"
    }

    const topCapPosition = {
        top: "0",
        position: "absolute"
    }

    const bottomCapPosition = {
        bottom: "0",
        position: "absolute"
    }

    const liStyle = {
        listStyle: "none"
    }

    return (
        
        <div>
            {this.state.editToggle? 
        <div>
        <ButtonGenerator
        key={this.props.key}
        randomImage={this.props.randomImage}
        topCaption = {this.props.topCaption}
        bottomCaption= {this.props.bottomCaption} 
        
        />

        </div>
        :
        <div className="meme-card" style={memeStyle}>
            <li style={liStyle}>
                <h2 style={{...h2Style, ...topCapPosition}}>{this.props.meme.topCaption}</h2>
                <img style={imageStyle} src={this.props.meme.randomImage} alt="" />
                <h2 style={{...h2Style, ...bottomCapPosition}}>{this.props.meme.bottomCaption}</h2>
            </li>

            <button onClick={this.props.handleDelete}>Delete</button>
            <button onClick={this.props.editToggle} key={this.props.index}>Edit</button>
        </div>
    }</div>)}}
        
export default MemeCard