import { Link } from "react-router-dom";
import { Container, PostContent, PostHeader, PostHeaderContent, PostHeaderLinks, ProfileInfo } from "./styles";
import { ArrowSquareOut, Buildings, CaretLeft, GithubLogo, Users } from "phosphor-react";

export function Post() {
  return (
    <Container>
      <main>
        <PostHeader>
          <PostHeaderLinks>
            <Link to='/'>
              <CaretLeft size={12} weight="bold" />
              VOLTAR
            </Link>
            <Link to='https://github.com/pvillor' target="_blank">
              VER NO GITHUB
              <ArrowSquareOut size={12} weight="bold" />
            </Link>
          </PostHeaderLinks>
          <PostHeaderContent>
            <h1>JavaScript data types and data structures</h1>
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
          </PostHeaderContent>
        </PostHeader>

        <PostContent>
          <p>
            <strong>Programming languages all have built-in data structures, but these often differ from one language to another.</strong> This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

            Dynamic typing
            JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

            let foo = 42;   // foo is now a number
            foo = ‘bar’;    // foo is now a string
            foo = true;     // foo is now a boolean
          </p>
        </PostContent>
      </main>
    </Container>
  )
}