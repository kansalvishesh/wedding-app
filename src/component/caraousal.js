import React , {Component} from 'react';
import Carousel from "react-bootstrap/Carousel";
import { Link } from 'react-router-dom';

class Slide extends Component{

    render(){
        return(
            <>
                <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100 slide-img img-responsive"
                    src="destination.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    
                   <Link to="/products"> <img 
                    className="d-block w-100 slide-img img-responsive"
                    src="dress.jpg"
                    alt="Second slide"
                    /></Link>

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 slide-img img-responsive"
                    src="cater.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </>
        );
    }
}
export default Slide;