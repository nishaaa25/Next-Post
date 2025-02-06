"use server";
import { storePost } from "@/lib/posts";

const { redirect } = require("next/navigation");

export async function createPost(prevState, formData) {
  const title = formData.get("title");
  const image = formData.get("image");
  const content = formData.get("content");

  let errors = {};

  if (!title || title.trim().length === "") {
    errors.titleError = "Title is required";
    console.log(errors);
  }

  if (!image || image.size === 0) {
    errors.imageError = "Image is required";
    console.log(errors);
  }

  if (!content || content.trim().length === "") {
    errors.contentError = "Content is required";
    console.log(errors);
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  storePost({
    imageUrl: "",
    title,
    content,
    userId: 1,
  });

  redirect("/feed");
}
