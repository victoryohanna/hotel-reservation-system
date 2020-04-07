import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../styles/rooms.css';

import Banner from './banner';
import RoomsContainer from './roomsContainer';

class Room extends Component {
    state = {  }
    render() { 
        return (  
            <>
                <div className="roomsMain">
                    <Banner title="our rooms">
                        <Link to="/" className="btn-primary">return home</Link>
                    </Banner>
                    
                </div>
                <RoomsContainer />
            </>
         );
    }
}
 
export default Room;