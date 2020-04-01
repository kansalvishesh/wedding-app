import React, { Component } from "react";
import Content from "../products/content";
import { Row, Navbar } from "react-bootstrap";
import {Card , Col , Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomNavbar from "../component/navbar";
import Footer from "../component/footer";

class Products extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <>
            <div style={{backgroundColor:"#93B7DC"}} >
            <CustomNavbar history={this.props.history}/>
            <div className="container" style={{alignItems: "center",justifyContent: "center",flexDirection: "column"}}>
            <Row>
                {
                    Content.products.map((product)=>{
                        return(
                            <>  
                              <Col xs={3}  key={product.id}>
                                <Card style={{width:250,height:450,border:"none",margin:"2%"}}>
                                    <Card.Img variant="top" src={product.image} style={{width:250,height:250}}/>
                                    <Card.Body>
                                      <Card.Title>{product.title}</Card.Title>
                                      <Card.Title>{product.price}</Card.Title>
                                      <Card.Text>
                                      {product.description}
                                      </Card.Text>
                                      <p>
                                      <Link to={`/products/${product.id}`} ><Button style={{marginRight:"8%"}} variant="outline-info">More Info</Button></Link>
                                      <Button variant="outline-primary">Buy Now</Button>
                                      </p>
                                      </Card.Body>
                                </Card>
                              </Col>
                                
                            </>
                        )
                    })
                }
            </Row>
            </div>
            <Footer/>
            </div>
            </>
        )

        
    }
}
export default Products;

//componentWillMount(){
    //    console.log("i will mount")
    //    }
    //    componentDidMount(){
      //      console.log("i am mounted")
       // }
        //componentWillUpdate(){
          //  console.log("will update")
    //}
    //shouldComponentUpdate(){
    //    if(this.state.counter === 3){
      //      console.log("i will not update")
        //    return false
  //      }
//}
      //  return true
    //}
   // componentDidUpdate(prevProps , prevState){
     //   console.log("did update");
        //console.log("prevProps" : prevProps);
        //console.log("prevState" : prevState);
    //}
    //componentWillUnmount(){
        //console.log("unmount")

    //}

    //<Row>{
     //   Content.products.map((product , index) =>{
       //     return(
         //       <>
           //     <div className = "container">
             //   <Col md={3} key={product.id}>
                
                    
               // <Card style={{ height:'300' }}>
             //           <Card.Img variant="top" src="holder.js/100px180" />
          //              <Card.Img variant="top" src="holder.js/100px180" />
               //         <Card.Body>
                 //           <Card.Title>{product.title}</Card.Title>
                   //         <Card.Text>
                     //       {product.description}
                       ////     </Card.Text>
                           // <Link to ="" >Go somewhere</Link>
                       // </Card.Body>
                  //  </Card>
            //    </Col>
              //  </div>
                //</>
            //)
           
       // })
        
   // }
   // </Row> 