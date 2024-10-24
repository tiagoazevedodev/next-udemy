'use server'
import { redirect } from "next/navigation"
import { db } from "@/db"

export async function editSnippet(id:number, code:string) {
  await db.snippet.update({
    where: { id },
    data: { code }
  })
  redirect(`/snippets/${id}`)
}

export async function deleteSnippet(id:number) {
  await db.snippet.delete({ where: { id } })
  redirect(`/`)
}

export async function createSnippet(formState: {message:string},formData: FormData) {
  // check the users input
  const title = formData.get("title");
  const code = formData.get("code");

  if (typeof title !== "string" || typeof code !== "string" || !title || !code) {
    return {
      message: "Fill in all fields"
    }
  }

  if (title.length < 3) {
    return {
      message: "Title must be longer"
    }
  }
  
  // create a new record in the database
  await db.snippet.create({
    data: {
      title,
      code
    }
  })
  // redirect the user to the homepage
  redirect("/")
}