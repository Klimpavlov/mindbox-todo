import React from 'react';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';
import {expect} from "@jest/globals";

describe("App Component", () => {
  it("adds a todo item", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("What needs to be done?");
    const addButton = screen.getByText("Add");
    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(addButton);
  });


  it("filter todos", async () => {
    render(<App />);
    const input = screen.getByPlaceholderText("What needs to be done?");
    const addButton = screen.getByText("Add");

    // Добавляем завершённую задачу
    fireEvent.change(input, { target: { value: "Completed Task" } });
    fireEvent.click(addButton);
    fireEvent.click(screen.getByText("Completed Task")); // Отмечаем как выполненную

    // Добавляем активную задачу
    fireEvent.change(input, { target: { value: "Active Task" } });
    fireEvent.click(addButton);

    // Нажимаем "Clear completed" и проверяем результат
    const clearButton = screen.getByText("Clear completed");
    fireEvent.click(clearButton);

    await waitFor(() => {
      expect(screen.queryByText("Completed Task")).toBeNull();
    }, { timeout: 2000 });
    expect(screen.getByText("Active Task")).toBeInTheDocument();
  });



});