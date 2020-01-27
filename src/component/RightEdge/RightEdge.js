import React from 'react';
import '../RightEdge/RightEdge.css';
import node from '../../Images/node.png';
import express from '../../Images/ExpressJS.png';
import mongoose from '../../Images/mongoose.jpg';
import mongodb from '../../Images/mongodb.jpg'

const rightege = (props) => (
<section className="ritege">
<div className= "sub_section_ritege">
    <h2 className="head">sever side tec</h2>
    <div className="box">
        <div className="box_image">
            <a href="#">
                <img src={node} className="w-100" alt={node}/>
            </a>
        </div>
        <div className="box_cont">
          <div className="box_10">
            
          </div>
        </div>
    </div>
    <div className="box">
        <div className="box_image">
            <a href="#">
                <img src={express} className="w-100" alt={express}/>
            </a>
        </div>
        <div className="box_cont">
          <div className="box_7">
            
          </div>
        </div>
    </div>
    <div className="box">
        <div className="box_image">
            <a href="#">
                <img src={mongoose} className="w-100" alt={mongoose}/>
            </a>
        </div>
        <div className="box_cont">
          <div className="box_5">
            
          </div>
        </div>
    </div>
    <div className="box">
        <div className="box_image">
            <a href="#">
                <img src={mongodb} className="w-100" alt={mongodb}/>
            </a>
        </div>
        <div className="box_cont">
          <div className="box_6">
            
          </div>
        </div>
    </div>
</div>
</section>
)
export default rightege;