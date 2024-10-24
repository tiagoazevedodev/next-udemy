'use client';

import type { Snippet } from "@prisma/client";
import Editor from "@monaco-editor/react";
import { useState } from "react";
import { editSnippet } from "@/actions";

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({snippet}: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);


  const handleEditorChange = (value: string = "") => {
    setCode(value);
  }

  const editSnippetAction = editSnippet.bind(null, snippet.id, code);

  return (
    <div>
      <Editor
        height={"40vh"}
        defaultLanguage="javascript"
        defaultValue={code}
        theme="vs-dark"
        onChange={handleEditorChange}
      />
      <form action={editSnippetAction}>
        <button type="submit" className="rounded border px-2">Save</button>
      </form>
    </div>
  );

}