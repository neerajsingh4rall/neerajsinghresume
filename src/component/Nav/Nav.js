import React from 'react';
import '../Nav/Nav.css';



const nav = (props) => (
<nav id="nav">

    <div className="nav_main">
        <ul>
            <a href="#"><li>home</li></a>
            <a href="#"><li>about</li></a>
            <a href="#"><li>education</li></a>
            <a href="#"><li>technologies</li></a>
            <a href="#"><li>contact</li></a>
        </ul>
    </div>
</nav>
)

export default nav;