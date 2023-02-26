import React, { useEffect, useRef, useState } from 'react';
import { ITodo } from '../../model';
import { EditTodo, Form, Icon, IconsContainer, Text } from './SingleTodo.styled';
import {AiFillEdit, AiFillDelete} from 'react-icons/ai';
import {MdDone} from 'react-icons/md';
import { TodoList } from '../TodoList/TodoList';
import { Draggable } from 'react-beautiful-dnd';
interface IProps{
  index: number;
  todo: ITodo;
  todoList: ITodo[];
  setTodoList: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

export const SingleTodo:React.FC<IProps> =({todo, todoList, setTodoList, index})=>{
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDone =(id:number)=>{
    setTodoList(todoList.map((todo)=> todo.id === id ? {...todo, isDone: !todo.isDone}: todo ))
  };

  const handleDelete =(id: number)=>{
    setTodoList(todoList.filter((todo)=> todo.id !== id));
  };  

  const handleEdit =(e:React.FormEvent, id: number)=>{
    e.preventDefault();
    setTodoList(todoList.map((todo) =>(
      todo.id === id ? {...todo,todo: editTodo}: todo
    )));
    setEdit(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);
  
  return(
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided, snapshot)=>(
        <Form
        className={`${snapshot.isDragging ? 'drag' : ''}`} 
        onSubmit={(e)=>handleEdit(e,todo.id)}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        >
          {edit?
          (
            <EditTodo ref={inputRef} value={editTodo} onChange={(e)=>setEditTodo(e.target.value)}/>
          ):
          (
          todo.isDone ?
            (
              <Text>
              {<s>{todo.todo}</s>}
              </Text>
            ):
            (
              <Text>
                {todo.todo}
              </Text>
            )  
          )
          }
          
          <IconsContainer>
            <Icon onClick={()=> {
              if(!edit && !todo.isDone){
                setEdit(!edit)
                }
              }}>
              <AiFillEdit/>
            </Icon>
            <Icon onClick={ ()=> handleDelete(todo.id) }>
              <AiFillDelete/>
            </Icon>
            <Icon onClick={ ()=> handleDone(todo.id) }>
              <MdDone/>
            </Icon>
          </IconsContainer>
        </Form>
      )}
    </Draggable>
  )
}