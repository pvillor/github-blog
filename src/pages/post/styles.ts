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
    margin-top: -6rem;
    padding-bottom: 2rem;
  }
`

export const PostHeader = styled.div`
  background-color: ${props => props.theme['base-profile']};

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  padding: 2rem;
`

export const PostHeaderLinks = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    text-decoration: none;
    font-size: 12px;
    font-weight: bold;
    line-height: 1.6;
    color: ${props => props.theme['blue']};
  }
`

export const PostHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h1 {
    font-size: 1.5rem;
    line-height: 1.3;
    color: ${props => props.theme['base-title']};
  }
`

export const ProfileInfo = styled.div`
  display: flex;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${props => props.theme['base-span']};
    line-height: 1.6;
  }
`

export const PostContent = styled.div`
  padding: 2.5rem 2rem;
`