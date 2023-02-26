import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  border-radius: 5px;
  padding: 20px;
  margin-top: 15px;
  background-image: url("https://img.freepik.com/free-photo/crumpled-yellow-paper-background-close-up_60487-2390.jpg?size=626&ext=jpg");
  transition: 0.2s;

  &:hover{
    box-shadow: 0 0 5px black;
    transform: scale(1.03);
  }
  &.drag{
    box-shadow: 0 0 20px black;
  }
`;

export const Text = styled.span`
  flex: 1;
  padding: 5px;
  border: none;
  font-size: 20px;
  &:focus{
    outline: none;
  }
`;

export const IconsContainer = styled.div`

`;

export const Icon = styled.span`
  margin-left: 10px;
  font-size: 25px;
  cursor: pointer;
`;

export const EditTodo = styled.input`
  flex: 1;
  padding: 5px;
  border: none;
  font-size: 20px;
  &:focus{
    outline: none;
  }
`;

