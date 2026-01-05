import NewsSection from "../components/NewSection";
import "../styles/home.css";
import img5 from "../assets/5.jpg";
import img6 from "../assets/14.jpg";
import img7 from "../assets/7.webp";
import img8 from "../assets/9.jpg";

function Home() {
  return (
    <div className="home-container">
      {/* ===== HERO SECTION ===== */}
<div
  className="hero"
  style={{
    backgroundImage: `url(${img5})`
  }}
>
  <div className="overlay"></div>

  <h1 className="hero-title">
    الموقع الرسمي لوزارة الداخلية والبلديات في الجمهورية اللبنانية
  </h1>

  <div className="cards-container">
    <div className="service-card">
      <img src={img6} alt="Service 1" />
      <h2>اليوم العالمي و الوطني لقوى الامن</h2>
      <p></p>
    </div>

    <div className="service-card">
      <img src={img7} alt="Service 2" />
      <h2>إخراج القيد العائلي أو الفردي الإلكتروني</h2>
      <p>آلية الحصول على إخراج قيد إلكتروني</p>
    </div>

    <div className="service-card">
      <img src={img8} alt="Service 3" />
      <h2>هيئة إدارة السير والآليات والمركبات</h2>
      <p>المنصة المخصصة لخدمات هيئة إدارة السير</p>
    </div>
  </div>
</div>


      {/* ===== NEWS SECTION ===== */}
      <div className="news-section">
        <div className="underline"></div>
      </div>
      <NewsSection />
    </div>
  );
}

export default Home;
