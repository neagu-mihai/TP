import { CharStreams, CodePointCharStream, CommonTokenStream, Token } from 'antlr4ts';
import { AlfLexer } from './AlfLexer.js';
import { AlfParser, ExpressionAdditionContext, ExpressionDivisionContext, ExpressionMultiplyContext, ExpressionParanthesisContext, ExpressionRemContext, ExpressionSubtractionContext, MultilineProgContext, SinglelineProgContext, TypeFloatContext, TypeIntContext, TypeStringContext, ValueFloatContext, ValueIntContext, ValueStringContext, VariableDeclarationContext, ExpressionValueContext, ListDeclarationContext, ListValuesContext, ValueVariableContext, FunctionContentContext, FunctionParameterContext, VariableAttributionContext, FunctionCallContext, VariableFunctionCallContext } from './AlfParser.js';
import { AlfListener } from './AlfListener.js';
import { AlfVisitor } from './AlfVisitor.js';
import * as fs from 'fs';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
 
let input: string = fs.readFileSync('./sample.txt').toString();
let inputStream: CodePointCharStream = CharStreams.fromString(input);
let lexer: AlfLexer = new AlfLexer(inputStream);
let tokenStream: CommonTokenStream = new CommonTokenStream(lexer);
let parser: AlfParser = new AlfParser(tokenStream);
 
let tree = parser.start();
 
abstract class ASTNode {
    constructor() { };
    public toJSON(): any {
        return {
            ...this, id: this.constructor.name
        };
    }
}
 
class StatementsNode extends ASTNode {
    constructor(public readonly statements: ASTNode[], public readonly line: number) {
        super();
    }
 
}
class DeclarationNode extends ASTNode {
    constructor(public readonly variable_type: string, public readonly variable: string, public readonly op: string, public readonly value: Expression | ValueNode | FunctionCallNode, public readonly line: number) {
        super();
    }
}
 
class ValueNode extends ASTNode {
    constructor(public readonly value: number | string, public readonly line: number, public readonly type: string) {
        super();
    }
}
class TypeNode extends ASTNode {
    constructor(public readonly type_name: string, public readonly line: number) {
        super();
    }
}
class Expression extends ASTNode {
    constructor(public readonly op: string, public readonly left: Expression, public readonly right: Expression, public readonly line: number, public readonly type: string) {
        super();
    }
}
class ListNode extends ASTNode {
    constructor(public readonly type: string, public readonly name: string, public readonly values: ListValuesNode, public readonly line: number) {
        super();
    }
}
class ListValuesNode extends ASTNode {
    constructor(public readonly values: ValueNode[], public readonly line: number) {
        super();
    }
}
class AttributionNode extends ASTNode {
    constructor(public readonly variable: string, public readonly value: Expression, public readonly line: number) {
        super();
    }
}
class FunctionNode extends ASTNode {
    constructor(public readonly function_name: string, public readonly parameters: ParameterNode[], public readonly instructions: StatementsNode, public readonly return_node: ReturnNode, public readonly line: number) {
        super();
    }
}
class ParameterNode extends ASTNode {
    constructor(public readonly type: string, public readonly value: string | number, public readonly line: number) {
        super();
    }
}
class ReturnNode extends ASTNode {
    constructor(public readonly statement: ASTNode, public readonly line: number) {
        super();
    }
}
class FunctionCallNode extends ASTNode {
    constructor(public readonly function_name: string, public readonly parameters: ValueNode[], public readonly line: number) {
        super();
    }
}
 
/* TODO 1: Declare Symbol Table type and initialize object */
 
let symbol_table = {};
function addVariableToSymbolTable(variable: string, type: string) {
    /* symbol_table[variable] = {
        type: type,
        value: undefined
    }; */
}
 
/* TODO 2: Check if a variable was already defined in the Symbol Table */
function isVariableDefined(variable: string) {
 
}
 
/** TODO 3: Check if the types of the value nodes of an expression's operands are matching
  *         The only operation allowed between strings is addition
*/
function checkTypes(left: ValueNode, right: ValueNode, op: string) {
 
}
 
/** TODO 4: Get expression final type
 * If both operants have the same type, the expression will receive their type
 * If one of the operands is string in the addition expression, the expression will receive the type 'string'
 * If one of the operands is float, the expression will receive the type 'float'
 * Add a new parameter to the Expression class, type, which will be the expression final type
 */
 
function getType(left: ValueNode, right: ValueNode, op: string) {
 
}
 
/** TODO 5: Add the function parameters to the Symbol Table
 *  Each entry will have the function name as key and an object with the parameters list as value
 *  The function will also store the parameters as variables in the symbol table. This action is not necessary
 */
 
function addFunctionToSymbolTable(function_name: string, parameters: ParameterNode[]) {
 
}
class MyAlfVisitor extends AbstractParseTreeVisitor<ASTNode> implements AlfVisitor<ASTNode> {
    defaultResult() {
        return new StatementsNode([], 0);
    }
    visitMultilineProg(ctx: MultilineProgContext): StatementsNode {
        let statements = [];
        for (let i = 0; i < ctx.statement().length; i++)
            statements[i] = this.visit(ctx.statement(i));
        if (statements) {
            return new StatementsNode(statements, 1);
        } else {
            throw new Error();
        }
    }
    visitSinglelineProg(ctx: SinglelineProgContext): ASTNode {
        return new StatementsNode([this.visit(ctx.statement())], 1);
    }
    visitVariableDeclaration(ctx: VariableDeclarationContext): DeclarationNode {
        /* TODO 1 & 2 */
        return new DeclarationNode(
            (this.visit(ctx.type()) as TypeNode).type_name,
            ctx.VARIABLE().text,
            ctx.EQ().text,
            this.visit(ctx.expression()) as Expression,
            ctx.VARIABLE().symbol.line
        );
    }
    visitValueInt(ctx: ValueIntContext): ValueNode {
        return new ValueNode(
            parseInt(ctx.INT_NUMBER().text),
            ctx.INT_NUMBER().symbol.line,
            'int'
        );
    }
    visitValueVariable(ctx: ValueVariableContext): ValueNode {
        /* TODO 1 & 2 */
        return new ValueNode(
            ctx.VARIABLE().text,
            ctx.VARIABLE().symbol.line,
            'variable'
        );
    }
    visitValueFloat(ctx: ValueFloatContext): ValueNode {
        return new ValueNode(
            parseFloat(ctx.FLOAT_NUMBER().text),
            ctx.FLOAT_NUMBER().symbol.line,
            'float'
        );
    }
    visitValueString(ctx: ValueStringContext): ValueNode {
        return new ValueNode(
            ctx.STRING_TEXT().text,
            ctx.STRING_TEXT().symbol.line,
            'string'
        );
    }
    visitTypeInt(ctx: TypeIntContext): TypeNode {
        return new TypeNode(
            ctx.INT().text,
            ctx.INT().symbol.line
        )
    }
    visitTypeString(ctx: TypeStringContext): TypeNode {
        return new TypeNode(
            ctx.STRING().text,
            ctx.STRING().symbol.line
        )
    }
    visitTypeFloat(ctx: TypeFloatContext): TypeNode {
        return new TypeNode(
            ctx.FLOAT().text,
            ctx.FLOAT().symbol.line
        )
    }
    visitExpressionMultiply(ctx: ExpressionMultiplyContext): Expression {
        const left = this.visit(ctx.expression(0));
        const right = this.visit(ctx.expression(1));
        const op = ctx._op;
 
        /** TODO 3: Check the type for each operand Value Node 
         *  If the types are not matching, throw ERROR: The types are not corresponding
        */
        if (op.text) {
            /* TODO 4: Add expression final type */
            let type = '';
            return new Expression(op.text, left as Expression, right as Expression, ctx._op.line, type);
        } else throw new Error();
    }
    visitExpressionDivision(ctx: ExpressionDivisionContext): Expression {
        const left = this.visit(ctx.expression(0));
        const right = this.visit(ctx.expression(1));
        const op = ctx._op;
 
        /** TODO 3: Check the type for each operand Value Node 
         *  If the types are not matching, throw ERROR: The types are not corresponding
        */
 
         if (op.text) {
            /* TODO 4: Add expression final type */
            let type = '';
            return new Expression(op.text, left as Expression, right as Expression, ctx._op.line, type);
        } else throw new Error();
    }
    visitExpressionRem(ctx: ExpressionRemContext): Expression {
        const left = this.visit(ctx.expression(0));
        const right = this.visit(ctx.expression(1));
        const op = ctx._op;
 
        /** TODO 3: Check the type for each operand Value Node 
         *  If the types are not matching, throw ERROR: The types are not corresponding
        */
 
         if (op.text) {
            /* TODO 4: Add expression final type */
            let type = '';
            return new Expression(op.text, left as Expression, right as Expression, ctx._op.line, type);
        } else throw new Error();
    }
    visitExpressionAddition(ctx: ExpressionAdditionContext): Expression {
        const left = this.visit(ctx.expression(0));
        const right = this.visit(ctx.expression(1));
        const op = ctx._op;
 
        /** TODO 3: Check the type for each operand Value Node 
         *  If the types are not matching, throw ERROR: The types are not corresponding
        */
 
         if (op.text) {
            /* TODO 4: Add expression final type */
            let type = '';
            return new Expression(op.text, left as Expression, right as Expression, ctx._op.line, type);
        } else throw new Error();
    }
    visitExpressionSubtraction(ctx: ExpressionSubtractionContext): Expression {
        const left = this.visit(ctx.expression(0));
        const right = this.visit(ctx.expression(1));
        const op = ctx._op;
 
        /** TODO 3: Check the type for each operand Value Node 
         *  If the types are not matching, throw ERROR: The types are not corresponding
        */
 
         if (op.text) {
            /* TODO 4: Add expression final type */
            let type = '';
            return new Expression(op.text, left as Expression, right as Expression, ctx._op.line, type);
        } else throw new Error();
    }
    visitExpressionParanthesis(ctx: ExpressionParanthesisContext) {
        return this.visit(ctx.expression());
    }
    visitExpressionValue(ctx: ExpressionValueContext): ValueNode {
        let value = this.visit(ctx.value());
        if (value !== undefined) {
            return new ValueNode((this.visit(ctx.value()) as ValueNode).value, ctx.value()._start.line, (this.visit(ctx.value()) as ValueNode).type);
        } else throw new Error();
    }
    visitListDeclaration(ctx: ListDeclarationContext): ListNode {
        return new ListNode(
            'list',
            ctx.VARIABLE().text,
            this.visit(ctx.values()) as ListValuesNode,
            ctx.values().start.line
        );
    }
    visitListValues(ctx: ListValuesContext): ListValuesNode {
        let values: ValueNode[] = [];
        for (let i = 0; i < ctx.value().length; i++) {
            let node = (this.visit(ctx.value(i)) as ValueNode);
            values[i] = new ValueNode(node.value, node.line, node.type);
        }
        if (values) {
            return new ListValuesNode(values, values[0].line);
        } else {
            throw new Error();
        }
    }
    visitVariableAttribution(ctx: VariableAttributionContext): AttributionNode {
        /* TODO 1 & 2*/
 
        /* TODO 5: Set the type of the variable in the Symbol Tables as being the final type of the expression */
        return new AttributionNode(
            ctx.VARIABLE().text,
            this.visit(ctx.expression()) as Expression,
            ctx.VARIABLE().symbol.line
        );
    }
    visitFunctionContent(ctx: FunctionContentContext): FunctionNode {
        let parameters = [];
        for (let i = 0; i < ctx.parameter().length; i++) {
            let node = (this.visit(ctx.parameter(i)) as ParameterNode);
            parameters[i] = new ParameterNode(node.type, node.value, node.line);
        }
        let instructions = [];
        for (let i = 0; i < ctx.statement().length; i++) {
            instructions[i] = this.visit(ctx.statement(i));
        }
        /** TODO 5 */
 
        return new FunctionNode(
            ctx.VARIABLE().text,
            parameters,
            new StatementsNode(instructions, ctx.FUNCTION().symbol.line),
            new ReturnNode(this.visit(ctx.return_function()), ctx.return_function().start.line),
            ctx.FUNCTION().symbol.line
        );
    }
    visitVariableFunctionCall(ctx: VariableFunctionCallContext): DeclarationNode {
        /* TODO 1 & 2 */
        return new DeclarationNode(
            (this.visit(ctx.type()) as TypeNode).type_name,
            ctx.VARIABLE().text,
            ctx.EQ().text,
            this.visit(ctx.function_call()) as FunctionCallNode,
            ctx.VARIABLE().symbol.line
        );
    }
    visitFunctionCall(ctx: FunctionCallContext): FunctionCallNode {
        let parameters = [];
        for (let i = 0; i < ctx.value().length; i++) {
            let node = (this.visit(ctx.value(i)) as ValueNode);
            parameters[i] = new ValueNode(node.value, node.line, node.type);
        }
        return new FunctionCallNode(
            ctx.VARIABLE().text,
            parameters,
            ctx.VARIABLE().symbol.line
        );
    }
}
 
 
const visitor = new MyAlfVisitor();
 
let ast = visitor.visit(tree).toJSON();
 
let symbol_tree = {
    ast,
    symbol_table
}
 
console.log(JSON.stringify(symbol_tree, null, 4));
