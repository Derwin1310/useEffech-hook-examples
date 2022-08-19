import { useCallback, useEffect, useState } from "react"
import { getPosts } from "./helpers/getPosts"
import { getUser } from "./helpers/getUsers"

export const FetchCard = () => {
  const [user, setUser] = useState({})
  const [posts, setPosts] = useState([])

  const updateUser = async () => {
    const res = await getUser()
    setUser({ ...res })
  }

  const updatePosts =  useCallback(async () => {
    const res = await getPosts(user.id)
    setPosts([...res])
  }, [user.id])

  useEffect(() => {
    updateUser
  }, [user])

  useEffect(() => {
    if (user?.id) updatePosts()
  }, [user])

  return (
    <>
      <button onClick={updateUser}>
        Another user
      </button>
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>

      <br />

      <h2>Post - user: {user.id}</h2>
      <ul>
        {posts.map(({ id, body }) => (
          <li key={id}>{body}</li>
        ))}
      </ul>
    </>
  )
}
