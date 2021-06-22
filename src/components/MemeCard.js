import React from "react"

function MemeCard(props) {

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
        <div className="meme-card" style={memeStyle}>
            <li style={liStyle}>
                <h2 style={{...h2Style, ...topCapPosition}}>{props.meme.topCaption}</h2>
                <img style={imageStyle} src={props.meme.randomImage} alt="" />
                <h2 style={{...h2Style, ...bottomCapPosition}}>{props.meme.bottomCaption}</h2>
            </li>
            <button onClick={props.handleDelete}>Delete</button>
            <button onClick={props.handleEdit}>Edit</button>
        </div>
    ) 
}

export default MemeCard