import React , {Component} from "react";
import axios from "axios";
import { connect } from "react-redux";

class List extends Component{
   async componentDidMount(){
        try{
            const response = await axios.get("https://randomuser.me/api/?results=500")
        }catch(err){

        }
    }
    
    render(){
        return(
            <>

            </>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        users:state.users
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(List)