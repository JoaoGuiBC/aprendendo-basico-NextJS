import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Body = styled.section``;

export const Title = styled.h1`
  font-size: 2.3em;
  height: 56px;
  color: #8257e5;
  text-align: center;
  line-height: 168%;
  position: fixed;
  right: 80px;
  left: 80px;
  z-index: 3;
  border-radius: 0 0 32px 32px;
  cursor: default;
  background: #282730;
  box-shadow: #18181a 0px 1rem 2rem;
`;

export const List = styled.ul`
  margin-top: 80px;

  li {
    margin-bottom: 32px;
    border-radius: 0 0 32px 32px;
    transition: all 0.2s;

    :hover {
      transform: translateY(-8px);
      box-shadow: #18181a 0px 1rem 2rem;
    }
  }
`;

export const ProductLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #3b3842;
  border: #3b3842 solid 3px;
  border-radius: 24px;
  font-size: 1.5em;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 280px;
  border-radius: 21px;
  margin-bottom: 8px;
`;
