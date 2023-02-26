import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2f74c0;
  font-family: 'Neucha', cursive;
`;

export const Title = styled.span`
  margin: 30px 0;

  text-transform: uppercase;
  text-align: center;
  font-size: 40px;

  color:#FFF;

  z-index: 1;

  @media (max-width: 768px){
    &{
    margin: 15px 0;
    font-size: 35px;
    }
  };
`;