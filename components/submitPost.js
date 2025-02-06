"use server";
import { uploadImage } from "@/lib/cloudinary";
import { storePost, updatePostLikeStatus } from "@/lib/posts";
import { revalidatePath } from "next/cache";

const { redirect } = require("next/navigation");

export async function createPost(prevState, formData) {
  const title = formData.get("title");
  const image = formData.get("image");
  const content = formData.get("content");

  let imgUrl;
  try {
    imgUrl = await uploadImage(image);
    console.log("Image upload successful");
  } catch (error) {
    console.log("Failed to upload image on cloudinary");
  }

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

  await storePost({
    imageUrl: imgUrl,
    title,
    content,
    userId: 1,
  });

  redirect("/feed");
}

export async function toggleBtnLike(postId){
  updatePostLikeStatus(postId, 2);
  revalidatePath('/feed');
}