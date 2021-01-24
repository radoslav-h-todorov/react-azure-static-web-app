import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { Todo } from "../Todo";
import { editTodo } from "../TodoService";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request for \'editTodo()\'.');
    const todo = (req.body);

    if (todo) {
        const resultEdit = editTodo(todo as Todo);
        context.res = {
            status: 200,
            body: resultEdit
        };
        return;
    }

    context.res = {
        status: 400,
        body: "Body was not found."
    };
};

export default httpTrigger;