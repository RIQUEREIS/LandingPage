import "./intro.scss";
import {ExpandMore} from "@material-ui/icons"
import product from "../../assets/product.jpeg"
import React, { useState } from 'react';
import { Player } from 'video-react';
import Image from '../../assets/black.png'
import ResponsiveVideo from '../../assets/introVideo.mp4';
import { ReactVideo } from "reactjs-media";
import { YoutubePlayer } from "reactjs-media";


export default function Intro() {

  


    return (
        <div className="intro" id="intro">
            <div class="content">
                <h1>
                   E-book
                </h1>
                <div className="mainContent">
                    <div className="left">
                    <div class="videoWrapper">
                    <iframe width="560" height="349" src="https://www.youtube.com/embed/olY6aWVv9xY" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div className="iconHolder">
                    <a href="#productdiv">
                    <ExpandMore className="icon"/>
                    </a>
                    </div>
                    </div>
                    <div className="right">
                    <h3>Sobre mim</h3>
                    <p>Sou Henrique Edson Reis, decidi ser nutricionista quando estava na adolescência,
                    pois a  alimentação mudou a minha vida por completo. <br></br>
                    Era um jovem sedentário e com sobrepeso. Porém com incentivos comecei a me exercitar e buscar melhorar a minha alimentação. <br></br>
                    Foi ai que começou o meu amor pela nutrição e se eu conseguir mudar a vida de outras pessoas, para melhor qualidade de vida e saúde mental, meu objetivo estará comprido.</p>
                        <div className="linkToBuy">
                            <a  href="//www.hotmart.com/product/en/ebookalimentacaovsdepressao/Y67146850A">Veja mais aqui</a>
                            <img src="https://cursodespertemilionario.com/wp-content/uploads/2021/06/Design-sem-nome.png"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
