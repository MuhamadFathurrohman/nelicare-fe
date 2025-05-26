import { Link } from "react-router-dom";
import {
    Phone,
    Mail,
    Location,
    Clock,
    Facebook,
    Instagram,
    Twitter,
} from "../../assets/icons";
import logo from "../../assets/images/logo.png";
import "../../sass/components/layouts/Footer/footer.css"

export default function FooterUser() {
    return (
        <footer className="footer">
            <div className="container-custom">
                <div className="footer-grid">
                    <div className="footer-section">
                        <div className="footer-logo">
                            <img src={logo} alt="" />
                        </div>
                        <p className="footer-description">
                            Menyediakan layanan kebidanan yang profesional dan
                            penuh perhatian untuk ibu beserta keluarganya
                        </p>
                        <div className="footer-socials">
                            <a href="#" className="footer-social-icon">
                                <img src={Facebook} alt="" />
                            </a>
                            <a href="#" className="footer-social-icon">
                                <img src={Instagram} alt="" />
                            </a>
                            <a href="#" className="footer-social-icon">
                                <img src={Twitter} alt="" />
                            </a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="footer-links">
                            <li>
                                <Link to="/">Beranda</Link>
                            </li>
                            <li>
                                <Link to="/about">Tentang Kami</Link>
                            </li>
                            <li>
                                <Link to="/services">Layanan Kami</Link>
                            </li>
                            <li>
                                <Link to="/register">Pendaftaran</Link>
                            </li>
                            <li>
                                <Link to="/education">Pusat Edukasi</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-title">Our Services</h4>
                        <ul className="footer-links">
                            <li>
                                <Link to="/services/pregnancy">
                                    Periksa Kehamilan
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/family-planning">
                                    Keluarga Berencana (KB)
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/immunization">
                                    Imunisasi
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/childbirth">
                                    Layanan Persalinan
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-title">Contact Us</h4>
                        <ul className="footer-contact">
                            <li>
                                <img src={Location} alt="" className="footer-icon" />
                                <span>
                                    Jalan Digigdaw Awogawog
                                </span>
                            </li>
                            <li>
                                <img src={Phone} alt="" className="footer-icon" />
                                <a href="">+62 812345678</a>
                            </li>
                            <li>
                                <img src={Mail} alt="" className="footer-icon" />
                                <a href="mailto:nelicare@gmail.com">
                                    nelicare@gmail.com
                                </a>
                            </li>
                            <li>
                                <img src={Clock} alt="" className="footer-icon" />
                                <span>Senin - Sabtu <br />08:00 - 12:00 <br />16:00 - 18:00</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        © {new Date().getFullYear()} Neli Care. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
