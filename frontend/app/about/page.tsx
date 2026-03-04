import { getPageBySlug } from "@/lib/wp";
import PageTemplate from "@/components/page-template";

export default async function AboutPage() {
  const page = await getPageBySlug("about");

  if (!page) {
    return (
      <div className="page-container">
        <h1>Page not found</h1>
        <p>The page &quot;about&quot; was not found in WordPress.</p>
      </div>
    );
  }

  return (
    <div className="page-container">
      <PageTemplate page={page} />
    </div>
  );
}
