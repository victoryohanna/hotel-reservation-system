import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Banner from './banner';

class NotFound extends Component {
    state = {  }
    render() { 
        return ( 
            <div className ="error">
               
              <Banner title="404" subtitle="Page not found">
                    <Link to='/' className="btn-primary">
                         Return Home                     
                    </Link>
               </Banner>
            </div>
         );
    }
}
 
export default NotFound;
