import { FC, useState } from "react"

type Props = {
  incompleteTodo : string[]
  setIncompleteTodo : (todos:string[]) => void;
}

export const InputTodo:FC<Props> = (props) => {
  const {incompleteTodo,setIncompleteTodo} = props;
  const [todoText,setTodoText] = useState("")
  
  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value)
  }
  const onClickAdd = () => {
    if(todoText === "")return;
    const newIncompleteTodos = [...incompleteTodo,todoText]
    setIncompleteTodo(newIncompleteTodos)
    setTodoText("")
  }
  const onKeyDown = (key:string) => {
    if(key == 'Enter'){
      onClickAdd()
    }
  }
  return(
    <>
      <input type="text" placeholder="todo" onChange={onChange} value={todoText} onKeyDown={(e) => onKeyDown(e.key)}/>
      <button onClick={onClickAdd}>ADD</button>
    </>
  )
}