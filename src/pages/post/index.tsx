import { Link, useParams } from "react-router-dom";
import { Container, PostContent, PostHeader, PostHeaderContent, PostHeaderLinks } from "./styles";
import { ArrowSquareOut, CaretLeft } from "phosphor-react";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import Markdown from "react-markdown";
import { PostProfile } from "./profile";
import { Post } from "../home";

export function PostPage() {
  const [post, setPost] = useState<Post>({
    created_at: '',
    number: 0,
    title: '',
    body: '',
    html_url: '',
    user: {
      company: '',
      followers: 0,
      login: '',
      avatar_url: '',
      bio: '',
      html_url: '',
      name: ''
    }
  })
  const { issue } = useParams()

  async function fetchPost(issue: number) {
    const response = await api.get(`repos/pvillor/github-blog/issues/${issue}`)

    setPost(response.data)
  }

  useEffect(() => {
    fetchPost(Number(issue))
  }, [issue])

  return (
    <Container>
      <main>
        <PostHeader>
          <PostHeaderLinks>
            <Link to='/'>
              <CaretLeft size={12} weight="bold" />
              VOLTAR
            </Link>
            <Link to={post.html_url} target="_blank">
              VER NO GITHUB
              <ArrowSquareOut size={12} weight="bold" />
            </Link>
          </PostHeaderLinks>
          <PostHeaderContent>
            <h1>{post.title}</h1>
            <PostProfile post={post} />
          </PostHeaderContent>
        </PostHeader>

        <PostContent>
          <Markdown>
            {post.body}
          </Markdown>
        </PostContent>
      </main>
    </Container>
  )
}