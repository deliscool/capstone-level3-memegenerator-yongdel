import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import { Card, Button } from 'react-bootstrap'

class ButtonGenerator extends
    React.Component {
        render(){
            return <div>
        <Card className="text-center">
          <Card.Header>Generate Meme Here</Card.Header>
            <Card.Body>
            <Card.Img variant="top" src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iuYSS2JlV9UE/v1/1200x800.png" />
              <Card.Text>
              Enter text here to generate words on your meme
              </Card.Text>
              <Button variant="primary">Generate Meme</Button>
              <br></br>
              <Button variant="primary">Edit Meme</Button>
            </Card.Body>
          <Card.Footer className="text-muted"></Card.Footer>
        </Card>
      </div>
    }
    }
export default ButtonGenerator