import React, { Component } from 'react'
import classes from './MyProject.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { forwardRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useImperativeHandle } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

const Images = [
    [
        require('../images/img2.jpeg'),
        require('../images/img3.jpeg'),
        require('../images/img4.jpeg'),
    ],
    [
        require('../images/img5.jpg'),
        require('../images/img6.jpg'),
        require('../images/img7.jpg'),
    ],
    [
      require('../images/img8.png'),
    ],
    [
      require('../images/img9.jpg'),
      require('../images/img10.jpg'),
      require('../images/img11.jpg'),
      require('../images/img12.jpg'),
    ],
    [
      require('../images/img15.jpg'),
      require('../images/img13.jpg'),
      require('../images/img14.jpg'),
      require('../images/img16.jpg'),
    ]
]

const ShowDemo = forwardRef((props, ref) => {
    const { images = [], type } = props
    const [modalIsOpen, setIsOpen] = useState(false);
    const getWidth = () =>{
      return type === "mobile" ? "400px" : "800px"
    }
    

    const _customStyles =  {content : {...customStyles.content, width: getWidth()}}

    
    const closeModal = () => {
        setIsOpen(false);
    }

    useImperativeHandle(ref, () => ({
        openModal: () => {
            setIsOpen(true)
        }
      }));
   return (
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={_customStyles}
        contentLabel="Example Modal"
    >
        <Carousel infiniteLoop={true} interval={3000} useKeyboardArrows={true} transitionTime={1700} emulateTouch showArrows={false} autoPlay  showStatus={false} showThumbs={false} >
            {images.map((image)=>{ 
                return (
                    <div style={{backgroundImage:`url(${image})`,height:'700px', width:'auto', backgroundSize: '100% 100%'}}>
                       
                    </div>  
                )
            })}
        </Carousel>
    </Modal>
   )
})
const MyProject = () => {
    const showDemoRef = useRef(null)
    const [imagesToShow, setImagesToShow] = useState([])
    const mobileType = 'mobile'
    const desktopType = 'desktop'
    const [type, setType] = useState(desktopType)
 

    const showDemo = (index, type) =>{ 
        setTimeout(()=>{          
          setImagesToShow(Images[index])
          setType(type)
        }, 0)
        showDemoRef.current.openModal()        
    }


    return (
        <div className={classes.box} id="myproject">
        <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
          <span className={classes.head}>My project?</span>
          <h2 className={classes.heading}>HERE ARE SOME OF MY PROJECT</h2>
          <div className={classes.MyProject}>
            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
              <div className={classes.web}>
                <h3>Locas App</h3>
                <p>The application help people review place and find the place around.</p>
                <p>My role: Backend Developer</p>
                <p>Tech: NodeJS</p>
                <a href="javascript:void(0)" onClick={() => showDemo(1, mobileType)}>View demo</a>
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
              <div className={classes.web}>
                <h3>Order way</h3>
                <p>The application help people can order food on the spot and they can payment via this app and other.</p>
                <p>My role: Web app Developer</p>
                <p>Tech: React, ElectronJS</p>
                <a href="javascript:void(0)" onClick={() => showDemo(2, desktopType)}>View demo</a>
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
              <div className={classes.web}>
                <h3>Comic Reading App</h3>
                <p>People can reading commic from app. Author can join and post there comic to app. People can reading free or paid for comic.</p>
                <p>My role: Fullstack Developer.</p>
                <p>Tech: Flutter, Golang</p>
                <a href="javascript:void(0)" onClick={() => showDemo(3, mobileType)}>View demo</a>
              </div>
            </ScrollAnimation>
          </div>
          <div className={classes.MyProject}>
          <ScrollAnimation  offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
              <div className={classes.web}>
                <h3>Dating App</h3>
                <p>Project base on blockchain with decentralized when people can chating, dating, post image to timeline without control by anything.</p>
                <p>My role: Fullstack Developer.</p>
                <p>Tech: Solidity, React native</p>
                <a href="javascript:void(0)" onClick={() => showDemo(4, mobileType)}>View demo</a>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
        <ShowDemo ref={showDemoRef} images={imagesToShow} type={type} />
      </div>
    )
}
export default MyProject;