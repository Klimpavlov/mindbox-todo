import React, { FC } from 'react';
import TodoItem from "./TodoItem";

interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

interface TodoListProps {
    todos: Todo[];
    removeTodo: (id: string) => void;
    toggleTodoComplete: (id: string) => void;
}

const TodoList: FC<TodoListProps> = ({ todos, removeTodo, toggleTodoComplete }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    removeTodo={removeTodo}
                    toggleTodoComplete={toggleTodoComplete}
                    {...todo}
                />
            ))}
        </ul>
    );
};

export default TodoList;
