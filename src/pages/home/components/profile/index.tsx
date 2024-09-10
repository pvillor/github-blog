import { ArrowSquareOut, GithubLogo, Buildings, Users } from "phosphor-react";
import { Link } from "react-router-dom";
import { ProfileContainer, GitHubAccountDescriptions, GitHubAccount, ProfileInfo } from "../../styles";
import { useEffect, useState } from "react";
import { User } from "../..";
import { api } from "../../../../lib/axios";

export function Profile() {
  const [user, setUser] = useState<User>({
    name: '',
    bio: '',
    avatar_url: '',
    company: '',
    followers: 0,
    html_url: '',
    login: ''
  })

  async function fetchUser() {
    const response = await api.get('users/pvillor')

    setUser(response.data)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <ProfileContainer>
      <img src={user.avatar_url} alt="" />
      <div>
        <GitHubAccountDescriptions>
          <GitHubAccount>
            <h1>{user.name}</h1>
            <Link to={user.html_url} target="_blank">GITHUB <ArrowSquareOut size={12} weight="bold" /></Link>
          </GitHubAccount>
          <h2>{user.bio}</h2>
        </GitHubAccountDescriptions>
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
      </div>
    </ProfileContainer>
  )
}