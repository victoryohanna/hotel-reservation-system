import React, {Component} from "react";
import {Link} from 'react-router-dom';

import '../styles/roomsContainer.css';

import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import image6 from '../images/image6.jpg';

class RoomsContainer extends Component{

  render(){

    return(
      
      <div className="imageContainer">

        <div className="image">
          <Link to="/room-details">
            <img src={image1} alt=""/>
          </Link>
        </div>       
        <div className="image">
          <Link to ="/room-details">
            <img src={image2} alt=""/> 
          </Link>       
        </div>
        <div className="image">
          <Link to="/room-details">
            <img src={image3} alt=""/>
          </Link>
        </div>
        <div className="image">
          <Link to="/room-details">
            <img src={image4} alt=""/> 
          </Link>
        </div>
        <div className="image">
          <Link to="/room-details">
            <img src={image5} alt=""/>
          </Link>
        </div>
        <div className="image">
          <Link to="/room-details">
            <img src={image6} alt=""/>
          </Link>      
        </div>
        <div className="fix"></div>
      </div>
    )
  }
}

export default RoomsContainer;