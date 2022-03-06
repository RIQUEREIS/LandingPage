import './menu.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Menu({menuOpen,setMenuOpen}) {
    return (
        <div className={"menu "+(menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <AnchorLink href="#intro">Página Inicial</AnchorLink>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <AnchorLink href="#productdiv">Produto</AnchorLink>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <AnchorLink href="#greenParth1">Vantagens</AnchorLink>
                </li>
            </ul>
        </div>
    )
}
