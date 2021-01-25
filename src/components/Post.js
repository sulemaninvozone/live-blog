import React from 'react';
import { Link } from 'gatsby';

const Post = ({ post, isSingle }) => {
  return (
    <article className="shadow my-4 mb-2">
      <div className="bg-white flex flex-col justify-start p-6">
        <Link to={`/posts/${post._id}`} className="text-3xl font-bold hover:text-gray-700 pb-4">
          {post.title}
        </Link>
        <p className="pb-6">{post.content}</p>
        {isSingle && (
          <Link to={`/posts/${post._id}`} className="uppercase text-gray-800 hover:text-black">
            Continue Reading
          </Link>
        )}
      </div>
    </article>
  );
};

export default Post;
