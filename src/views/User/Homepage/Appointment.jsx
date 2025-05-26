import CalendarIcon from "../../../assets/icons/calendar.svg";
import { Link } from "react-router-dom";
import "../../../sass/User/HomePage/Appointment/Appointment.css";

export default function Appointment() {
  return (
    <section className="appointment">
      <div className="card-appoint">
        <h2>Siap untuk Membuat Janji Temu?</h2>
        <p>
          Kami siap untuk membantu Anda dalam kehamilan, perencanaan keluarga,
          atau imunisasi untuk anak Anda
        </p>
        <Link to="/buat-janji" className="button-appoint">
          <img src={CalendarIcon} alt="Calendar Icon" />
          Buat Janji Temu
        </Link>
      </div>
    </section>
  );
}
