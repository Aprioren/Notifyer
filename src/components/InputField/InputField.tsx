import React, { useRef } from 'react';
import { Form,Input,Button  } from './InputField.syled';

interface IProps{
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent)=> void;
}

export const InputField:React.FC<IProps> = ({todo, setTodo, handleAdd}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
  <Form action="" onSubmit={(e)=> {handleAdd(e)
    inputRef.current?.blur();
  }}>
    <Input 
    ref={inputRef}
    type="input" 
    placeholder='Enter a task'
    value={todo}
    onChange={(e)=>setTodo(e.target.value)}
    />
    <Button className="input__submit" type='submit'>
      Go
    </Button>
  </Form>
  )
}

