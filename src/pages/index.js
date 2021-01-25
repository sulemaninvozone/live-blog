import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Post from '../components/Post';
import { getPostContent } from '../utils/helpers';

export default function Home({ data }) {
  const {
    livecms: {
      getAllPost: { result: posts },
    },
  } = data;
  return (
    <Layout>
      <section className="px-3">
        {posts
          .map((el) => ({ ...el, content: getPostContent(el.content) }))
          .filter((post) => !!post.title && !!post.content)
          .map((post) => (
            <Post key={post._id} post={post} isSingle={false} />
          ))}
      </section>
    </Layout>
  );
}

export const query = graphql`
  {
    livecms {
      getAllPost {
        result {
          _id
          title
          content
          slug
          status
        }
        info {
          count
          limit
        }
      }
    }
  }
`;
