import { useState } from "react";
import "../styles/news.css";
import img12 from "../assets/12.jpg";
import img13 from "../assets/13.jpg";
import img14 from "../assets/3.jpg";

const newsData = [
  {
    image: img12,
    date: "31 كانون الأول 2025",
    title:
      "الوزير الحجار استقبل المديرة العامة للشؤون السياسية واللاجئين فاتن يونس..."
  },
  {
    image: img13,
    date: "31 كانون الأول 2025",
    title:
      "الوزير الحجار أشرف على إطلاق دوريات قوى الأمن الداخلي خلال ليلة رأس السنة"
  },
  {
    image: img14,
    date: "31 كانون الأول 2025",
    title:
      "الوزير الحجار تفقد تمركزات وحدات قوى الأمن الداخلي والدفاع المدني خلال ليلة..."
  }
];

function NewsSection() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? newsData.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === newsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="news-wrapper">
      <h2>أخبار ونشاطات</h2>
      <div className="underline"></div>
      <p className="subtitle">
        الأخبار والنشاطات المتعلقة بوزارة الداخلية والبلديات
      </p>

      <div className="news-container">
        <button className="arrow left" onClick={prev}>‹</button>

        <div className="news-cards">
          {newsData.map((item, i) => (
            <div
              key={i}
              className={`news-card ${i === index ? "active" : ""}`}
            >
              <img src={item.image} alt="news" />
              <div className="news-content">
                <span className="date">{item.date}</span>
                <h3>{item.title}</h3>
                <a href="#">اقرأ المزيد</a>
              </div>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={next}>›</button>
      </div>
    </section>
  );
}

export default NewsSection;
