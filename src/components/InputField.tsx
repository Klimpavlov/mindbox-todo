import React, { FC } from 'react';
import {Button} from "./ui/button";
import {Input} from "./ui/input";

interface InputFieldProps {
    text: string;
    handleInput: (value: string) => void;
    handleSubmit: () => void;
}

const InputField: FC<InputFieldProps> = ({ text, handleInput, handleSubmit }) => {
    return (
        <div className="mb-6">
            <Input
                placeholder="What needs to be done?"
                value={text}
                onChange={(e) => handleInput(e.target.value)}
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button
                variant='default'
                size='sm'
                onClick={handleSubmit}
                className="mt-4 w-full py-2 rounded-lg text-white hover:bg-blue-700 transition"
            >
                Add
            </Button>
        </div>
    );
};

export default InputField;
