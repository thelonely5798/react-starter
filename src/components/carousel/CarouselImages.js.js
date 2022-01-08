import React, {Component} from 'react'
import classes from './CarouselImages.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "animate.css/animate.min.css"; 
import Pencil from '../images/bg.png';


const CarouselImages = () => {
    return (
        <div>
            <img width="100%" height="500px"  src={Pencil}  alt="myImage"/>
            <div  className={classes.h1}>
                <h1 >Hi there, I'm Hao</h1>
            </div>
    </div>
    )
}
export default CarouselImages