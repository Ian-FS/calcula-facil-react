/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import './Header.scss'

export default function Header({ abreContainer }) {

    return (
        <header>
            <nav>
                <ul>
                    {/* <li><Link to="/">Home</Link></li> */}
                    <li onClick={abreContainer}><Link to="/terminopipe">Término do tubo</Link></li>
                    <li><Link to="/compressao">Taxa de compressão</Link></li>
                </ul>
            </nav>
        </header>
    )
}