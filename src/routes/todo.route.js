import { createTodo, getTodosByUser, patchTodoController, deleteTodoController,getTodoByStateController } from "../controllers/todo.controller.js";
import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { createTodoValidator, patchTodoValidator, todoStateValidator } from "../validators/todo.validator.js";
import { runValidation } from "../middlewares/validator.middleware.js";
import { idParamValidator } from "../validators/commond.validator.js";

const todoRoute = Router();

todoRoute.post(
  "/",
  authMiddleware,
  createTodoValidator,
  runValidation,
  createTodo
);
//TODO: Implement patchTodoValidator
todoRoute.patch("/:id", authMiddleware ,patchTodoValidator,idParamValidator, runValidation, patchTodoController);
todoRoute.get("/", authMiddleware, getTodosByUser);
todoRoute.delete("/:id", authMiddleware, deleteTodoController);
todoRoute.get("/:state", authMiddleware, todoStateValidator, runValidation,  getTodoByStateController);

export default todoRoute;
