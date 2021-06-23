import React, {Component} from "react"

class MemeCardEditor extends Component {
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
        this.saveMeme = this.saveMeme.bind(this)
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
    saveMeme(e) {
        e.preventDefault()
        let {id} = e.target
        id = Number(id)
        console.log(`FROM MEMECARD'S saveMeme:\n\nid: ${id}\ntopCaption: ${this.state.topCaption}\nbottomCaption: ${this.state.bottomCaption}`)
        this.props.saveEditMeme(id, this.state.topCaption, this.state.bottomCaption, this.state.editMode)
        this.setState(prevState => {
            return {
                editMode: !prevState.editMode
            }
        })
    }

    export default MemeCardEditor