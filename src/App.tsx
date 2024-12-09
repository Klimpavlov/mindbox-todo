import React, {useState} from 'react';
import './App.css';
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

function App() {
    interface Todo {
        id: string,
        text: string,
        completed: boolean
    }
    const [todos, setTodos] = useState<Todo[]>([]);
    const [text, setText] = useState<string>('');

    const addTodo = (): void => {
        if (text.trim().length) {
            setTodos([
                ...todos,
                {
                    id: new Date().toISOString(),
                    text,
                    completed: false
                }
            ])
            setText('');
        }
    }

    const removeTodo = (todoId: string) => {
        setTodos(todos.filter(todo => todo.id !== todoId))
    }

    const toggleTodoComplete = (todoId: string) => {
        setTodos(
            todos.map(todo => {
                if (todo.id !== todoId) return todo;
                return {
                    ...todo,
                    completed: !todo.completed
                }
            })
        )
    }


    return (
        <div className="App">
            <InputField text={text} handleInput={setText} handleSubmit={addTodo}/>
            <TodoList todos={todos}
                      toggleTodoComplete={toggleTodoComplete}
                      removeTodo={removeTodo}
            />
        </div>
    );
}

export default App;
