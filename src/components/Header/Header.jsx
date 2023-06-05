/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import './Header.scss'

export default function Header() {

    return (
        <header>
            <nav>
                <ul>
                    <li className="item-endpipe"
                        onClick={(event) => {
                            event.target.parentElement.parentElement.children[0].style.color = '#d80032'
                            event.target.parentElement.parentElement.children[1].style.color = '#2b2d42'

                            event.target.parentElement.parentElement.children[0].style.opacity = '100%'
                            event.target.parentElement.parentElement.children[1].style.opacity = '90%'
                        }}
                    ><Link to="/">Término do tubo</Link></li>
                    <li
                        onClick={(event => {
                            event.target.parentElement.parentElement.children[1].style.color = '#d80032'
                            event.target.parentElement.parentElement.children[0].style.color = '#2b2d42'

                            event.target.parentElement.parentElement.children[1].style.opacity = '100%'
                            event.target.parentElement.parentElement.children[0].style.opacity = '90%'
                        })}
                        className="item-compression"><Link to="/compressao">Taxa de compressão</Link></li>
                </ul>
            </nav>
        </header >
    )
}