import React from 'react';
import './menubar.css';
import { Link } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import { connect } from 'react-redux';


const Menubar = ({children}, props) => {
    alert(Object.keys(props))

    return (
        <div className="min-h-screen">
            <div className="menubar xs:w-1/3 sm:w-1/3 lg:w-1/5" id="menubar">
                <div>
                    <h1>Menubar</h1>
                </div>
                <hr/>
                <div className="flex flex-col menu">
                    { props.user &&<div>
                        <Link to="/items"><h1 className="menu-item">Items</h1></Link>
                        <Link to="/invoice"><h1 className="menu-item">Invoice</h1></Link>
                        <Link to='/'><span className="flex justify-center items-center"><FaSignOutAlt/><h1 className="menu-item">{props.user}</h1></span></Link>
                        </div>
                    }

                    { !props.user && <div>
                        <Link to="/login"><h1 className="menu-item">Login</h1></Link>
                        <Link to="/registration"><h1 className="menu-item">Registration</h1></Link>
                        </div>
                    }
                </div>
            </div>
            <div className="mx-auto">
                {children}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
      user: state
    }
  }
  
  export default connect(mapStateToProps, null)(Menubar);
