import React, { useState } from "react";
import NavUser from "../../components/layouts/NavUser";
import FooterUser from "../../components/layouts/FooterUser";
import "../../sass/User/Buatjanji/Buatjanji.css";
import API from "../../service/api";

export default function BuatJanji() {
  const [formData, setFormData] = useState({
    nama: "",
    umur: 0,
    email: "-",
    nomor: "",
    idLayanan: 0,
    tanggal: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/janji-temu/add", formData);
      alert("Data Berhasil Ditambahkan");
    } catch (error) {
      alert("Data Gagal Dibuat");
    }
  };

  return (
    <div>
      <NavUser />
      <section className="appointment-form">
        <h2>Pendaftaran Online</h2>
        <p>Buat janji temu dengan bidan</p>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div>
              <label>Nama</label>
              <input
                type="text"
                name="nama"
                placeholder="Masukkan nama Anda"
                value={formData.nama}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Umur</label>
              <input
                type="text"
                name="umur"
                placeholder="Masukkan umur Anda"
                value={formData.umur}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Nomor HP</label>
              <input
                type="text"
                name="nomor"
                placeholder="Masukkan nomor hp Anda"
                value={formData.nomor}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Jenis Layanan</label>
              <select
                name="idLayanan"
                value={formData.idLayanan}
                onChange={handleChange}
                required
              >
                <option value="">Pilih Layanan</option>
                <option value="1">Pemeriksaan Kehamilan</option>
                <option value="2">Keluarga Berencana</option>
                <option value="3">Imunisasi</option>
                <option value="4">Persalinan</option>
              </select>
            </div>
            <div>
              <label>Tanggal Janji Temu</label>
              <input
                className="date-input"
                type="date"
                name="tanggal"
                value={formData.tanggal}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit">Buat Janji</button>
          <p className="terms">
            Dengan mengirim form ini, berarti Anda setuju untuk mengikuti syarat
            dan ketentuan
          </p>
        </form>
      </section>
      <FooterUser />
    </div>
  );
}
