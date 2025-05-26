import FooterUser from "../../../components/layouts/FooterUser";
import NavUser from "../../../components/layouts/NavUser";
import motherChildImage from "../../../assets/images/ibudananak.png";
import ServiceUser from "./ServiceUser";
import "../../../sass/User/HomePage/HomeUser/HomeUser.css";
import ReasonUser from "./ReasonUser";
import Appointment from "./Appointment";
import { Link } from "react-router-dom";
import Arrow from "../../../assets/icons/arrow.svg";
import Pattern1 from "../../../assets/icons/pattern1.svg";

export default function HomeUser() {
  return (
    <>
      <NavUser />
      <section className="home">
        <div className="wrap">
          <div className="content-home">
            <h1>
              Perawatan Penuh Kasih untuk <span>Ibu dan Anak</span>
            </h1>
            <p>
              Neli Care menawarkan layanan kebidanan yang profesional dengan
              pendekatan yang hangat dan personal. Mendukung para ibu dan
              keluarga selama masa kehamilan, persalinan, dan seterusnya.
            </p>
            <div className="buttons-home">
              <Link to="/buat-janji" className="button1">
                Buat janji Temu <img src={Arrow} alt="arrow" />
              </Link>
              <div className="button2">Layanan Kami</div>
            </div>
          </div>

          <div className="image-home">
            <img src={motherChildImage} alt="" />
          </div>
        </div>

        {/* Dekorasi Bulat */}
        <div className="circle-deco circle-1"></div>
        <div className="circle-deco circle-2"></div>
      </section>
      <ServiceUser />
      <ReasonUser />
      <Appointment />
      <FooterUser />
    </>
  );
}
