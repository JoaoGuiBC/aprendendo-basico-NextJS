import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchContainer = styled.form`
  display: flex;
  height: 56px;
  color: #8257e5;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 80px;
  left: 80px;
  z-index: 3;
  border-radius: 0 0 32px 32px;
  cursor: default;
  background: #282730;
  box-shadow: #18181a 0px 1rem 2rem;
`;

export const SearchInput = styled.input`
  font-size: 1.6em;
  border-radius: 21px 0 0 21px;
  background: #3b3842;
  color: #fdf0f0;
  height: 36px;
  padding: 0 8px 0 16px;
  outline: none;
  border: none;
`;

export const SearchButton = styled.button`
  font-size: 1.3em;
  background: #3b3842;
  line-height: 8px;
  border-radius: 0 21px 21px 0;
  padding-right: 8px;
  color: #fdf0f0;
  height: 36px;
  border: none;
  cursor: pointer;
`;

export const List = styled.ul`
  margin-top: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 55vw;

  li {
    margin: 16px 8px;
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
  width: 328px;
  border-radius: 21px;
  margin-bottom: 8px;
`;
