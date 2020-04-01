import React , {Component} from 'react';
import CustomNavbar from "../component/navbar";
import Slide from "../component/caraousal";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import {Card} from "react-bootstrap";
import Footer from "../component/footer";
import fire from "../fire";
import * as authActions from "../entities/actions/actions";
import { connect } from "react-redux";


class Home extends Component{
    constructor(props){
        super(props)
    }
    
    componentDidMount(){
        
        
        if(localStorage.getItem('isAuth') === "false"){
            this.props.history.push("/login")
            console.log(this.props)
            
        }
        
        
    }   
    
    componentDidUpdate(){
        if(!this.props.isAuth){
            this.props.history.push("/")
        }
    }
   
    render(){
      
        
        console.log(fire.database())
       
        return(
            <>
            
            <div className="body">
            <CustomNavbar history={this.props.history}/>
                <div className="container" >
                    
                    <div className="row">
                        <div className="col-md-6">
                            <Slide/>
                        </div>
                        <div className="col-md-6">
                            
                            <Card id="card">
                            <Card.Img src="tender.jpg" alt="Card image" id="tender"/>
                            <Card.ImgOverlay>
                                <Card.Text>
                                    <br/>
                                    <br/>
                                    <p id="header">Delicate look <br/>for<br/>the most tender.</p><br/>
                                    
                                </Card.Text>
                            </Card.ImgOverlay>
                            </Card>
                           <br/>
                            <ButtonToolbar>
                            <Button variant="outline-info" id="mybtn">Book a date</Button>
                            </ButtonToolbar>  
                            
                            
                        </div>
                        
                    </div>
                    
                </div>
                <Footer/>
            </div>
            
                
                
               
            </>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        isAuth:state.isAuth
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)