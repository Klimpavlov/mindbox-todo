import React, { FC } from 'react';

interface TodoItemProps {
    id: string;
    text: string;
    completed: boolean;
    removeTodo: (id: string) => void;
    toggleTodoComplete: (id: string) => void;
}

const TodoItem: FC<TodoItemProps> = ({ id, text, completed, removeTodo, toggleTodoComplete }) => {
    return (
        <li>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => toggleTodoComplete(id)}
            />
            <span>{text}</span>
            <span onClick={() => removeTodo(id)}>&times;</span>
        </li>
    );
};

export default TodoItem;
