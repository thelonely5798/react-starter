import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css"; 

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                    <span  className={classes.head}>ABOUT ME</span>
                    <h2 className={classes.heading}>Who Am I?</h2>
                    <div className={classes.About}>
                        <p> My name is Hao 22 years old. I com from Tay Ninh province. I have using computer when i got 4 years old and at that moment i realize that my life will belong to it. <br/> I have finished my education at TCU university in July 2020. During that time i have job with internship role as Web Developer Parttime. Javascript is my favorite language but i can working with other example Python. I ussually learning new technology and read comic in my free time.</p>
                        <p>Below is few infomation about me thank's for reading </p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;