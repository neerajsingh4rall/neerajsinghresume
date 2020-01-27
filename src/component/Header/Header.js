import React from 'react';
import '../Header/Header.css'
import logo from '../../Images/logo.jpg'
const header = props => (
<header id="header">
    <div className="sub_header">
        <div className="logo">
            <a href="/">
                <img className="w-100" src={logo} alt={logo}/>
            </a>
        </div>
        <div className="nav">
            <ul>
                <a href="/"><li className="moving" >neeraj singh</li></a>
                <a href="/"> <li>web developer</li></a>
            </ul>
        </div>
    </div>
</header>
)
export default header;