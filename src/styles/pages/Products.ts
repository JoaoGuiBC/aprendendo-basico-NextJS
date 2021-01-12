import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Body = styled.section`
  display: flex;

  margin-top: 10%;
  padding: 0 80px;

  @media (max-width: 1050px) {
    margin-top: 25%;
    padding: 40px 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1050px) {
    font-size: 0.7em;
  }

  div {
    display: flex;
    flex-direction: column;
    background: #282730;
    border-radius: 21px;
    padding: 0 50px;
  }
`;

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

  @media (max-width: 1050px) {
    height: auto;
  }
`;

export const Img = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 21px;
  margin-right: 88px;

  @media (max-width: 1050px) {
    margin: 0 0 32px 0;
  }

  @media (max-width: 400px) {
    width: 350px;
    height: 350px;
  }
`;

export const Description = styled.p`
  font-size: 1.4em;
  text-align: justify;
  line-height: 36px;
  margin: 36px 0 64px 0;
`;

export const Price = styled.p`
  font-size: 2em;
  text-align: center;
  line-height: 36px;
`;
