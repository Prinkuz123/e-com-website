import React from 'react'
import { Productdetail2 } from './Productdetails2'
import { Card,Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Footwear = () => {
  const navigate=useNavigate()
  const Footwearproducts=Productdetail2.filter((item)=>{
    return item.model==='Footwear'})
  return (
    <div>
    { Footwearproducts .map((item) => (
      <div className="d-inline-flex" key={item.id}>
        <Card
          className="shadow p-3 m-4 bg-body-tertiary rounded"
          style={{ width: "14rem" }}
        >
          <Card.Img
            className="p-2"
            style={{ height: "15rem" }}
            variant="top"
            src={item.path}
          />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>DEtails</Card.Text>
            <Button variant="primary" onClick={()=>navigate(`/View/${item.id}`)}>Shop Now</Button>
          </Card.Body>
        </Card>
      </div>
    ))}
    </div>
  )
}

export default Footwear

