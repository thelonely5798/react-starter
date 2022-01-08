import React, { Component } from 'react';
import classes from './Education.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
    render() {
        return (
                <div className={classes.box} id="education">
                    <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2' animateOnce="true" initiallyVisible ={true}>
                     <span  className={classes.head}>MY JOURNEY</span>
                    <section className={classes.container}>
                        <div className={classes.container_content}>
                            <div className={classes.row}>
                                <div className={classes.row_md_12}>
                                    <div className={classes.timeline_centered}>
                                    <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={classes.timeline_icon} >
                                                <MdSchool />
                                                </div>
                                                <div className={classes.label}>
                                                <h2 >Tcu University <span>2016-2020</span></h2>
                                                <p>I have started learn from here from 2016 and finished my education in 2020.</p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                       <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`} >
                                                    <MdWork />     
                                                </div>
                                                <div className={classes.label}>
                                                <h2 >Internship at Mitech Center <span> Obtober 2018- July 2020</span></h2>
                                                <p>When year 2 i have get first job as internship web developer at Mitech Center. I learning and working with VueJS and Nodejs in here.</p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                        <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                                            <article>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`} >
                                                    <MdWork />     
                                                </div>
                                                <div className={classes.label}>
                                                <h2 >Python Fresher at Rakumo <span> December 2020- Present</span></h2>
                                                <p>When i finished my education. My first job i get is Fresher Python at Rakumo. I learning and working with Django and  Angular in here. </p>
                                                </div>
                                                <div className={classes.timeline_entry_inner}><div  className={classes.timeline_icon_3||classes.color_none}></div></div>
                                            </article>
                                        </ScrollAnimation>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    </ScrollAnimation>
                </div>
     
        )
    }
}

export default Education;
