import type { WPPage } from "@/types/wordpress";
import WPContentRenderer from "./wp-content-renderer";
import "./page-template.scss";

interface PageTemplateProps {
  page: WPPage;
}

export default function PageTemplate({ page }: PageTemplateProps) {
  const pageTitle = page.acf?.custom_h1?.trim() || page.title?.rendered;

  return (
    <article className="wp-page">
      <h1
        className="wp-page-title"
        dangerouslySetInnerHTML={{ __html: pageTitle }}
      />
      <WPContentRenderer
        content={page.content.rendered}
        className="wp-page-content"
      />
    </article>
  );
}
