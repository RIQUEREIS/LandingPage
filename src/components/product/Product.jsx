import "./product.scss";
import productImage from "../../assets/product.jpeg";
import {ExpandMore} from "@material-ui/icons";


export default function Product() {
    return (
        <div className="product" id="productdiv">
            <div className="productHolder">
                <div className="productH1classname">
                <h1 id="productH1">Ainda em duvida sobre como vou conseguir
                te ajudar? Conheca um pouco mais sobre o produto.
                </h1>
                <hr></hr>
                </div>
                <div className="holder">
                    <div className="left">
                        <div className="imgHolder">
                            <img src={productImage}></img>
                        </div>
                    </div>
                    <div className="right">
                        <p>Uma dieta saudável e equilibrada, proporciona uma evolução positiva do quadro de uma pessoa com a depressão
                        tendo em consideração que é um tratamento eficiente e integro, no entanto, deve estar relacionado com o estilo de vida, mudanças comportamentais
                        tanto na alimentação do indivíduo quanto na atividade física e um acompanhamento profissional frequente.<br></br><br></br>
                        Este EBOOK contém uma linguagem acessível e de fácil entendimento para você que é leigo no assunto.<br></br><br></br>
                        <span>Entenda como é possível tratar a depressão com a alimentação!</span></p>
                        <br></br>
                        <hr></hr>
                    </div>
                   
                </div>
            </div>
            <div className="icons">
                <a className="afiliate" href="https://app-vlc.hotmart.com/affiliate-recruiting/view/6717E67146871">Gostou da proposta? Torne-se um afiliado !</a>
                    
                <a href="#greenParth1">
                    <ExpandMore className="icon"/>
                </a>
            </div>

        </div>
    )
}
