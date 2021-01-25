import React from 'react';
import { graphql, Link } from 'gatsby';
import Post from '../components/Post';
import Layout from '../components/Layout';
import { getPostContent } from '../utils/helpers';

const BlogPost = ({ data }) => {
  const {
    livecms: { post },
  } = data;
  return (
    <Layout>
      <section className="px-3">
        <Post post={{ ...post, content: getPostContent(post.content) }} isSingle={false} />
        <Link to="/">Back to home</Link>
      </section>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query($id: ID!) {
    livecms {
      post: getPostById(id: $id) {
        title
        thumbnail
        tags
        subtitle
        status
        slug
        parentId
        metaRobots
        content
        categoryId
        _id
      }
    }
  }
`;
