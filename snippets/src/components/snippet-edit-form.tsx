'use client';

import type { Snippet } from "@prisma/client";
import Editor from "@monaco-editor/react";
import { useState } from "react";

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({snippet}: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);


  const handleEditorChange = (value: string = "") => {
    setCode(value);
  }

  return (
    <div>
      <Editor
        height={"40vh"}
        defaultLanguage="javascript"
        defaultValue={code}
        theme="vs-dark"
        onChange={handleEditorChange}
      />
    </div>
  );

}