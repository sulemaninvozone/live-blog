import React from 'react';

const Post = ({ post }) => {
  return (
    <article className="shadow my-4 mb-2">
      <div className="bg-white flex flex-col justify-start p-6">
        <a href="/blogs" className="text-3xl font-bold hover:text-gray-700 pb-4">
          {post.title}
        </a>
        <p href="/blogs" className="pb-6">
          {post.content}
        </p>
        <a href="/blogs" className="uppercase text-gray-800 hover:text-black">
          Continue Reading
        </a>
      </div>
    </article>
  );
};

export default Post;
