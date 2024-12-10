import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import {Button} from "./components/ui/button";

function App() {
    interface Todo {
        id: string;
        text: string;
        completed: boolean;
    }

    const [todos, setTodos] = useState<Todo[]>([]);
    const [filteredTodos, setFilteredTodos] = useState<Todo[]>(todos);
    const [text, setText] = useState<string>("");

    const addTodo = (): void => {
        if (text.trim().length) {
            const newTodo = {
                id: new Date().toISOString(),
                text,
                completed: false,
            };
            setTodos([...todos, newTodo]);
            setFilteredTodos([...todos, newTodo]);
            setText("");
        }
    };

    const removeTodo = (todoId: string) => {
        const updatedTodos = todos.filter((todo) => todo.id !== todoId);
        setTodos(updatedTodos);
        setFilteredTodos(updatedTodos);
    };

    const toggleTodoComplete = (todoId: string) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
        setFilteredTodos(updatedTodos);
    };

    const activeTodos = todos.filter((todo) => !todo.completed)

    const showAll = (): void => {
        setFilteredTodos(todos);
    };

    const showActive = ():void => {
        setFilteredTodos(todos.filter((todo) => !todo.completed))
    }


    const showCompleted = (): void => {
        setFilteredTodos(todos.filter((todo) => todo.completed));
    };

    const clearCompleted = ():void => {
        const updatedTodos = todos.filter((todo) => !todo.completed)
        setTodos(updatedTodos);
        setFilteredTodos(updatedTodos);
    }

    return (
        // <div className="flex justify-center items-center min-h-screen bg-gray-50 py-8">
        //     <div className="w-1/2 bg-white p-6 rounded-lg shadow-lg">
        //         <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">TODOs</h1>
        //         <InputField text={text} handleInput={setText} handleSubmit={addTodo} />
        //         <TodoList
        //             todos={filteredTodos}
        //             toggleTodoComplete={toggleTodoComplete}
        //             removeTodo={removeTodo}
        //         />
        //         <div className="flex justify-between items-center mt-6">
        //             <span className="text-sm text-gray-600">{activeTodos.length} items left</span>
        //             <div className="space-x-2">
        //                 <Button variant="ghost" onClick={showAll}>All</Button>
        //                 <Button variant="ghost" onClick={showActive}>Active</Button>
        //                 <Button variant="ghost" onClick={showCompleted}>Completed</Button>
        //                 <Button variant="ghost" onClick={clearCompleted}>Clear completed</Button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="flex justify-center items-center min-h-screen bg-gray-50 py-8">
            <div className="w-1/2 bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">TODOs</h1>
                <InputField text={text} handleInput={setText} handleSubmit={addTodo} />
                {/* Scrollable list of todos */}
                <div className="h-60 overflow-y-auto mb-6">
                    <TodoList
                        todos={filteredTodos}
                        toggleTodoComplete={toggleTodoComplete}
                        removeTodo={removeTodo}
                    />
                </div>
                <div className="flex justify-between items-center mt-6">
                    <span className="text-sm text-gray-600">{activeTodos.length} items left</span>
                    <div className="space-x-2">
                        <Button variant="ghost" onClick={showAll}>All</Button>
                        <Button variant="ghost" onClick={showActive}>Active</Button>
                        <Button variant="ghost" onClick={showCompleted}>Completed</Button>
                        <Button variant="ghost" onClick={clearCompleted}>Clear completed</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
