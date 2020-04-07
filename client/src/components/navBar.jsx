import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {FaAlignRight} from 'react-icons/fa';
import '../styles/navBar.css'

import logo from '../images/logo.jpg'
export default class NavBar extends Component{
   
    state={
        isOpen : false
    }

    handleToggle = () =>{
        this.setState({isOpen: !this.state.isOpen})
    }
    render(){
        return(
            <div className = "navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <img src= {logo} alt="Hotel-Reservation" />
                        <button type="button" className="nav-btn">
                            <FaAlignRight className="nav-icon" 
                            onClick= {this.handleToggle} />
                        </button>
                    </div>
                    <ul className = {this.state.isOpen?"nav-links show-nav":"nav-links"}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/rooms">Rooms</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
 }