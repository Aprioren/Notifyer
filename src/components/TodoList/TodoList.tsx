import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { ITodo } from '../../model';
import { SingleTodo } from '../SingleTodo/SingleTodo';
import { Container, Todos, ActiveTitle, RemoveTodo, RemoveTodoTitle} from './TodoList.styled';

interface IProps{
  todoList: ITodo[];
  setTodoList: React.Dispatch<React.SetStateAction<ITodo[]>>;
  completeTodos: ITodo[];
  setCompleteTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

export const TodoList:React.FC<IProps> =({ todoList, setTodoList,completeTodos,setCompleteTodos }:IProps)=>{
  return(
    <Container>
      <Droppable droppableId='Todos'>
        {(provided, snapshot)=>(
        <Todos
        ref={provided.innerRef}
        {...provided.droppableProps}
        className={`${snapshot.draggingOverWith ? 'dragactive' : ''}`}>
          <ActiveTitle>
            Active Tasts
          </ActiveTitle>
            {todoList.map((todo, index)=>(
            <SingleTodo
            index={index}
            todo={todo}
            key={todo.id}
            todoList={ todoList} 
            setTodoList={setTodoList}
            />
            ))}
            {provided.placeholder}
        </Todos>
        )} 
      </Droppable>

      <Droppable droppableId='RemoveTodo'>
        {(provided, snapshot)=>(
          <RemoveTodo 
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={`${snapshot.draggingOverWith ? 'dragcomplete' : ''}`}>
            <RemoveTodoTitle>
              Completed Tasts
            </RemoveTodoTitle>
              {completeTodos.map((todo, index)=>(
              <SingleTodo
              index={index} 
              todo={todo}
              key={todo.id}
              todoList={completeTodos} 
              setTodoList={setCompleteTodos}
              />
              ))}
            {provided.placeholder}
          </RemoveTodo>
        )}
      </Droppable>
    </Container>
  )
}