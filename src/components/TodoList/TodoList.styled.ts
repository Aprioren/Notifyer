import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  width: 95%;
  margin-top: 10px;

  @media (max-width:700px) {
    width: 95%;
    display: flex;
    flex-direction: column;
  }
`;

export const ActiveTitle = styled.span`
  font-size: 30px;
  color: white;
`;

export const Todos = styled.div`
  display: flex;
  flex-direction:column;

  width: 47.5%;
  padding: 15px;
  border-radius: 5px;
  background-color: rgb(50,195,205);

  @media (max-width: 1100px) {
    width: 45%;
  }

  @media (max-width: 700px) {
    width: 95%;
    margin-bottom: 10px;
  }

  &.dragactive{
    background-color: rgb(0, 221, 236);
  }
`;


export const RemoveTodo = styled.div`
  display: flex;
  width: 47.5%;
  flex-direction:column;
  padding: 15px;
  border-radius: 5px;
  background-color: rgb(235, 103, 80);
  @media (max-width: 700px) {
    width: 95%;
    margin-bottom: 10px;
  };

  &.dragcomplete{
    background-color: rgb(255, 38, 0);
  }
`;

export const RemoveTodoTitle = styled.span`
  font-size: 30px;
  color: white;
`;