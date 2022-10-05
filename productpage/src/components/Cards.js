import { useState } from 'react';
import '../components/css/Cards.css';
import Product from '../components/Product';
import Item from './Item';
import Row from 'react-bootstrap/Row';

function Cards() {
  const [item, setItem] = useState(Product)
  
  return (
    <>
    <div>
    <h2 style={{margin:"20px",paddingRight:"100rem"}}>Cosmetics</h2>
   <hr/>
    

    <Row xs={1} md={2} className="g-2">
    
    {
      item['data'].map((curItem) => {
          console.log(curItem.productList)
          return curItem.productList.map((data)=>{
          
          return <Item key={data.id} {...data}/>
          
          })
        })
      }

      </Row>
      </div>
    </>
  );
}

export default Cards;