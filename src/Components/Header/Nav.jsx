import DropDown from "./DropDown";
import { Link } from "react-router-dom";
import data from "../../Data/services1.json";
export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list">
      <li>
        <Link to="/">Inicio</Link>
      </li>


      <li className="menu-item-has-children">
        <Link to="/project" onClick={() => setMobileToggle(false)}>
          Servicios
        </Link>
        <DropDown>
          <ul>
            {data.map((item, index) => (
            <li key={index}>
              <Link to={item.btnLink} onClick={() => setMobileToggle(false)}>
                {item.title}
              </Link>
            </li>
            ))}
          </ul>
        </DropDown>
      </li>
      <li>
        <Link to="/">Proyectos</Link>
      </li>   
      <li>
        <Link to="/nosotros">Nosotros</Link>
      </li>    
    </ul>
  );
}
