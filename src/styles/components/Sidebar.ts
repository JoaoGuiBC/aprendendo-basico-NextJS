import styled from 'styled-components';


// #3b3842;

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 248px;
  position: fixed;
  left: 80px;
  top: 96px;
  padding: 8px 16px;
  border-radius: 24px;
`;

export const Title = styled.h2`
  color: #8257e5;
  margin: 16px 0;
`;

export const TitleLink = styled.a`
  font-size: 1.4em;
  text-decoration: none;
  color: #8257e5;
  cursor: pointer;
  transition: color 0.2s;

  :hover{
    color: #5c20e6;
  }
`;

export const ContentSection = styled.section``;

export const List = styled.ul``;

export const ProductLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 1.5em;
  margin-bottom: 8px;
  cursor: pointer;
  transition: color 0.2s;

  :hover {
    color: #c2b2b2;
  }
`;
