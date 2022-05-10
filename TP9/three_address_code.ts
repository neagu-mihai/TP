import { VariableNode } from "./index";
import symbol_tree from './index';
import { Expression, ValueNode, AttributionNode, FunctionCallNode, FunctionNode } from './index';

 
function writeThreeAddressCode (node: any)
{
    if (node.id === 'StatementsNode')
    {
        for (var statement of node.statements)
        {
            writeThreeAddressCode(statement);
        }
    } else if (node instanceof ValueNode || node instanceof VariableNode) {
        /** TODO 4: Push the value on stack */
    } else if (node instanceof Expression) {
        if (node.left !== undefined && node.right !== undefined)
        {
            /** TODO 4: 
              * Write T.A.C recursively for both sides of expression 
              * Log the specific stack T.A.C operator according to the token operator value */    
        }
    } else if (node instanceof AttributionNode) {
        /** TODO 6: Write T.A.C using stack format */
    } else if (node instanceof FunctionCallNode) {
        /** TODO 5&7:
          * Update the Alf.g4 grammar to make it accept function calls inside expressions
          * Update index Visitor functions to visit function calls used in expressions 
          * Write T.A.C recursively for each parameter
          * Log the T.A.C using stack format
         */
    } else if (node instanceof FunctionNode)
    {
        /** TODO 8: Write T.A.C using stack format */
    }
}
writeThreeAddressCode(symbol_tree.ast); 
