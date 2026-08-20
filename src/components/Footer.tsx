import "./Footer.css";
import { FiInstagram, FiLinkedin, FiFacebook } from "react-icons/fi";
import logoMark from "../assets/logo-mark.png";

type FooterProps = {
  onBook: () => void;
};

const Footer = ({ onBook }: FooterProps) => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <img
          src={logoMark}
          alt="Delgender Communications logo"
          className="footer-logo"
        />

        <h3>Delgender Communications</h3>
        <p className="footer-tagline">Identify. Strategize. Elevate.</p>

        <button type="button" className="footer-book-btn" onClick={onBook}>
          Book an Appointment
        </button>

        <div className="social-links">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="social-icon" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FiInstagram className="social-icon" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FiFacebook className="social-icon" />
          </a>
        </div>

        <a
          href="mailto:hello@delgendercommunications.com"
          className="contact-link"
        >
          hello@delgendercommunications.com
        </a>
      </div>

      <p className="footer-rights">
        © {new Date().getFullYear()} Delgender Communications | All Rights
        Reserved
      </p>
    </footer>
  );
};

export default Footer;
