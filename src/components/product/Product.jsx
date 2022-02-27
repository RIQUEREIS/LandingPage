import "./product.scss";
import productImage from "../../assets/product.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {ExpandMore} from "@material-ui/icons"



export default function Product() {
    return (
        <div className="product" id="productdiv">
            <div className="productHolder">
                <div className="productH1classname">
                <h1 id="productH1">O Produto</h1>
                <hr></hr>
                </div>
                <div className="holder">
                    <div className="left">
                        <div className="imgHolder">
                            <img src={productImage}></img>
                        </div>
                    </div>
                    <div className="right">
                        <p>Uma dieta saudável e equilibrada, proporciona uma evolução positiva do quadro de uma pessoa com a depressão,<br></br>
                        tendo em consideração que é um tratamento eficiente e integro, no entanto, deve estar relacionado com o estilo de vida, mudanças comportamentais,<br></br>
                        tanto na alimentação do indivíduo quanto na atividade física e um acompanhamento profissional frequente.
                            Este EBOOK contém uma linguagem acessível e de fácil entendimento para você que é leigo no assunto.
                            Entenda como é possível tratar a depressão com a alimentação!</p>
                    </div>
                   
                </div>
            </div>
            <div className="icons">
                <a className="afiliate">Gostou da proposta? Torne-se um afiliado</a>
    
                <a href="#titleh1">
                    <ExpandMore className="icon"/>
                </a>
            </div>

        </div>
    )
}
