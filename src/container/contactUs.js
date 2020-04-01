import React, { Component } from "react";
import fire from "../fire";
import CustomNavbar from "../component/navbar";
import Footer from "../component/footer";

class ContactUs extends Component{
    constructor(props){
        super(props);
        this.state={
            message : "",
            user : "Vishesh", 
            messages:[]
        }

    }
    componentDidMount(){
        
        fire.database().ref('/messages').on('value', (snapshot)=> {         
            let messages = []
            for(let key in snapshot.val()){
             let messageObject = snapshot.val()[key]
             messages.push(messageObject)
         }
         console.log(messages)
         this.setState({messages:messages})
        });
    }
    handleChange = (event) => {
        this.setState({message: event.target.value})
    }
    handleClick =()=>{
        fire.database().ref("messages").push({
            message: this.state.message,
            user:'Vishesh'
            
        })
        this.setState({
            message:""
        })
    }
    render(){
        console.log(fire.database())

        return(
            <>
                <div>
                    <CustomNavbar history={this.props.history}/>
                    <div className="container">
                        <h2>Chat with us..</h2>
                        <Display messages={this.state.messages} name={this.state.user}/>
                        <input type="text" onChange={this.handleChange} value={this.state.message} placeholder="Enter your message"
                        style={{
                            margin:10
                        }} />
                        <button type="" onClick={this.handleClick} style={{borderRadius:10}} >send</button>
                    </div>
                    <Footer/>
                </div>
                
            </>
        )
    }
}
export default ContactUs;
const Display = (props) =>{
    return(
        <>
            <div className="container" style={{color:"black",height: 300,backgroundColor:"white",overflow:"auto"}}>
            {
                props.messages.length>0?
                <div>
                    {
                        props.messages.map((data,key)=>{
                            return(
                            <>
                            <p style={{margin:10}} key={key}>{props.name}: <span style={{backgroundColor:"white",padding:10,borderRadius:20,color:"black"}}>{data.message}</span></p>
                            <br></br>
                            </>
                            )
                        })
                    }
                </div> : <h2>loading</h2>
            }

            </div>
        </>
    )
}