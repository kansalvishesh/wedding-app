import React ,{Component} from "react";
import {Link} from "react-router-dom";

class Footer extends Component{
    constructor(props){
        super(props)
        
    }
    render(){
        return(
            <>
                <div style={{
                    backgroundColor:"#F48FB1",
                    margin:0,
                    color:"white",
                    padding:"5%",
                    
                    }}>
                        <div className="row">
                            <div className="col-md-4">
                                <p>KOTOVA pvt limited</p>
                                <p>Lorem ipsum dolor sit </p>
                                <p>consectetur adipiscing elit</p>
                                <p>sed do eiusmod tempor</p>
                                <p>labore et dolore magna</p>
                            </div>
                            <div className="col-md-4">
                                <p>Ut enim ad</p>
                                <p>minim veniam</p>
                                <p>quis nostrud</p>
                                <p>exercitation ullamco</p>
                                <p>laboris nisi ut aliquip</p>
                            </div>
                            <div className="col-md-4">
                                <h3>Reach out to us on</h3>
                                <br/>
                                <p>
                                    <img src="facebook.png" style={{width:"15%",margin:"5%"}}></img>
                                    <img src="twitter.png" style={{width:"15%" ,margin:"5%"}}></img>
                                    <img src="gmail.png" style={{width:"15%",margin:"5%"}}></img>
                                    
                                </p>
                            </div>
                        </div>
                        

                </div>
            
            </>
        )
    }
}
export default Footer;