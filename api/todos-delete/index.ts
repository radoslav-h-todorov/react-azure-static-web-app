import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { deteteTodo } from "../TodoService";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request for \'deteteTodo()\'.');
    const id = (req.query.id || (req.body && req.body.id));

    if (id) {
        const resultDelete = deteteTodo(id as number);
        context.res = {
            status: 200,
            body: resultDelete
        };
        return;
    }

    context.res = {
        status: 400,
        body: "Id parameter was not found."
    };
};

export default httpTrigger;