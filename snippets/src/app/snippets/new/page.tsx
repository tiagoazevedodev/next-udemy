'use client'
import { createSnippet } from "@/actions";
import { useFormState } from "react-dom";

export default function SnippetCreatePage() {
  
  const [formState, action] = useFormState(createSnippet, "");
  return (
    <form action={action}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">Title</label>
          <input type="text" name="title" className="border-rounded p-2 w-full" id="title" />
        </div>
        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">Code</label>
          <textarea name="code" className="border-rounded p-2 w-full" id="code" />
        </div>
        {
          formState.message ? (
            <div className="bg-red-200 font-bold border-red-500 border p-2 rounded">{formState.message}</div>
          ) : null
        }
        <button type="submit" className="rounded p-2 bg-blue-200 font-semibold">
          Create
        </button>
      </div>
    </form>
  );
}