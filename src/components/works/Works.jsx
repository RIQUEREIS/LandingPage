import "./works.scss"
import {useState} from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Placeholder from "../../assets/placeholder.png";
import Star from "../../assets/star.png";
import Secure from "../../assets/Secure.png";
import Email from "../../assets/email.png";
import Check from "../../assets/check.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { WhatsApp } from "@material-ui/icons";


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
                <a><h2>Entender sobre depressão.</h2> O livro traz uma explicação sucinta no entanto bastante completa a respeito da depressão, explicando possíveis causas e soluções da mesma</a>
                </div>
                <div className="card">
                <a><h2>Relação entre alimentos e hormônios</h2> Adipisci ea nulla explicabo officia quasi hic illum earum mollitia, tempore, veniam eaque. Cum incidunt asperiores beatae non ex error, deleniti perspiciatis.</a>
                </div>
                <div className="card">
                <a><h2>Conhecimentos que farão você reconsiderar decisões cotidianas</h2> Adipisci ea nulla explicabo officia quasi hic illum earum mollitia, tempore, veniam eaque. Cum incidunt asperiores beatae non ex error, deleniti perspiciatis.</a>
                </div>
              </div>
              <div className="column2">
                <img src={Placeholder}></img>
                <img src="https://cursodespertemilionario.com/wp-content/uploads/2021/06/Design-sem-nome.png"></img>
              </div>
              <div className="column3">
              <div className="card">
                  <a><h2>Aprender sobre alimentação.</h2> Adipisci ea nulla explicabo officia quasi hic illum earum mollitia, tempore, veniam eaque. Cum incidunt asperiores beatae non ex error, deleniti perspiciatis.</a>
                </div>
                <div className="card">
                <a><h2>O produto sempre com você.</h2> Uma vez comprado, o produto será sempre seu e você poderá acessá-lo de qualquer dispositivo que seja compatível com a leitura do mesmo. Isto é, sempre que surgir uma dúvida referente a alimentação você vai poder consultá-lo.</a>
                </div>
                <div className="card">
                <a><h2>Vantagens de uma boa alimentação.</h2> Embora o foco do e-book seja a alimentação versus depressão, com uma alimentação saudável outras faces de sua vida irão melhorar e alguns exemplos são: Memória, Sono, Humor, Ossos e Dentes, entre outros.</a>
                </div>
              </div>
          </div>
          
      </div>

      <div className="bottom">
        <a><p><img src={Star}     ></img> Privacidade</p>Sua informacao 100% segura</a>
        <a><p><img src={Secure}   ></img> Compra segura</p>Ambiente seguro e autenticado</a>
        <a><p><img src={Email}    ></img> Entregue via E-mail</p>Produto entregue por e-mail</a>
        <a><p><img src={Check}    ></img> Conteudo aprovado</p>100% revisado e aprovado</a>

      </div>

      </div>
    );
  }