import { Container } from "./styles";
import { Profile } from "./components/profile";
import { Posts } from "./components/posts";

export type User = {
  avatar_url: string
  company: string
  followers: number
  html_url: string
  login: string
  name: string
  bio: string
}

export type Post = {
  title: string
  body: string
  number: number
  user: User
  created_at: string
  html_url: string
}

export function Home() {
  return (
    <Container>
      <main>
        <Profile />
        <Posts />
      </main>
    </Container>
  )
}