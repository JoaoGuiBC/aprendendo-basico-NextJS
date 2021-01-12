import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8em;
    margin-bottom: 8em;
  }
`;

export const Title = styled.h1`
  font-size: 3em;
  text-align: center;
`;

export const TextContent = styled.p`
  font-size: 1.3em;
  margin-top: 1em;
`;

export const LinkToHome = styled.p`
  text-decoration: none;
  color: #8257e5;
  cursor: pointer;
  font-size: 1.4em;
  transition: color 0.2s;

  :hover{
    color: #5c20e6;
  }
`;
