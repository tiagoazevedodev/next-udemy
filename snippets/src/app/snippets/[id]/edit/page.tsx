import { db } from "@/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/snippet-edit-form";

interface ShowSnippetPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetEditPage(props: ShowSnippetPageProps) {
  const id = parseInt(props.params.id);
  const snippet = await db.snippet.findUnique({
    where: {
      id,
    },
  });

  if (!snippet) {
    notFound();
  }

  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}