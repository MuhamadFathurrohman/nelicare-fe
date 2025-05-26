import React from "react";
import NavUser from "../../components/layouts/NavUser";
import FooterUser from "../../components/layouts/FooterUser";
import "../../sass/User/Jadwal/Jadwal.css";

const scheduleData = [
  { day: "Senin", open: "08.00", close: "20.00" },
  { day: "Selasa", open: "08.00", close: "20.00" },
  { day: "Rabu", open: "08.00", close: "20.00" },
  { day: "Kamis", open: "08.00", close: "20.00" },
  { day: "Jum'at", open: "08.00", close: "20.00" },
  { day: "Sabtu", open: "08.00", close: "20.00" },
];

export default function Jadwal() {
  return (
    <div>
      <NavUser />
      <section className="schedule">
        <h2>Jadwal</h2>
        <div className="schedule-grid">
          {scheduleData.map((item, index) => (
            <div key={index} className="day-card">
              <div className="day-header">{item.day}</div>
              <div className="day-body">
                <div>
                  <p>Buka</p>
                  <strong>{item.open}</strong>
                </div>
                <div>
                  <p>Tutup</p>
                  <strong>{item.close}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <FooterUser />
    </div>
  );
}
