import NewsSection from "../components/NewSection";
import "../styles/home.css";

function Home() {
  return (
    <div className="home-container">
      {/* ===== HERO SECTION ===== */}
      <div className="hero">
        <div className="overlay"></div>

        <h1 className="hero-title">
          الموقع الرسمي لوزارة الداخلية والبلديات في الجمهورية اللبنانية
        </h1>

        <div className="cards-container">
          <div className="service-card">
            <h2>تراخيص زجاج عازل لأشعة الشمس</h2>
            <p>الرابط المخصص للتأكد من صحة التراخيص</p>
          </div>

          <div className="service-card">
            <h2>إخراج القيد العائلي أو الفردي الإلكتروني</h2>
            <p>آلية الحصول على إخراج قيد إلكتروني</p>
          </div>

          <div className="service-card">
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
