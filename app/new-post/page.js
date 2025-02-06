'use client';
import PostForm from '@/components/post-form';
import { createPost } from '@/components/submitPost';

export default function NewPostPage() {
  return <PostForm formAction={createPost}/>
}
