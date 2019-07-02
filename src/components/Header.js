import React from 'react';
import {Link} from 'react-router-dom';


const Header = () =>{
    return(
        <div className='ui secondary poiting menu'>
            <Link to='/' className='item'>
            STUDENTS DATASHEET
            </Link>
            <div className='right menu'>
           <div className='item'>
           
           </div>
           
            </div>
        </div>
    );
}

export default Header;