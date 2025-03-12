import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import MapComponent from './MapComponent';

const Footer = () => {
    return <>
    <footer style={{ background: '#D4D6C9', color: '#000', padding: '20px 0' }}>

      <div className="container text-center">
        {/* logo */}
        <div className="mb-3">
          <img
            src="src\assets\logo-png.png" 
            alt="Logo"
            width="80"
            height="80"
          />
        </div>

        {/* Titre */}
        <h4>Rejoignez nos réseaux sociaux !</h4>

        {/* Icônes des réseaux sociaux */}
        <div className="social-icons mt-3 mb-4">
          <a href="#facebook" className="social-link mx-2">
            <i className="bi bi-facebook" style={{ fontSize: '24px', color: '#FFF' }}></i>
          </a>
          <a href="#instagram" className="social-link mx-2">
            <i className="bi bi-instagram" style={{ fontSize: '24px', color: '#FFF' }}></i>
          </a>
          <a href="#twitter" className="social-link mx-2">
            <i className="bi bi-twitter-x" style={{ fontSize: '24px', color: '#FFF' }}></i>
          </a>
        </div>

        {/* Ligne de séparation */}
        <hr style={{ backgroundColor: '#FFF' }} />

        {/* Sections du footer */}
        <div className="row text-start mt-4">
          <div className="col-md-4">
            <h5>A propos</h5>
            <ul className="list-unstyled">
            <li><a href='/APropos'>Qui sommes-nous ?</a></li>
            <li><a href='/FAQ'>FAQ</a></li>
            <li><a href='/CGUS'>CGUS</a></li>
            </ul>
          </div>
          <div className="col-md-4 text-center">
            <h5>Localisation</h5>
            <i className="bi bi-geo-alt" style={{ fontSize: "2rem" }}></i>
            <div className="mb-3">
          <MapComponent></MapComponent>
        </div>
          </div>
          <div className="col-md-4 text-end">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li><a href='/Contact'>Formulaire de contact</a></li>
              <li><a href="mailto:support@monprojetrenov.com">support@monprojetrenov.com</a></li>
              
            </ul>
          </div>
        </div>

        {/* Bas de page */}
        <div className="text-center mt-4" style={{ fontSize: '14px', padding: '10px 0' }}>
          Copyright © 2025 MonProjetRénov
        </div>
      </div>
    </footer>
    
    </>;
}
 
export default Footer;