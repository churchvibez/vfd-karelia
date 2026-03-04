import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <h1>
          Врачебно-физкультурный диспансер Республики Карелия
        </h1>

        <p>
          Официальный сайт учреждения. Здесь размещается информация о порядке
          прохождения медицинского обследования, документах, специалистах и контактах.
        </p>
      </section>

      <section className="quick-links">
        <div className="quick-link">
          <h2>
            <Link href="/about">О диспансере</Link>
          </h2>
          <p>Основная информация об учреждении.</p>
        </div>

        <div className="quick-link">
          <h2>
            <Link href="/documents">Документы</Link>
          </h2>
          <p>Приказы, лицензии и нормативные материалы.</p>
        </div>

        <div className="quick-link">
          <h2>
            <Link href="/sportsmen">Графики УМО</Link>
          </h2>
          <p>Расписание прохождения медицинских обследований.</p>
        </div>
      </section>

      <section className="notice">
        Содержимое страниц редактируется через WordPress,
        а отображается через Next.js.
      </section>
    </>
  );
}