import { ArrowSquareOut, Buildings, GithubLogo, Users } from "phosphor-react";
import { Container, GitHubAccount, GitHubAccountDescriptions, Posts, PostsHeader, ProfileContainer, ProfileInfo } from "./styles";

export function Home() {
  return (
    <Container>
      <main>
        <ProfileContainer>
          <img src="https://github.com/pvillor.png" alt="" />
          <div>
            <GitHubAccountDescriptions>
              <GitHubAccount>
                <h1>Paulo Victor Guerra</h1>
                <a href="https://github.com/pvillor" target="_blank">GITHUB <ArrowSquareOut size={12} weight="fill" /></a>
              </GitHubAccount>
              <h2>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</h2>
            </GitHubAccountDescriptions>
            <ProfileInfo>
              <div>
                <GithubLogo size={18} weight="fill" />
                <span>pvillor</span>
              </div>
              <div>
                <Buildings size={18} weight="fill" />
                <span>Rocketseat</span>
              </div>
              <div>
                <Users size={18} weight="fill" />
                <span>32 seguidores</span>
              </div>
            </ProfileInfo>
          </div>
        </ProfileContainer>

        <Posts>
          <PostsHeader>
            <h3>Publicações</h3>
            <span>6 publicações</span>
          </PostsHeader>
          <input placeholder="Buscar conteúdo" />
          <div></div>
        </Posts>
      </main>
    </Container>
  )
}