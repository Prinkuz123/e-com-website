import React from 'react'
import { Card } from 'react-bootstrap'

const Body = () => {
  return (
    <div>
    <Card className="bg-dark text-white">
      <Card.Img src="/src/assets/Componenets/Pics/Richus.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title></Card.Title>
        <Card.Text style={{ fontSize: "50px", fontWeight: "bold",fontFamily:"cursive"}}>
        Baby Essential Fashion & Nursery
        </Card.Text>
        <Card.Text style={{ fontSize: "20px",fontFamily: "unset" }} >Fermentum, cursus ultrices porttitor tincidunt suscipit quam facilisis<br/> sit massa pellentesque mi quis elit elementum tristique urna</Card.Text>
      </Card.ImgOverlay>
    </Card>
    
      
    </div>
  )
}

export default Body
