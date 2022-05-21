import styled from 'styled-components';


export const Box = styled.div `
  padding: 45px 45px;
  position: relative;
  bottom: 0px;
  width: 100%;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    `
