import React,{useState}from 'react';
import { ITodo } from '../../model';
import { InputField } from '../InputField/InputField';
import { TodoList } from '../TodoList/TodoList';
import { Container, Title } from './App.styled';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

export const App: React.FC =()=> {
  const [todo, setTodo] = useState<string>('');
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [completeTodos, setCompleteTodos] = useState<ITodo[]>([]);

  const handleAdd =(e: React.FormEvent)=>{
    e.preventDefault();
    if(todo){
      setTodoList([...todoList,
        {
        id: Date.now(),
        todo,
        isDone: false,
      }])
      setTodo('');
    }
  };

  const onDragEnd =(result: DropResult)=>{
    const {source, destination} = result;
    let add, active = todoList;
    let complete = completeTodos;
    if(!destination) return;
    if(destination.droppableId === source.droppableId && destination.index === source.index) return;
    if(source.droppableId === 'Todos'){
      add = active[source.index];
      active.splice(source.index, 1)
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1)
    };
    if(destination.droppableId === 'Todos'){
      active.splice(destination.index, 0 , add);
    } else {
      complete.splice(destination.index, 0 , add);
    };
    setCompleteTodos(complete);
    setTodoList(active);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        <Title>Taskify</Title>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        <TodoList  
        todoList={todoList}
        setTodoList={setTodoList}
        completeTodos={completeTodos}
        setCompleteTodos={setCompleteTodos}
        />
      </Container>
    </DragDropContext>
  );
}
