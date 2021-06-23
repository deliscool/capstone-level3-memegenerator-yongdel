import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.css'



class MemeForm extends Component {
    
    state = {
        topCaption: this.props.topCaption || "",
        bottomCaption: this.props.bottomCaption || "",
        randomImage: this.props.randomImage
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }
    handleSubmit =(e) => {
        e.preventDefault()
        const memeObj = {
            topCaption: this.state.topCaption,
            bottomCaption: this.state.bottomCaption,
            randomImage: this.props.randomImage
        }
        this.props.submit(memeObj, this.props.id)
        if(this.props.isEdit) this.props.toggleEdit()  
        
        // this.props.randomImg ? this.props.randomImg() : do nothing
        this.props.randomImg && this.props.randomImg()
        this.setState({
            topCaption: "",
            bottomCaption: ""
        })
    }

    render() 
    {
        return (
            <div>
                <div className="meme-container">
                    <img src={this.props.randomImage} alt="" />
                    <h2 className="top-cap">{this.state.topCaption}</h2>
                    <h2 className="bottom-cap">{this.state.bottomCaption}</h2>
                </div>
                <form className="meme-caption" onSubmit={this.handleSubmit}>
                        <input
                        type="text"
                        name="topCaption"
                        placeholder="Top Caption"
                        value={this.state.topCaption}
                        onChange={this.handleChange}
                        />
                        <input
                        type="text"
                        name="bottomCaption"
                        placeholder="Bottom Caption"
                        value={this.state.bottomCaption}
                        onChange={this.handleChange}
                        />
                        <button className="button-gen" type="submit">Add Meme</button>
                </form>
            </div>
        )
    }
}

export default MemeForm