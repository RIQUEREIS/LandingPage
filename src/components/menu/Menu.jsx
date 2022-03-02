import './menu.scss';

export default function Menu({menuOpen,setMenuOpen}) {
    return (
        <div className={"menu "+(menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Página Inicial</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#productdiv">Produto</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#greenParth1">Vantagens</a>
                </li>
            </ul>
        </div>
    )
}
