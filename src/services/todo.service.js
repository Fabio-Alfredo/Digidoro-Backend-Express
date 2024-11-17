import { errorCodes } from "../utils/errors/error.code";
import { ServiceError } from "../utils/error";
import * as todoRepository from "../repositories/todo.respository.js";

export const createTodo = async (todo) => {
  try {
    const newTodo = await todoRepository.createTodo(todo);
    return newTodo;
  } catch (e) {
    throw new ServiceError(
      "Create todo error",
      e.code || errorCodes.TODO.FAILD_TO_ADD_TODO
    );
  }
};

export const getTodoById = async (todoId) => {
  try {
    const todo = await todoRepository.findTodoById(todoId);
    if (!todo) throw new Error(errorCodes.TODO.TODO_NOT_FOUND);
    return todo;
  } catch (e) {
    throw new ServiceError(
      "Get todo error",
      e.code || errorCodes.TODO.TODO_FECH_FAIL
    );
  }
};

export const getAllTodos = async () => {
  try {
    const todos = await todoRepository.findAllTodos();
    return todos;
  } catch (e) {
    throw new ServiceError(
      "Get all todos error",
      e.code || errorCodes.TODO.FAILD_TO_GET_ALL_TODOS
    );
  }
};

export const updateTodo = async (todoId, data) => {
  try {
    const todo = await todoRepository.updateTodo(todoId, data);
    if (!todo) throw new Error(errorCodes.TODO.TODO_NOT_FOUND);
    return todo;
  } catch (e) {
    throw new ServiceError(
      "Update todo error",
      e.code || errorCodes.TODO.FAILD_TO_UPDATE_TODO
    );
  }
};

export const deleteTodo = async (todoId) => {
  try {
    const todo = await todoRepository.deleteTodo(todoId);
    if (!todo) throw new Error(errorCodes.TODO.TODO_NOT_FOUND);
    return todo;
  } catch (e) {
    throw new ServiceError(
      "Delete todo error",
      e.code || errorCodes.TODO.FAILD_TO_DELETE_TODO
    );
  }
};

export const patchStateTodo = async (todoId, state) => {
  try {
    const todo = await todoRepository.patchStateTodo(todoId, state);
    if (!todo) throw new Error(errorCodes.TODO.TODO_NOT_FOUND);
    return todo;
  } catch (e) {
    throw new ServiceError(
      "Patch state todo error",
      e.code || errorCodes.TODO.FAILD_TO_PATCH_STATE_TODO
    );
  }
};
