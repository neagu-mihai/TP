import { ASTNode } from "./index";
import symbol_tree from './index';
import { Expression, ValueNode, AttributionNode, FunctionCallNode } from './index';

var variable_id = 0;

let results: string[] = [];
function nextVar ()
{
    return 'var' + variable_id++;
}
 
 
function writeThreeAddressCode (node: any)
{
    if (node.id === 'StatementsNode')
    {
        for (var statement of node.statements)
        {
            writeThreeAddressCode(statement);
        }
    } else if (node instanceof ValueNode) {
        node.result = node.value.toString();
    } else if (node instanceof Expression) {
        if (node.left !== undefined && node.right !== undefined)
        {
            writeThreeAddressCode (node.left);
            writeThreeAddressCode (node.right);
            node.result=nextVar();
            console.log(node.result+"="+node.left.result+node.op+node.right.result);

            /** TODO 4:
             *  Compute the result to be the next variable
             *  Log the result in T.A.C format
             */
            
        }
    } else if (node instanceof AttributionNode) {

        /** TODO 5:
         *  Write T.A.C recursively for the right side of the node (value)
         *  Log the result in T.A.C format
         */
        writeThreeAddressCode(node.value);
        console.log(node.variable+"="+node.value.result);
        
    } else if (node instanceof FunctionCallNode) {
        /** TODO 6: 
         *  Write T.A.C recursively for each parameter of the function
         *  Log the result in T.A.C format for function calls 
         */
        for (let i of node.parameters){
            writeThreeAddressCode(i);
        
        }
        for (let i of node.parameters){
            console.log("param "+i.result);
        }
        node.result=nextVar();
        console.log(node.result+"="+"call "+node.function_name+" , "+node.parameters.length);
    }
}

writeThreeAddressCode(symbol_tree.ast); 
