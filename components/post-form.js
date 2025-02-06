"use client";
import Buttons from "@/components/buttons";
import { useActionState } from "react";

export default function PostForm({ formAction }) {
  const [state, formState] = useActionState(formAction, {});

  return (
    <main>
      <h1>Create a new post</h1>
      <form action={formState}>
        <div className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
          <p className="text-red-600 w-full relative text-end pr-2">
            {state?.errors?.titleError && (
              <span>{state?.errors?.titleError}</span>
            )}
          </p>
        </div>
        <div className="form-control">
          <label htmlFor="image">Image URL</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
          <p className="text-red-600 w-full relative text-end pr-2">
            {state?.errors?.imageError && (
              <span>{state?.errors?.imageError}</span>
            )}
          </p>
        </div>
        <div className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5" />
          <p className="text-red-600 w-full relative text-end pr-2">
            {state?.errors?.contentError && (
              <span>{state?.errors?.contentError}</span>
            )}
          </p>
        </div>
        <div className="form-actions">
          <Buttons />
        </div>
      </form>
    </main>
  );
}
