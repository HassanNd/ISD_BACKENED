import "../styles/home.css";

import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.webp";
import img9 from "../assets/9.jpg";
import img11 from "../assets/11.jpg";

function Home() {
  return (
    <div className="home-page fade">

      {/* HERO SECTION */}
      <section className="home-hero">
        <img src={img5} alt="Traffic Control" />
        <div className="hero-text">
          <h1>وزارة الداخلية</h1>
          <p>
            نعمل على تعزيز الأمن والسلامة العامة
            وتنظيم حركة المرور باستخدام أحدث التقنيات.
          </p>
        </div>
      </section>

      {/* INFO SECTION */}
      <section className="home-info">
        <h2>إدارة المرور والسلامة العامة</h2>
        <p>
          تسعى وزارة الداخلية إلى تطوير أنظمة ذكية
          لإدارة حركة السير، الحد من الازدحام،
          وتحسين سلامة المواطنين على الطرق.
        </p>
      </section>

      {/* IMAGE GRID */}
      <section className="home-grid">
        <div className="home-card">
          <img src={img6} alt="Monitoring" />
          <p>مراقبة الطرق عبر الأنظمة الذكية</p>
        </div>

        <div className="home-card">
          <img src={img7} alt="Traffic Police" />
          <p>تنظيم السير من قبل قوى الأمن الداخلي</p>
        </div>

        <div className="home-card">
          <img src={img9} alt="Traffic Camera" />
          <p>استخدام الكاميرات لضبط المخالفات</p>
        </div>

        <div className="home-card">
          <img src={img11} alt="Smart Traffic" />
          <p>تطوير حلول ذكية للمدن الحديثة</p>
        </div>
      </section>

    </div>
  );
}

export default Home;
