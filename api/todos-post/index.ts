import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { Todo } from "../Todo";
import { addTodo, deteteTodo } from "../TodoService";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request for \'addTodo()\'.');
    const todo = (req.body);

    if (todo) {
        const resultAdd = addTodo(todo as Todo);
        context.res = {
            status: 201,
            body: resultAdd
        };
        return;
    }

    context.res = {
        status: 400,
        body: "Body was not found."
    };
};

export default httpTrigger;