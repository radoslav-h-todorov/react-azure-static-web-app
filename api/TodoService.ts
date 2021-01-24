import { data } from "./Data";
import { Todo } from "./Todo";

export const getTodos = () => {
    return data.todos;
}

export const addTodo = (task: Todo) => {
    task.id = data.todos.length + 1;
    data.todos.push(task);
    return {
        message: "task added",
        tasks: data.todos.length
    }
}

export const deteteTodo = (id: number) => {
    data.todos = data.todos.filter(todo => todo.id != id)
    return {
        message: "task deleted",
        tasks: data.todos.length
    }
}

export const editTodo = (task: Todo) => {
    data.todos = data.todos.map(todo => {
        if (todo.id === task.id) todo = task;
        return todo;
    });

    return {
        message: "task edited",
        tasks: data.todos.length
    }
}