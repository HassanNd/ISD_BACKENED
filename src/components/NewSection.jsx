import { useState } from "react";
import "../styles/news.css";

const newsData = [
  {
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    date: "31 كانون الأول 2025",
    title:
      "الوزير الحجار استقبل المديرة العامة للشؤون السياسية واللاجئين فاتن يونس..."
  },
  {
    image: "https://images.unsplash.com/photo-1549923746-c502d488b3ea",
    date: "31 كانون الأول 2025",
    title:
      "الوزير الحجار أشرف على إطلاق دوريات قوى الأمن الداخلي خلال ليلة رأس السنة"
  },
  {
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620",
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
