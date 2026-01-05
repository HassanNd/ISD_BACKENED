import "../styles/about.css";

import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";

function About() {
  return (
    <div className="about-page fade">
      <h1 className="about-title">حول وزارة الداخلية</h1>

      <p className="about-intro">
        تعمل وزارة الداخلية على تنظيم وإدارة حركة السير، تعزيز السلامة العامة،
        وتطبيق القوانين المرورية باستخدام أحدث التقنيات والأنظمة الذكية.
      </p>

      <div className="about-grid">
        <div className="about-card">
          <img src={img1} alt="Traffic Control" />
          <p>
            تنظيم حركة السير في الشوارع الرئيسية لضمان سلامة المواطنين
            وتخفيف الازدحام المروري.
          </p>
        </div>

        <div className="about-card">
          <img src={img2} alt="Monitoring" />
          <p>
            مراقبة الطرق عبر الكاميرات الذكية واتخاذ الإجراءات السريعة
            عند حدوث أي طارئ.
          </p>
        </div>

        <div className="about-card">
          <img src={img3} alt="Traffic Police" />
          <p>
            انتشار عناصر قوى الأمن الداخلي لتنظيم السير
            وتطبيق القوانين المرورية.
          </p>
        </div>

        <div className="about-card">
          <img src={img4} alt="Traffic Technology" />
          <p>
            استخدام التكنولوجيا الحديثة والأنظمة الذكية
            لتحسين إدارة المرور.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
