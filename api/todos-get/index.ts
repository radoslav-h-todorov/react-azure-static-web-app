import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { getTodos } from "../TodoService";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request for \'getTodos()\'.');
    
    const todos = getTodos();
    context.res = {
        status: 200,
        body: todos
    };

};

export default httpTrigger;