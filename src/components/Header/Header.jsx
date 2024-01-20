/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './Header.scss';

export default function Header(props) {
  return (
    <header>
      <nav>
        <ul>
          <li
            className="item-endpipe"
            onClick={(event) => {
              event.target.parentElement.parentElement.children[0].style.color =
                '#2B2D42';
              event.target.parentElement.parentElement.children[1].style.color =
                '#8D99AE';

              event.target.parentElement.parentElement.children[0].style.opacity =
                '100%';
              event.target.parentElement.parentElement.children[1].style.opacity =
                '90%';
              props.setShowResult(false);
            }}
          >
            <Link to="/">Término de Produção</Link>
          </li>
          <li
            onClick={(event) => {
              event.target.parentElement.parentElement.children[1].style.color =
                '#2B2D42';
              event.target.parentElement.parentElement.children[0].style.color =
                '#8D99AE';

              event.target.parentElement.parentElement.children[1].style.opacity =
                '100%';
              event.target.parentElement.parentElement.children[0].style.opacity =
                '90%';
              props.setShowResult(false);
            }}
            className="item-compression"
          >
            <Link to="/compressao">Taxa de compressão</Link>
          </li>
          <li
            onClick={(event) => {
              event.target.parentElement.parentElement.children[1].style.color =
                '#2B2D42';
              event.target.parentElement.parentElement.children[0].style.color =
                '#8D99AE';

              event.target.parentElement.parentElement.children[1].style.opacity =
                '100%';
              event.target.parentElement.parentElement.children[0].style.opacity =
                '90%';
              props.setShowResult(false);
            }}
            className="item-compression"
          >
            <Link to="/consumoTubo">Consumo de purga total</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
