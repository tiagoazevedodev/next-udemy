import { db } from "@/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import * as actions from "@/actions";


interface ShowSnippetPageProps {
  params: {
    id: string;
    code: string;
    title: string;
  };
}

export default async function ShowSnippetPage(props: ShowSnippetPageProps) {

  await new Promise((resolve) => setTimeout(resolve, 777));

  const snippet = await db.snippet.findUnique({
    where: {
      id: parseInt(props.params.id),
    },
  });

  if (!snippet) {
    notFound();
  }

  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);
  return (
    <div>
      <div className="flex my-4 justify-between items-center">
        <h1 className="font-bold text-2xl">{snippet.title}</h1>
        <div className="flex gap-2">
          <Link href={`/snippets/${snippet.id}/edit`} className="px-2 border rounded">Edit</Link>
          <form action={deleteSnippetAction}>
            <button type="submit" className="px-2 border rounded">Delete</button>
          </form>
        </div>
      </div>
      <pre className="p-3 border rounded bg-slate-300 border-slate-300">
        <code>
          {snippet.code}	
        </code>
      </pre>
    </div>
  );
}
