import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-content">
            <div className="header-left">
              <Link href="/" className="logo-link">
                <Image
                  src="/logo.png"
                  alt="Логотип ВФД"
                  width={349}
                  height={354}
                  priority
                  className="logo"
                  unoptimized
                />
              </Link>
              <h1 className="organization-name">
                АУЗ РК &quot;Врачебно-физкультурный диспансер&quot;
              </h1>
              <a href="mailto:vfd@zdrav10.ru" className="contact-link">
                vfd@zdrav10.ru
              </a>
              <div className="contact-item">
                <span className="contact-label"></span>
                <a href="tel:+78142768140" className="contact-link">
                  +7(8142)76-81-40
                </a>
              </div>
            </div>

            <div className="header-right">
              <Link href="/accessibility" className="accessibility-link">
                <Image
                  src="/glasses-icon.png"
                  alt=""
                  width={20}
                  height={20}
                  className="glasses-icon"
                />
                <span>версия для слабовидящих</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}