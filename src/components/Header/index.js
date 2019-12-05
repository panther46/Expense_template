import React from 'react';
import {Link} from 'react-router-dom';




function Header(){
    return(
        <nav>
            <div className="container">
                <div className= "row">
                    <div className="col s12">
                        <div className="nav-wrapper">
                            <Link to ='/Expenses' className="brand-logo">Logo</Link>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                            
                                <li><Link to = '/Expenses'>Expenses</Link></li>
                                <li><Link to = '/new-item'>Add new item</Link></li>
                            </ul>
                        </div>
                     </div>
                </div>
            </div>
        </nav>
        
    )
}


export default Header;