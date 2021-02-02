export const getPostContent = (value) => {
  return value ? JSON.parse(value)
    .filter((el) => Array.isArray(el.content))
    .map((el) => el.content)
    .flat()
    .map((el) => el.text)
    .join(' ') : '';
};
