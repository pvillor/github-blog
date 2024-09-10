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
    margin-top: -6rem;
    padding-bottom: 2rem;
  }
`

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  padding: 2rem;

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

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const PostsHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  input {
    color: ${props => props.theme['base-text']};
    background-color: ${props => props.theme['base-input']};
    border: 1px solid ${props => props.theme['base-border']};
    border-radius: 6px;

    padding: 0.75rem 1rem;
  }

  &::placeholder {
    color: ${props => props.theme['base-label']};
  }
`

export const PostsInfo = styled.div`
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

export const PostsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`

export const PostContainer = styled.div`
  width: 26rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  border-radius: 10px;
  background-color: ${props => props.theme['base-post']};
  line-height: 160%;

  max-height: 16.25rem;

  p {
    font-size: 1rem;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  &:hover {
    box-shadow: 0 0 0 2px ${props => props.theme['base-label']};
    cursor: pointer;
  }
`

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  h2 {
    font-size: 1.25rem;
    color: ${props => props.theme['base-title']};
  }

  span {
    font-size: 14px;
    color: ${props => props.theme['base-span']};
    font-weight: 400;
    white-space: nowrap;
  }
`