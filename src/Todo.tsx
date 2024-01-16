import { useState } from "react"
import { CompleteTodo } from "./components/CompleteTodo"
import { InputTodo } from "./components/InputTodo"
import { IncompleteTodo } from "./components/IncompleteTodo"

export const Todo = () => {
  const [completeTodo,setCompleteTodo] = useState<string[]>([])
  const [incompleteTodo, setIncompleteTodo] = useState<string[]>([])
  return (
    <div>
      <InputTodo incompleteTodo={incompleteTodo}setIncompleteTodo={setIncompleteTodo}/>
      <IncompleteTodo incompleteTodo={incompleteTodo} completeTodo={completeTodo} setCompleteTodo={setCompleteTodo} setIncompleteTodo={setIncompleteTodo} />
      <CompleteTodo completeTodo={completeTodo} incompleteTodo={incompleteTodo} setIncompleteTodo={setIncompleteTodo} setCompleteTodo={setCompleteTodo} />
    </div>
  )
}