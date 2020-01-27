import React from 'react';
import '../LeftEdge/LeftEdge.css';
import html from '../../Images/html-5.png';
import css from '../../Images/css.jpg';
import bootstrap from '../../Images/bootstrap.png';
import jquery from '../../Images/jquery.png'

const leftege = (props) => (
<section className="leftege">
<div className= "sub_section_leftege">
    <h2 className="heading">client side tec</h2>
    <div className="parent_box">
        <div className="box_img">
            <a href="#">
                <img src={html} className="w-100" alt={html}/>
            </a>
        </div>
        <div className="box_content">
          <div className="box_0">
            
          </div>
        </div>
    </div>
    <div className="parent_box">
        <div className="box_img">
            <a href="#">
                <img src={css} className="w-100" alt={css}/>
            </a>
        </div>
        <div className="box_content">
          <div className="box_1">
            
          </div>
        </div>
    </div>
    <div className="parent_box">
        <div className="box_img">
            <a href="#">
                <img src={jquery} className="w-100" alt={jquery}/>
            </a>
        </div>
        <div className="box_content">
          <div className="box_2">
            
          </div>
        </div>
    </div>
    <div className="parent_box">
        <div className="box_img">
            <a href="#">
                <img src={bootstrap} className="w-100" alt={bootstrap}/>
            </a>
        </div>
        <div className="box_content">
          <div className="box_3">
            
          </div>
        </div>
    </div>
</div>
</section>
)
export default leftege;