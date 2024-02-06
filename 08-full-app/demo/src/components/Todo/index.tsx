import { Todo } from "../../types";
import "./Todo.css"

interface Props {
	todo: Todo,
	toogleCompleted: (id: number) => void
}

export default function TodoComponent({ todo, toogleCompleted }: Props) {
	return <div onClick={() => { toogleCompleted(todo.id) }} className={`todo ${todo.completed ? "completed" : "uncompleted"}`}>
		<h3>{todo.title}</h3>
		<h4>for user {todo.userId}</h4>
	</div>
}