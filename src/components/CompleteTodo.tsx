import { FC, useState } from "react"

type Props = {
  completeTodo : string[];
  incompleteTodo: string[];
  setIncompleteTodo:(newIncompleteTodo:string[]) =>  void;
  setCompleteTodo:(newCompleteTodo:string[]) => void;
}
export const CompleteTodo:FC<Props> = (props) => {
  const {completeTodo,incompleteTodo,setIncompleteTodo,setCompleteTodo} = props;

  const onClickback = (index:number) => {
    const newCompleteTodo = [...completeTodo];
    newCompleteTodo.splice(index,1)
    const newIncompleteTodo = [...incompleteTodo,completeTodo[index]]
    setIncompleteTodo(newIncompleteTodo)
    setCompleteTodo(newCompleteTodo)
  }
  
  return(
    <>
    <h3>完了タスク</h3>
      <ul>
        {completeTodo.map((todo,index) => {
          return(
          <li key={todo}>
            <div>{todo}</div>
            <button onClick={() => onClickback(index)}>戻す</button>
          </li>
          )
        })}
      </ul>
    </>
  )
}