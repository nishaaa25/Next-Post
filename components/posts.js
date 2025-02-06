import { formatDate } from "@/lib/format";
import LikeButton from "./like-icon";
import Image from "next/image";
import { toggleBtnLike } from "./submitPost";

function Post({ post }) {
  return (
    <article className="post">
      <div className="post-image">
        <Image src={post.image} alt={post.title} width={100} height={100} />
      </div>
      <div className="post-content">
        <header>
          <div>
            <h2>{post.title}</h2>
            <p>
              Shared by {post.userFirstName} on{" "}
              <time dateTime={post.createdAt}>
                {formatDate(post.createdAt)}
              </time>
            </p>
          </div>
          <div>
            <form action={toggleBtnLike.bind(null, post.id)} className={`${post?.isLiked ? "liked" : ""}`}>
              <LikeButton />
            </form>
          </div>
        </header>
        <p>{post.content}</p>
      </div>
    </article>
  );
}

export default function Posts({ posts }) {
  if (!posts || posts.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>;
  }

  return (
    <ul className="posts">
      {posts.map((post) => (
        <li key={post.id} >
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
}
