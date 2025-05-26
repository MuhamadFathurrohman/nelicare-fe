import { Link } from "react-router-dom";
import "../../../sass/User/HomePage/ServiceUser/ServiceUser.css";

// Import Icons
import PregnancyIcon from "../../../assets/icons/Container.png";
import FamilyIcon from "../../../assets/icons/Container-1.png";
import VaccineIcon from "../../../assets/icons/Container-2.png";
import DeliveryIcon from "../../../assets/icons/Container-3.png";

export default function ServiceUser() {
  const services = [
    {
      icon: PregnancyIcon,
      title: "Pemeriksaan Kehamilan",
      description:
        "Pemantauan kesehatan rutin untuk ibu dan bayi selama masa kehamilan.",
      link: "",
    },
    {
      icon: FamilyIcon,
      title: "Keluarga Berencana (KB)",
      description:
        "Panduan dan layanan untuk perencanaan keluarga serta pilihan kontrasepsi.",
      link: "",
    },
    {
      icon: VaccineIcon,
      title: "Imunisasi",
      description:
        "Vaksin penting untuk anak-anak sesuai dengan jadwal yang dianjurkan.",
      link: "",
    },
    {
      icon: DeliveryIcon,
      title: "Layanan Persalinan",
      description:
        "Bantuan profesional selama proses persalinan dan kelahiran di lingkungan yang nyaman.",
      link: "",
    },
  ];
  return (
    <section className="service-section">
      <div className="container">
        <h2 className="title">Layanan Kami</h2>
        <p className="subtitle">
          Neli Care menyediakan layanan kebidanan yang menyeluruh dengan fokus
          pada kesehatan ibu dan anak
        </p>
        <div className="service-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="icon-wrapper">
                <img src={service.icon} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={service.link} className="read-more">
                Selengkapnya →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
