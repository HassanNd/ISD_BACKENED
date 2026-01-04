import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* MAP */}
        <div className="footer-map">
          <iframe
            title="MOIM Location"
            src="https://www.google.com/maps?q=Ministry%20of%20Interior%20Lebanon&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* IMPORTANT LINKS */}
        <div className="footer-section">
          <h3>روابط مهمة</h3>
          <ul>
            <li>الصفحة الرئيسية</li>
            <li>الوزير</li>
            <li>معلومات عنا</li>
            <li>الأخبار</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-section">
          <h3>اتصل بنا</h3>

          <div className="contact-item">
            <span className="icon">🏛️</span>
            <span>بيروت - الصنائع</span>
          </div>

          <div className="contact-item">
            <span className="icon">📞</span>
            <span>
              01/754200 - 01/751601 <br />
              01/751602
            </span>
          </div>

          <div className="contact-item">
            <span className="icon">📱</span>
            <span>مكتب الوزير: 70242613</span>
          </div>

          <div className="contact-item">
            <span className="icon">📱</span>
            <span>الشكاوى: 70243359</span>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        All Copyrights Reserved 2025 © MOIM
      </div>
    </footer>
  );
}

export default Footer;
