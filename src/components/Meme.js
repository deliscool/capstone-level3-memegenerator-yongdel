import React, { Component } from "react"
import MemeForm from "./MemeForm"

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
const bttnStyle = {
    width: "100%",
    height: "30px",
    marginTop: "20px"
}

class Meme extends Component {

    state = {
        isEdit: false
    }
    toggleEdit = () => {
        this.setState(prevState=> ({isEdit: !prevState.isEdit})
        )}

    render() {
        return (
                <div className="meme-card" style={memeStyle}>
                     {this.state.isEdit 

                     ?
                        <div>
                            <MemeForm
                            randomImage={this.props.meme.randomImage}
                            topCaption={this.props.meme.topCaption}
                            bottomCaption={this.props.meme.bottomCaption}
                            submit={this.props.submit}
                            id={this.props.id}
                            isEdit={this.state.isEdit}
                            toggleEdit={this.toggleEdit}
                            />
                            <button onClick={this.toggleEdit}>Cancel Edit</button>
                        </div>

                    :

                    <div>
                        <li style={liStyle}>
                            <h2 style={{...h2Style, ...topCapPosition}}>{this.props.meme.topCaption}</h2>
                            <img style={imageStyle} src={this.props.meme.randomImage} alt="" />
                            <h2 style={{...h2Style, ...bottomCapPosition}}>{this.props.meme.bottomCaption}</h2>
                        </li>
                        <button style={bttnStyle} onClick={this.props.delEvent}>Delete</button>
                        <button style={bttnStyle} onClick={this.toggleEdit}>Edit Meme</button>
                    </div>
                    }               
                </div>
        )
    }
}



export default Meme