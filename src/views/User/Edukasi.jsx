import NavUser from "../../components/layouts/NavUser";
import FooterUser from "../../components/layouts/FooterUser";
import "../../sass/User/Edukasi/Edukasi.css";

import Image1 from "../../assets/images/image1.png";
import Image2 from "../../assets/images/image2.png";
import Image3 from "../../assets/images/image3.png";
import Image4 from "../../assets/images/image4.png";
import Image5 from "../../assets/images/image5.png";
import { useState } from "react";

const articles = [
  {
    title: "Menjaga Kesehatan Ibu Hamil di Masa Kehamilan",
    tag: "Artikel Kesehatan",
    img: Image1,
    text: "Masa kehamilan merupakan periode penting yang memerlukan perhatian khusus, baik dari segi fisik maupun mental. Ibu hamil sebaiknya menjaga pola makan dengan mengonsumsi makanan bergizi seperti sayur, buah, sumber protein, serta suplemen zat besi dan asam folat yang direkomendasikan oleh bidan. Selain itu, ibu hamil disarankan untuk melakukan pemeriksaan kehamilan secara rutin, berolahraga ringan seperti jalan kaki, menghindari stres berlebih, dan tidur cukup untuk menjaga keseimbangan tubuh. Semua itu bertujuan agar kesehatan ibu dan janin dapat terjaga dengan baik hingga persalinan.",
  },
  {
    title: "Pentingnya Asi Eksklusif untuk Bayi Baru Lahir",
    tag: "Artikel Kesehatan",
    img: Image2,
    text: "ASI (Air Susu Ibu) eksklusif sangat penting diberikan kepada bayi selama 6 bulan pertama kehidupan tanpa tambahan makanan atau minuman lain. ASI mengandung semua nutrisi yang dibutuhkan bayi untuk tumbuh optimal, sekaligus memperkuat sistem imun bayi agar terlindungi dari penyakit. Pemberian ASI juga membangun ikatan emosional yang kuat antara ibu dan anak. Setelah 6 bulan, pemberian ASI dapat dilanjutkan bersama dengan makanan pendamping (MPASI)  hingga anak berusia dua tahun. Dukungan dari keluarga dan tenaga medis sangat penting dalam keberhasilan pemberian ASI eksklusif.",
  },
  {
    title: "Pentingnya Imunisasi untuk Perlindungan Anak Sejak Dini",
    tag: "Artikel Kesehatan",
    img: Image3,
    text: "Imunisasi sejak dini sangat penting untuk melindungi anak dari berbagai penyakit menular berbahaya, seperti campak, polio, dan hepatitis Vaksin membantu membentuk sistem kekebalan tubuh anak agar mampu melawan infeksi secara efektif. Anak-anak yang mendapat imunisasi lengkap cenderung tumbuh lebih sehat dan kuat. Selain itu, imunisasi juga berperan dalam menciptakan kekebalan kelompok (herd immunity). Hal ini penting untuk melindungi mereka yang belum bisa menerima vaksin, seperti bayi baru lahir atau penderita gangguan imun. Dengan cakupan imunisasi yang luas, penyebaran penyakit dapat ditekan bahkan dihentikan. Karena itu, imunisasi merupakan investasi kesehatan jangka panjang bagi anak dan masyarakat.",
  },
  {
    title: "Peran Dukungan Emosional Saat Persalinan bagi Ibu Melahirkan",
    tag: "Artikel Kesehatan",
    img: Image4,
    text: "Dukungan emosional selama persalinan memiliki peran yang sangat penting bagi kesejahteraan fisik dan mental ibu. Kehadiran orang terdekat, seperti suami, dapat memberikan rasa aman, semangat, dan ketenangan bagi ibu yang sedang berjuang melahirkan. Gambar ini menunjukkan momen persalinan di mana seorang suami mendampingi istrinya, memberikan dukungan secara emosional, sementara tenaga medis memastikan proses berjalan dengan aman. Dukungan ini tidak hanya memperkuat mental ibu, tetapi juga dapat membantu memperlancar proses persalinan, mengurangi rasa sakit yang dirasakan, dan mempercepat pemulihan setelah melahirkan. Dengan adanya dukungan yang tepat, pengalaman melahirkan dapat menjadi lebih positif dan penuh makna.",
  },
  {
    title: "Konsultasi Kehamilan Bersama Dokter Kandungan",
    tag: "Artikel Kesehatan",
    img: Image5,
    text: "Konsultasi kehamilan bersama dokter kandungan merupakan proses penting dalam menjaga kesehatan ibu dan janin selama masa kehamilan. Dalam sesi ini, dokter memberikan informasi, saran medis, serta memantau perkembangan kehamilan secara rutin. Komunikasi yang baik antara ibu hamil dan dokter membantu mendeteksi dini potensi masalah serta memberikan rasa aman dan nyaman bagi calon ibu. Konsultasi juga menjadi kesempatan untuk membahas persiapan persalinan dan perawatan pasca melahirkan.",
  },
];

export default function Edukasi() {
  return (
    <div>
      <NavUser />
      <div className="news-section">
        <h2>Berita</h2>
        <div className="news-list">
          {articles.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>
      </div>
      <FooterUser />
    </div>
  );
}

const NewsCard = ({ img, tag, title, text }) => {
  const [expanded, setExpanded] = useState(false);
  const shortText = text.length > 200 ? text.slice(0, 200) + "..." : text;

  return (
    <div className="news-card">
      <img src={img} alt={title} />
      <div className="news-content">
        <span className="news-tag">{tag}</span>
        <h3>{title}</h3>
        <p className="news-text">{expanded ? text : shortText}</p>
        {text.length > 200 && (
          <button className="read-more" onClick={() => setExpanded(!expanded)}>
            {expanded ? "Lebih sedikit" : "Baca Selengkapnya"}
          </button>
        )}
      </div>
    </div>
  );
};
