import "../styles/about.css";

function About() {
  return (
    <div className="about-page">

      {/* ===== HERO ===== */}
      <div className="about-hero">
        <div className="about-overlay"></div>
        <h1>أحدث القرارات</h1>
      </div>

      {/* ===== DECISIONS ===== */}
      <div className="decisions-container">

        {/* CARD 1 */}
        <div className="decision-card">
          <div className="decision-content">
            <span className="decision-date">22 كانون الأول 2025</span>

            <p className="decision-text">
              قرار صادر عن وزير الداخلية والبلديات أحمد الحجار حول منع سير
              الشاحنات على الأراضي اللبنانية كافة خلال فترة أعياد الميلاد
              ورأس السنة
            </p>

            <a href="#" className="read-more">اقرأ المزيد</a>
          </div>

          <div className="decision-logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Lebanese_Army_Emblem.svg/512px-Lebanese_Army_Emblem.svg.png"
              alt="logo"
            />
          </div>
        </div>

        {/* CARD 2 */}
        <div className="decision-card">
          <div className="decision-content">
            <span className="decision-date">1 كانون الأول 2025</span>

            <p className="decision-text">
              قرار رقم 1149 تعديل بعض أحكام القرار رقم 1088/2025
              موضوع تحديد توقيت سير الشاحنات في محافظات بيروت، جبل لبنان والبقاع
            </p>

            <a href="#" className="read-more">اقرأ المزيد</a>
          </div>

          <div className="decision-logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Lebanese_Army_Emblem.svg/512px-Lebanese_Army_Emblem.svg.png"
              alt="logo"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
