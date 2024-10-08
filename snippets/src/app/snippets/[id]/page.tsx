import { db } from "@/db";
import { notFound } from "next/navigation";


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

  return (
    <div>
      <div className="flex my-4 justify-between items-center">
        <h1 className="font-bold text-2xl">{snippet.title}</h1>
        <div className="flex gap-2">
          <button className="px-2 border rounded">Edit</button>
          <button className="px-2 border rounded">Delete</button>
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
