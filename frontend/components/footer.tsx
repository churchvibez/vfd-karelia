import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-divider">
      </div>
      <div className="container">
        <div className="footer-nav">
          <div className="footer-nav-column">
            <h3 className="footer-nav-title">О нас</h3>
            <ul className="footer-nav-list">
              <li><Link href="/about">О диспансере</Link></li>
              <li><Link href="/structure">Структура учреждения</Link></li>
              <li><Link href="/management">Руководство</Link></li>
              <li><Link href="/specialists">Специалисты</Link></li>
              <li><Link href="/documents">Документы учреждения</Link></li>
              <li><Link href="/requisites">Реквизиты</Link></li>
              <li><Link href="/vacancies">Вакансии</Link></li>
              <li><Link href="/lobby">Прием граждан по личным вопросам</Link></li>
              <li><Link href="/anti-corruption">Противодействие коррупции</Link></li>
            </ul>
          </div>

          <div className="footer-nav-column">
            <h3 className="footer-nav-title">Спортсменам</h3>
            <ul className="footer-nav-list">
              <li><Link href="/sportsmen">Спортсмены, подлежащие УМО по графику</Link></li>
              <li><Link href="/sportsmen-umo">Физкультурники и спортсмены, не входящие в график</Link></li>
              <li><Link href="/umo-rules">Правила прохождения УМО</Link></li>
              <li><Link href="/competitions-rules">Правила оформления заявок для участия в соревнованиях</Link></li>
            </ul>
          </div>

          <div className="footer-nav-column">
            <h3 className="footer-nav-title">Информация</h3>
            <ul className="footer-nav-list">
              <li><Link href="/other">Другие документы</Link></li>
              <li><Link href="/patients">Информация для пациентов</Link></li>
              <li><Link href="/sports-medicine">Документы по работе службы спортивной медицины</Link></li>
            </ul>

            <h3 className="footer-nav-title">Платные услуги</h3>
            <ul className="footer-nav-list">
              <li><Link href="/paid">Прейскурант цен</Link></li>
              <li><Link href="/pricelist">Документы</Link></li>
            </ul>
          </div>

          <div className="footer-nav-column footer-contact-column">
            <h3 className="footer-nav-title">Контакты</h3>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <span className="footer-icon">📞</span>
                <a className="footer-text" href="tel:+78142768140">+7(8142)76-81-40</a>
              </div>
              <div className="footer-contact-item">
                <span className="footer-icon">✉️</span>
                <a className="footer-text" href="mailto:vfd@zdrav10.ru">vfd@zdrav10.ru</a>
              </div>
              <div className="footer-contact-item">
                <span className="footer-icon">📍</span>
                <span className="footer-text">г. Петрозаводск, ул. Кирова, д. 3</span>
              </div>
              <div className="footer-contact-item">
                <span className="footer-icon">🕐</span>
                <span className="footer-text">8:00 - 19:00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-karjala-divider"></div>
        <div className="footer-bottom">
          <div className="footer-logo-section">
            <Image
              src="/logo.png"
              alt="Логотип ВФД"
              width={60}
              height={61}
              className="footer-logo"
            />
            <p className="footer-org-name">© АУЗ РК &quot;Врачебно-физкультурный диспансер&quot; 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
