import Link from "next/link";

export default function Navbar() {
  return (
    
    <nav className="navbar">
      <div className="container">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link href="/about" className="navbar-link">О нас</Link>
            <ul className="dropdown-menu">
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
          </li>
          <li className="navbar-item">
            <Link href="/sportsmen" className="navbar-link">Спортсменам</Link>
            <ul className="dropdown-menu">
              <li><Link href="/sportsmen">Спортсмены, подлежащие УМО по графику</Link></li>
              <li><Link href="/sportsmen-umo">Физкультурники и спортсмены, не входящие в график</Link></li>
              <li><Link href="/umo-rules">Правила прохождения УМО</Link></li>
              <li><Link href="/competitions-rules">Правила оформления заявок для участия в соревнованиях</Link></li>
            </ul>
          </li>
          <li className="navbar-item">
            <Link href="/other" className="navbar-link">Информация</Link>
            <ul className="dropdown-menu">
              <li><Link href="/other">Другие документы</Link></li>
              <li><Link href="/patients">Информация для пациентов</Link></li>
              <li><Link href="/sports-medicine">Документы по работе службы спортивной медицины</Link></li>
            </ul>
          </li>
          <li className="navbar-item">
            <Link href="/paid" className="navbar-link">Платные услуги</Link>
            <ul className="dropdown-menu">
              <li><Link href="/paid">Прейскурант цен</Link></li>
              <li><Link href="/pricelist">Документы</Link></li>
            </ul>
          </li>
          <li className="navbar-item">
            <Link href="/contacts" className="navbar-link">Контакты</Link>
            <ul className="dropdown-menu">
              <li><Link href="/contacts">Контакты и схема проезда</Link></li>
              <li><Link href="/control">Контролирующие организации</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
