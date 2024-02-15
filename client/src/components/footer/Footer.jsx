import { FaFacebook, FaGooglePlus, FaTwitter, FaWifi } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="developer">
        designed by <span className="white">elegent themes</span>| Powered by{" "}
        <span className="white">Wordpress</span>
      </div>
      <div className="icons">
        <ul className="icons">
          <li className="icon">
            <FaFacebook />
          </li>
          <li className="icon">
            <FaTwitter />
          </li>
          <li className="icon">
            <FaGooglePlus />
          </li>
          <li className="icon">
            <FaWifi />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
