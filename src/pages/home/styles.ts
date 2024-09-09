import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  main {
    width: 54rem;
    display: flex;
    flex-direction: column;
    gap: 4.5rem;
  }
`

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  padding: 2rem;
  margin-top: -6rem;

  background-color: ${props => props.theme['base-profile']};

  img {
    width: 9.25rem;
    height: 9.25rem;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    flex: 1;
  }
`

export const GitHubAccount = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 1.5rem;
    color: ${props => props.theme['base-title']};
    line-height: 130%;
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    line-height: 160%;
    font-weight: bold;
    font-size: 0.75rem;
    color: ${props => props.theme['blue']};
  }
`

export const GitHubAccountDescriptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h2 {
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;

    color: ${props => props.theme['base-text']};
  }
`

export const ProfileInfo = styled.div`
  display: flex;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const Posts = styled.div`
  display: flex;
  flex-direction: column;
`

export const PostsHeader = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    font-size: 18px;
    font-weight: 400;
    color: ${props => props.theme['base-subtitle']};
  }

  span {
    font-size: 14px;
    color: ${props => props.theme['base-span']};
  }
`