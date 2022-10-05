import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../components/css/Cards.css';

var arr = [];
function Item({name,price}) {

    const addedCard = ()=>{
        arr.push(name,price);
        console.log(arr);
        console.log(name,price);
        // alert("Item Added to card")
    }

    const removeCard = ()=>{
        arr.pop(name)
        arr.pop(price)
        console.log(arr);
        console.log(name,price)
    }

  return (
    <>
        
        <Col>
          <Card style={{ width: '30rem'}}>
            <Card.Body>
            <Card.Title>Name : {name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Price : {price}</Card.Subtitle>

            <Card.Link href="#"><button className='btn btn-primary' onClick={addedCard}> Add to Cart </button></Card.Link><br/><br/>

            <Card.Link href="#"><button className='btn btn-primary' onClick={removeCard}> Remove from Card</button></Card.Link>
            </Card.Body>
          </Card>
        </Col>
   </>
    

   
  )
}

export default Item
