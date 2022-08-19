export const getUser = async () => {
  const userId = parseInt(Math.random() * (1, 10) + 1)

  const url = `https://jsonplaceholder.typicode.com/users/${userId}`
  const res = await fetch(url)
  const user = await res.json()

  return user
}
