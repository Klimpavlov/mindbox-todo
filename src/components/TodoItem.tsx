import React, {FC} from 'react';

interface TodoItemProps {
    id: string;
    text: string;
    completed: boolean;
    removeTodo: (id: string) => void;
    toggleTodoComplete: (id: string) => void;
}

const TodoItem: FC<TodoItemProps> = ({id, text, completed, removeTodo, toggleTodoComplete}) => {
    return (
        <li className="flex justify-between items-center py-2 px-4 border-b border-gray-200 hover:bg-gray-100 rounded-md">
            <div className="flex items-center space-x-3">
                <div
                    className={`w-5 h-5 border-2 rounded-sm ${completed ? 'bg-blue-600 border-blue-600' : 'border-gray-400'} cursor-pointer flex justify-center items-center`}
                    onClick={() => toggleTodoComplete(id)}
                >
                    {completed && <div className="w-3 h-3 bg-white rounded-sm" />}
                </div>
                <span className={`text-lg font-medium ${completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                    {text}
                </span>
                <span
                    onClick={() => removeTodo(id)}
                    className="text-xl text-red-500 cursor-pointer hover:text-red-700"
                >
                    &times;
                </span>
            </div>
        </li>
    );
};

export default TodoItem;
