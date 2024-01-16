import { FC } from "react"

type Props = {
  incompleteTodo:string[];
  completeTodo:string[];
  setCompleteTodo:(completeTodo:string[]) => void;
  setIncompleteTodo:(newIncomppleteTodo:string[]) => void;

}

export const IncompleteTodo:FC<Props> = (props) => {
  const {incompleteTodo,completeTodo,setCompleteTodo,setIncompleteTodo} = props;

  const onClickComplete = (index:number) => {
    const newIncompleteTodo = [...incompleteTodo];
    const [newCompleteTodo] = newIncompleteTodo.splice(index,1)
    setCompleteTodo([...completeTodo,newCompleteTodo])
    setIncompleteTodo(newIncompleteTodo)
  }

  const onClickDelete =(index:number) => {
    const newIncompleteTodo = [...incompleteTodo];
    newIncompleteTodo.splice(index,1)
    setIncompleteTodo(newIncompleteTodo)
  }
  
  return(
    <>
    <h3>未完了タスク</h3>
      <ul>
        {incompleteTodo.map((todo,index)=> {
          return(
            <li key={todo}>
              <div>{todo}</div>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}