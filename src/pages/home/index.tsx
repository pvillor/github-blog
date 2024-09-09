import { ArrowSquareOut, Buildings, GithubLogo, Users } from "phosphor-react";
import { Container, GitHubAccount, GitHubAccountDescriptions, Post, PostHeader, Posts, PostsHeader, PostsInfo, PostsList, ProfileContainer, ProfileInfo } from "./styles";

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
            <PostsInfo>
              <h3>Publicações</h3>
              <span>6 publicações</span>
            </PostsInfo>
            <input placeholder="Buscar conteúdo" />
          </PostsHeader>
          <PostsList>
            {Array.from({ length: 6 }).map(post => {
              return (
                <Post>
                  <PostHeader>
                    <h2>JavaScript data types and data structures</h2>
                    <span>Há 1 dia</span>
                  </PostHeader>
                  <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

                    Dynamic typing
                    JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

                    let foo = 42; // foo is now a number
                    foo = 'bar'; // foo is now a string
                    foo = true; // foo is now a boolean</p>
                </Post>
              )
            })}
          </PostsList>
        </Posts>
      </main>
    </Container>
  )
}