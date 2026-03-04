import { notFound } from "next/navigation";
import { getPageByPath } from "@/lib/wp";
import PageTemplate from "@/components/page-template";

export default async function WPPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  const page = await getPageByPath(slug);
  if (!page) return notFound();

  return (
    <div className="page-container">
      <PageTemplate page={page} />
    </div>
  );
}
