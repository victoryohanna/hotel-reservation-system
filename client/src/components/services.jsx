import React, {Component} from 'react';

import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import '../styles/services.css';

//import Title from './title';

class Services extends Component {
    state = { 
        services : [
            {
                icon : <FaCocktail />,
                title : "Free Cocktail",
                info: " Lorem ipsum dolor sit amet, consectetur \
                        adipisicing elit. Dolorum, aliquid."
            },
            {
                icon : <FaHiking />,
                title : "Endless Hiking",
                info: " Lorem ipsum dolor sit amet, consectetur \
                        adipisicing elit. Dolorum, aliquid."
            },
            {
                icon : <FaShuttleVan />,
                title : "Free Shuttle",
                info: " Lorem ipsum dolor sit amet, consectetur \
                        adipisicing elit. Dolorum, aliquid."
            },
            {
                icon : <FaBeer />,
                title : "Strongest Beer",
                info: " Lorem ipsum dolor sit amet, consectetur \
                        adipisicing elit. Dolorum, aliquid."
            }
        ]
     }
    render() { 
        return ( 
            <section className="services">
                <h3>Our Services</h3>
                <div className="services-center">
                    {this.state.services.map((item, index)=>{
                        return <article key={index} className="services">
                            <span> {item.icon} </span>
                            <h6> {item.title} </h6>
                            <p> {item.info} </p>
                        </article>
                    })}
                </div>
            </section>
         );
    }
}
 
export default Services;