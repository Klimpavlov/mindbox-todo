import React, { FC } from 'react';

interface InputFieldProps {
    text: string;
    handleInput: (value: string) => void;
    handleSubmit: () => void;
}

const InputField: FC<InputFieldProps> = ({ text, handleInput, handleSubmit }) => {
    return (
        <div>
            <div>
                <input
                    className="border-none"
                    placeholder="Whats need to be done"
                    value={text}
                    onChange={(e) => handleInput(e.target.value)} // handleInput принимает строку
                />
                <button onClick={handleSubmit}>Add</button>
            </div>
        </div>
    );
};

export default InputField;
