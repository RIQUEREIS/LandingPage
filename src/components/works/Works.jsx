import "./works.scss"
import Star from "../../assets/star.png";
import Secure from "../../assets/secure.png";
import Email from "../../assets/email.png";
import Check from "../../assets/check.png";



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
                 <a><h2>VANTAGENS DE UMA BOA ALIMENTAÇÃO</h2> Embora o foco do E-book seja a depressão, com uma alimentação saudável sua vida irá melhorar em alguns aspectos como por exemplo, sono, memória, mais disposição, qualidade de vida e longevidade.</a>
                </div>
                <div className="card">
                <a><h2>APRENDER A TRATAR A DEPRESSÃO.</h2>Estudos revelam uma alta incidência de pessoas com depressão leve e moderada no brasil, a alimentação se demonstrou uma forte aliada no combate dos sintomas depressivos, ansiedade, falta de motivação, apatia, falta de vontade, indecisão, sentimentos de medo, insegurança e entre outros.</a>
                </div>
                <div className="card">
                <a><h2>O PRODUTO SEMPRE COM VOCÊ.</h2> Uma vez comprado, o produto será sempre seu e você poderá acessá-lo de qualquer dispositivo que seja compatível com a leitura do mesmo. Isto é, sempre que surgir uma dúvida referente a alimentação você vai poder consultá-lo.</a>
                </div>
              </div>
              <div className="column2">
              <div className="card">
                  <a><h2>UMA MANEIRA A MAIS DE PREVENIR A DEPRESSÃO</h2>O tratamento desta doença requer fototerapia, psicoterapia ou medicamentos. Alguns estudos clínicos sugerem que uma alimentação adequada diminui consideravelmente os sintomas da depressão.</a>
                </div>
                <div className="card">
                <a><h2>SABEDORIA QUE VAI FAZER VOCE RECONSIDERAR DECISÕES COTIDIANAS</h2>Com esta leitura, você mesmo irá repensar atitudes do cotidiano a fim de zelar sua saúde física e mental.</a>
                </div>
                <div className="card">
                <a><h2>ENTENDER SOBRE A DEPRESSÃO</h2> A depressão é a doença do Século 21, é a maior razão de inaptidão do mundo, a segunda maior razão de mortes entre pessoas de 15 a 29 anos. ¼ da população mundial vai ter depressão um dia em suas vidas. Tal assunto revela que uma boa alimentação previne e trata os sintomas depressivos.</a>
                </div>
              </div>
          </div>

      </div>

      <div className="bottom">
        <ul>
          <li><p><img src={Star}></img> A Sua Privacidade</p>Sua informacao 100% segura</li>
          <li><p><img src={Secure}></img> Compra segura</p>Ambiente seguro e autenticado</li>
          <li><p><img src={Email}></img> Entregue via E-mail</p>Produto entregue por e-mail</li>
          <li><p><img src={Check}></img> Conteudo aprovado</p>100% revisado e aprovado</li>
        </ul>
      </div>

      </div>
    );
  }