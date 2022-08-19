export const getPosts = async (id) => {
  const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  const res = await fetch(url)
  const posts = await res.json()

  return posts
}
