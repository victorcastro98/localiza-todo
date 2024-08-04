import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../../pages/Home";
import TasksProviderMock from "../../__mocks__/TaskProviderMock";

const testHome = (
  <TasksProviderMock>
    <Home />
  </TasksProviderMock>
);

test("renders title", () => {
  const { getByText } = render(testHome);
  expect(getByText(/Lista de Tarefas/i)).toBeInTheDocument();
});

test("Add new task", () => {
  const { getByText, getByPlaceholderText, getByDisplayValue } = render(testHome);
  const input = getByPlaceholderText("digite nova tarefa");
  const addButton = getByText("Adicionar");

  fireEvent.change(input, { target: { value: "Nova tarefa" } });
  fireEvent.click(addButton);

  expect(getByDisplayValue("Nova tarefa")).toBeInTheDocument();
});

test("check task", () => {
  const { getByText, getByPlaceholderText, getAllByText} = render(testHome);

  const input = getByPlaceholderText("digite nova tarefa");
  const addButton = getByText("Adicionar");

  fireEvent.change(input, { target: { value: "Tarefa para marcar" } });
  fireEvent.click(addButton);

  const checkButton = getAllByText("Concluir")[1];
  fireEvent.click(checkButton);

  expect(getByText("Desmarcar")).toBeInTheDocument();

  const uncheckButton = getAllByText("Desmarcar")[0];
  fireEvent.click(uncheckButton);

  const { queryAllByText } = render(testHome);
  expect(queryAllByText("Desmarcar")).toHaveLength(0);
});

test("remove task", () => {
  const { getByText, getByPlaceholderText, getAllByText} = render(testHome);

  const input = getByPlaceholderText("digite nova tarefa");
  const addButton = getByText("Adicionar");

  fireEvent.change(input, { target: { value: "Tarefa para remover" } });
  fireEvent.click(addButton);

  expect(getAllByText("Remover").length >= 2);

  const deleteButton = getAllByText("Remover")[2];
  fireEvent.click(deleteButton);

  expect(getAllByText("Remover").length < 2);
});
