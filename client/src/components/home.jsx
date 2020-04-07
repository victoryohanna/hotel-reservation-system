import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "../styles/mainPage.css"; 

import Services from './services'
import Banner from './banner'

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="main">
            <Banner title="Luxurious Rooms" subtitle="Deluxe Rooms for a minimum of $150">
                <Link to ="/rooms" className="btn-primary">
                    Our Rooms
                </Link>
            </Banner>
        </div>
        <Services />
      </>
    );
  }
}

export default Home;  
