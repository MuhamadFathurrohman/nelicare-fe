import "../../../sass/User/HomePage/ReasonUser/ReasonUser.css";

// Import Icon dan Gambar
import Periksa from "../../../assets/images/periksa.png";
import CheckIcon from "../../../assets/icons/check.png";
import WhatsAppIcon from "../../../assets/icons/whatsapp.png";

const reasons = [
  "Bidan berpengalaman dan bersertifikat",
  "Lingkungan yang hangat dan nyaman",
  "Perawatan yang menyeluruh",
  "Fasilitas yang memadai",
  "Dukungan 24/7 untuk keadaan darurat",
  "Layanan kesehatan yang terjangkau",
];

export default function ReasonUser() {
  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="image">
          <img src={Periksa} alt="Pemeriksaan USG" />
        </div>
        <div className="content">
          <h2>Kenapa Memilih Neli Care?</h2>
          <p>
            Di Neli Care, kami meyakini pentingnya memberikan perawatan yang
            disesuaikan dengan menghargai perjalanan istimewa setiap ibu dan
            keluarganya. Bidan kami yang terampil berkomitmen untuk memberikan
            pengalaman yang aman, nyaman, dan menyenangkan selama kehamilan,
            persalinan, dan seterusnya.
          </p>
          <ul className="checklist">
            {reasons.map((reason, index) => (
              <li key={index}>
                <img src={CheckIcon} alt="Check" />
                {reason}
              </li>
            ))}
          </ul>
          <div className="button-wa">
            <a
              href="https://wa.me/6281234567890"
              className="wa-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={WhatsAppIcon} alt="WhatsApp" />
              Tanya Lebih Lanjut
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
