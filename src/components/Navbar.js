import React from 'react'
import '../App.css';
import { FaAlignJustify,FaSearch,FaEllipsisH } from "react-icons/fa";


function Navbar() {
    return (
        <div className="d-flex flex-column" style={{paddingTop:'3px'}}>
            <div className="=d-flex justify-content-start p-2">
                <FaAlignJustify style={{color:'white',fontSize:'30px'}}/>
                <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" style={{width:'130px' ,marginLeft:'2%' }}></img>
                <FaSearch style={{color:'white',fontSize:'20px',float:'right',marginRight:'2%',marginTop:'7px'}}/>
                <FaEllipsisH style={{color:'white',fontSize:'30px',float:'right',marginRight:'2%',marginTop:'5px'}}/> 
            </div>
            
        </div>
    )
}
export default Navbar;
