import React, { Component } from "react";
import { Card,Row,Col,Button } from "react-bootstrap";
import fire from "../fire";
import { Link } from "react-router-dom";
import * as authActions from "../entities/actions/actions";
import { connect } from "react-redux";


class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
          
                username:"",
                password:""
        }
        
    }

    handleUsername = (e) =>{
        this.setState({username: e.target.value})
        
    }
    
    handlePassword = (e) =>{
        this.setState({password: e.target.value})
        
    }
    handleLogin = () =>{
       const user={
            username:this.state.username,
            password:this.state.password
        }
        
        this.props.login(user)
        localStorage.setItem('isAuth',true)
           
    }
    componentDidUpdate(){
        if(this.props.isAuth){
            this.props.history.push("/")
        }
    }   
    
    render(){
        return(
            <>
            <div className="loginBody">
            <div className="container login">
                    <Row>
                        <Col md="6">
                            <div  className="cards" >
                                <br></br>
                                <h2>KOTOVA</h2>

                                <br/><br/>
                                <p>Welcome Back.Please login to continue</p>
                                <br/><br/>
                                <p>
                                    <input 
                                type="text" 
                                placeholder="Enter your Email Id" 
                                className="loginInputs"
                                onChange={this.handleUsername}
                                spellCheck="false"
                                    ></input>
                                </p>
                                <br/>
                                <input 
                                    type="password" 
                                    placeholder="Password" 
                                    className="loginInputs"
                                    onChange = {this.handlePassword}
                                    spellCheck="false"    
                                >    
                                </input>
                                <br/>
                                <p>
                                <Button variant="outline-primary" className="loginButtons" onClick={this.handleLogin} >Login now</Button>
                                {
                                    this.props.error? alert("INVALID CREDENTIALS")?{}:
                                       window.location.reload(): null
                                }
                                <Link to="/signup"><Button variant="outline-danger" className="loginButtons">Sign Up</Button></Link>
                                </p>
                                <p>Or</p>
                                <p>
                                <img src="facebook.png" style={{width:"7%",margin:"5%", marginLeft:"30%"}}></img>
                                <img src="gmail.png" style={{width:"7%",margin:"5%"}}></img>
                                <img src="twitter.png" style={{width:"7%",margin:"5%"}}></img>
                                </p>
                            </div>
                           
                            
                        </Col>
                        <Col md="6">
                            <div>
                            <img src="login.jpg" style={{width: "100%",maxHeight:"85vh"}}></img>
                            
                            </div>                       
                        </Col>

                    </Row>
                   
                </div>
            </div>

            
            </>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    console.log(state.loading)
    console.log(state.isAuth)
    console.log(state.error)
    return {
        loading: state.loading,
        isAuth: state.isAuth,
        error: state.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => {
            dispatch(authActions.login(user))
        }
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)