const path = require(`path`);
exports.createPages = async ({ actions, graphql }) => {
  const getPostContent = (value) => {
    return value
      ? JSON.parse(value)
          .filter((el) => Array.isArray(el.content))
          .map((el) => el.content)
          .flat()
          .map((el) => el.text)
          .join(' ')
      : '';
  };

  const { data } = await graphql(`
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
  `);
  const {
    livecms: {
      getAllPost: { result: posts },
    },
  } = data;

  const filteredPosts = posts
    .filter((post) => post.status === 'published' && post.title && post.content)
    .map((el) => ({ ...el, content: getPostContent(el.content) }))
    .forEach((post) => {
      actions.createPage({
        path: `/posts/${post._id}`,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          id: post._id,
        },
      });
    });

  console.log(filteredPosts);
};
