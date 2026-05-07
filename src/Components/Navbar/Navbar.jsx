import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { GoHomeFill } from "react-icons/go";
import { BsFillPersonFill } from "react-icons/bs";
import { MdRestaurantMenu } from "react-icons/md";
import { PiPhoneFill } from "react-icons/pi";
import { RiTeamFill } from "react-icons/ri";
import { MdAutoAwesome } from "react-icons/md";
import imgLogo2 from "../../img/logoRedonda.png"
import imgLogo from "../../img/nomeLogo.png";

function Navbar() {
  return (
      <nav className={styles.navbar}>
          <div className={styles.logo}>
              <img src={imgLogo2} alt="Logo2"
              className={styles.logoImg2} />
          </div>
          <div className={styles.logo}>
        <img src={imgLogo} alt="Logo" className={styles.logoImg} />
      </div>
      <ul className={styles.links}>
        <li> <Link to="/"><GoHomeFill /></Link></li>
        <li> <Link to="/sobre"><BsFillPersonFill /></Link></li>
        <li> <Link to="/servicos"><MdRestaurantMenu /></Link></li>
        <li> <Link to="/contato"><PiPhoneFill /></Link></li>
        <li> <Link to="/equipe"><RiTeamFill /></Link></li>
        <li> <Link to="/extra"><MdAutoAwesome /></Link></li>
      </ul>
    </nav>
  );
}
export default Navbar;
