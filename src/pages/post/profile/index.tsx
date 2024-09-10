import { GithubLogo, Buildings, Users } from "phosphor-react";
import { ProfileInfo } from "../styles";
import { api } from "../../../lib/axios";
import { useEffect, useState } from "react";
import { Post, User } from "../../home";

interface PostProfileProps {
  post: Post
}

export function PostProfile({ post }: PostProfileProps) {
  const [user, setUser] = useState<User>({
    name: '',
    avatar_url: '',
    bio: '',
    html_url: '',
    company: '',
    followers: 0,
    login: ''
  })

  async function fetchUser() {
    const response = await api.get(`users/${post.user.login}`)

    setUser(response.data)
  }

  useEffect(() => {
    fetchUser()
  }, [post])

  return (
    <ProfileInfo>
      <div>
        <GithubLogo size={18} weight="fill" />
        <span>{user.login}</span>
      </div>
      <div>
        <Buildings size={18} weight="fill" />
        <span>{user.company}</span>
      </div>
      <div>
        <Users size={18} weight="fill" />
        <span>{user.followers} seguidores</span>
      </div>
    </ProfileInfo>
  )
}