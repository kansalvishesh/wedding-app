import React , {Component} from "react";
import CustomNavbar from "../component/navbar";
import Content from "../products/content";
import Footer from "../component/footer";
import {Card, Button} from "react-bootstrap";

class ProductDescription extends Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props)
        let myProduct = Content.products.filter((product)=>{
            return product.id === this.props.match.params.myProductId
            
        })
        console.log(myProduct)
        return(
            <>
            
                <div style={{backgroundColor:"white"}} >
                    <CustomNavbar/>
                    <div className="container">
                      {
                          myProduct[0]?<Card style={{}}>
                          <Card.Img variant="top" src={myProduct[0].image}/>
                          <Card.Body>
                            <Card.Title>{myProduct[0].title}</Card.Title>
                            <Card.Title>{myProduct[0].price}</Card.Title>
                            <Card.Text>
                              <h5>Sold by : {myProduct[0].seller}</h5>
                            </Card.Text>
                            
                            <Card.Text>
                              {myProduct[0].description}
                            </Card.Text>
                            
                            <Button variant="primary">Buy Now</Button>
                          </Card.Body>
                        </Card>:
                        <h1>Error 404 product not found</h1>
                      }
                        
                    </div>
                    <Footer/>
                </div>
            
            
            </>
        )
    }
}
export default ProductDescription;