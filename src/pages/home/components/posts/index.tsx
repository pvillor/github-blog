import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import { PostsHeader, PostsInfo, PostsList, PostContainer, PostHeader, PostsContainer } from "../../styles"
import { useEffect, useState } from "react"
import { api } from "../../../../lib/axios"
import { useNavigate } from "react-router-dom"
import { Post } from "../.."

export function Posts() {
  const [posts, setPosts] = useState<Post[]>([])
  const [searchPost, setSearchPost] = useState('')

  const navigate = useNavigate();

  function handleOpenPost(issue: number) {
    navigate(`/posts/${issue}`)
  }

  async function fetchPosts(query?: string) {
    const response = await api.get(`search/issues?q=${query}%20repo:pvillor/github-blog`)

    setPosts(response.data.items)
  }

  useEffect(() => {
    fetchPosts(searchPost)
  }, [searchPost])

  return (
    <PostsContainer>
      <PostsHeader>
        <PostsInfo>
          <h3>Publicações</h3>
          <span>{posts.length} publicações</span>
        </PostsInfo>
        <input placeholder="Buscar conteúdo" onChange={(e) => setSearchPost(e.target.value)} value={searchPost} />
      </PostsHeader>
      <PostsList>
        {posts.map((post) => {
          return (
            <PostContainer key={post.number} onClick={() => handleOpenPost(post.number)}>
              <PostHeader>
                <h2>{post.title}</h2>
                <span>{formatDistanceToNow(post.created_at, {
                  locale: ptBR,
                  addSuffix: true
                })}</span>
              </PostHeader>
              <p>{post.body}</p>
            </PostContainer>
          )
        })}
      </PostsList>
    </PostsContainer>
  )
}