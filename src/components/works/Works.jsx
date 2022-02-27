import "./works.scss"
import {useState} from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Placeholder from "../../assets/placeholder.png";


export default function Works() {

 

    return (
      <div className="greenPart" id="greenPart">
      <div className="greenHolder">
          <div className="greenH1Classname">
          <h1 id="greenParth1">Descubra como ler este <span>livro</span> vai ajudar <span>você</span>.</h1>
          <hr></hr>
          </div>
          <div className="holder">
              <div className="column1">
                <div className="card">
                <a><h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2> Adipisci ea nulla explicabo officia quasi hic illum earum mollitia, tempore, veniam eaque. Cum incidunt asperiores beatae non ex error, deleniti perspiciatis.</a>
                </div>
                <div className="card">
                <a><h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2> Adipisci ea nulla explicabo officia quasi hic illum earum mollitia, tempore, veniam eaque. Cum incidunt asperiores beatae non ex error, deleniti perspiciatis.</a>
                </div>
                <div className="card">
                <a><h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2> Adipisci ea nulla explicabo officia quasi hic illum earum mollitia, tempore, veniam eaque. Cum incidunt asperiores beatae non ex error, deleniti perspiciatis.</a>
                </div>
              </div>
              <div className="column2">
                <img src={Placeholder}></img>
              </div>
              <div className="column3">
              <div className="card">
                  <a><h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2> Adipisci ea nulla explicabo officia quasi hic illum earum mollitia, tempore, veniam eaque. Cum incidunt asperiores beatae non ex error, deleniti perspiciatis.</a>
                </div>
                <div className="card">
                <a><h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2> Adipisci ea nulla explicabo officia quasi hic illum earum mollitia, tempore, veniam eaque. Cum incidunt asperiores beatae non ex error, deleniti perspiciatis.</a>
                </div>
                <div className="card">
                <a><h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2> Adipisci ea nulla explicabo officia quasi hic illum earum mollitia, tempore, veniam eaque. Cum incidunt asperiores beatae non ex error, deleniti perspiciatis.</a>
                </div>
              </div>
          </div>
      </div>
      <div className="bottom">
        <p>test</p>
      </div>
      </div>
    );
  }