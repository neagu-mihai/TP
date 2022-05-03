import { CharStreams, CodePointCharStream, CommonTokenStream, Token } from 'antlr4ts';
import { AlfLexer } from './AlfLexer.js';
import { AlfParser, ExpressionAdditionContext, ExpressionDivisionContext, ExpressionMultiplyContext, ExpressionParanthesisContext, ExpressionRemContext, ExpressionSubtractionContext, MultilineProgContext, SinglelineProgContext, TypeFloatContext, TypeIntContext, TypeStringContext, ValueFloatContext, ValueIntContext, ValueStringContext, VariableDeclarationContext, ExpressionValueContext, ListDeclarationContext, ListValuesContext, ValueVariableContext, FunctionContentContext, FunctionParameterContext, VariableAttributionContext, FunctionCallContext, VariableFunctionCallContext } from './AlfParser.js';
import { AlfListener } from './AlfListener.js';
import { AlfVisitor } from './AlfVisitor.js';
import * as fs from 'fs';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

let input: string = fs.readFileSync('./ex4.txt').toString();
let inputStream: CodePointCharStream = CharStreams.fromString(input);
let lexer: AlfLexer = new AlfLexer(inputStream);
let tokenStream: CommonTokenStream = new CommonTokenStream(lexer);
let parser: AlfParser = new AlfParser(tokenStream);

let tree = parser.start();

export abstract class ASTNode {
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

export class ValueNode extends ASTNode {
    constructor(public readonly value: number | string, public readonly line: number, public readonly type: string, public  result?: NodeResult|string) {
        super();
    }
}
export class VariableNode extends ASTNode {
    constructor(public readonly value: number | string, public readonly line: number, public readonly type: string, public  result?: NodeResult|string) {
        super();
    }
}
class TypeNode extends ASTNode {
    constructor(public readonly type_name: string, public readonly line: number) {
        super();
    }
}
export class Expression extends ASTNode {
    constructor(public readonly op: string, public readonly left: Expression, public readonly right: Expression, public readonly line: number, public readonly type: string, public result?: NodeResult|string) {
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
export class AttributionNode extends ASTNode {
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
interface NodeResult {
    type: string,
    value: string,
    line?: number
}
export class FunctionCallNode extends ASTNode {
    constructor(public readonly function_name: string, public readonly parameters: ValueNode[], public readonly line: number, public result?: NodeResult|string) {
        super();
    }
}

interface VariableSymbolTable {
    type: string,
    value: any
}
interface FunctionSymbolTable {
    parameters: ParameterNode[]
}
let symbol_table: { [variable: string]: VariableSymbolTable | FunctionSymbolTable } = {};

function addVariableToSymbolTable(variable: string, type: string) {
    symbol_table[variable] = {
        type: type,
        value: undefined
    };
}

function isVariableDefined(variable: string) {
    if (symbol_table[variable])
        return true;
    else
        return false;
}

function checkTypes(left: ValueNode, right: ValueNode, op: string) {
    let type_left;
    let type_right;

    if (left.type === 'variable') {
        type_left = (symbol_table[left.value] as VariableSymbolTable).type;
    }
    else
        type_left = left.type;
    if (right.type === 'variable') {
        type_right = (symbol_table[right.value] as VariableSymbolTable).type;
    }
    else
        type_right = right.type;

    if ((type_left === 'string' || type_right === 'string') && op !== '+')
        return false;

    return true;
}

function getType(left: ValueNode, right: ValueNode, op: string) {
    let type_left;
    let type_right;

    if (left.type === 'variable') {
        type_left = (symbol_table[left.value] as VariableSymbolTable).type;
    }
    else
        type_left = left.type;
    if (right.type === 'variable') {
        type_right = (symbol_table[right.value] as VariableSymbolTable).type;
    }
    else
        type_right = right.type;

    if (type_left === type_right)
        return type_left;
    if (type_left === 'string' || type_right === 'string')
        return 'string';
    if (type_left === 'float' || type_right === 'float')
        return 'float';
    return 'unknown';
}

function addFunctionToSymbolTable(function_name: string, parameters: ParameterNode[]) {
    symbol_table[function_name] = {
        parameters: parameters
    };
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
        if (isVariableDefined(ctx.VARIABLE().text)) {
            throw new Error('The variable ' + ctx.VARIABLE().text + ' is already defined.');
        } else {
            let variable_type_in_symbol_table = (this.visit(ctx.type()) as TypeNode).type_name;
            if((ctx.VARIABLE().parent?.parent instanceof FunctionParameterContext) === true)  
                variable_type_in_symbol_table = 'parameter';
            else
                variable_type_in_symbol_table = (this.visit(ctx.type()) as TypeNode).type_name;
            addVariableToSymbolTable(ctx.VARIABLE().text, variable_type_in_symbol_table);
            return new DeclarationNode(
                (this.visit(ctx.type()) as TypeNode).type_name,
                ctx.VARIABLE().text,
                ctx.EQ().text,
                this.visit(ctx.expression()) as Expression,
                ctx.VARIABLE().symbol.line
            );
        }
    }
    visitValueInt(ctx: ValueIntContext): ValueNode {
        return new ValueNode(
            parseInt(ctx.INT_NUMBER().text),
            ctx.INT_NUMBER().symbol.line,
            'int'
        );
    }
    visitValueVariable(ctx: ValueVariableContext): ValueNode {
        let variable_type: string = '';
        if (!isVariableDefined(ctx.VARIABLE().text)) {
            variable_type = 'variable';
            addVariableToSymbolTable(ctx.VARIABLE().text, variable_type);
        } else {
            variable_type = (symbol_table[ctx.VARIABLE().text] as VariableSymbolTable).type;
        }
        return new ValueNode(
            ctx.VARIABLE().text,
            ctx.VARIABLE().symbol.line,
            variable_type
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

        if (op.text) {
            let type = getType(left as ValueNode, right as ValueNode, op.text);
            if (checkTypes(left as ValueNode, right as ValueNode, op.text)) {
                return new Expression(op.text, left as Expression, right as Expression, ctx._op.line, type);
            } else {
                throw new Error('ERROR: The types are not corresponding');
            }
        } else throw new Error();
    }
    visitExpressionDivision(ctx: ExpressionDivisionContext): Expression {
        const left = this.visit(ctx.expression(0));
        const right = this.visit(ctx.expression(1));
        const op = ctx._op;

        if (op.text) {
            let type = getType(left as ValueNode, right as ValueNode, op.text);
            if (checkTypes(left as ValueNode, right as ValueNode, op.text)) {
                return new Expression(op.text, left as Expression, right as Expression, ctx._op.line, type);
            } else {
                throw new Error('ERROR: The types are not corresponding');
            }
        } else throw new Error();
    }
    visitExpressionRem(ctx: ExpressionRemContext): Expression {
        const left = this.visit(ctx.expression(0));
        const right = this.visit(ctx.expression(1));
        const op = ctx._op;

        if (op.text) {
            let type = getType(left as ValueNode, right as ValueNode, op.text);
            if (checkTypes(left as ValueNode, right as ValueNode, op.text)) {
                return new Expression(op.text, left as Expression, right as Expression, ctx._op.line, type);
            } else {
                throw new Error('ERROR: The types are not corresponding');
            }
        } else throw new Error();
    }
    visitExpressionAddition(ctx: ExpressionAdditionContext): Expression {
        const left = this.visit(ctx.expression(0));
        const right = this.visit(ctx.expression(1));
        const op = ctx._op;

        if (op.text) {
            let type = getType(left as ValueNode, right as ValueNode, op.text);
            if (checkTypes(left as ValueNode, right as ValueNode, op.text)) {
                return new Expression(op.text, left as Expression, right as Expression, ctx._op.line, type);
            } else {
                throw new Error('ERROR: The types are not corresponding');
            }
        } else throw new Error();
    }
    visitExpressionSubtraction(ctx: ExpressionSubtractionContext): Expression {
        const left = this.visit(ctx.expression(0));
        const right = this.visit(ctx.expression(1));
        const op = ctx._op;

        if (op.text) {
            let type = getType(left as ValueNode, right as ValueNode, op.text);
            if (checkTypes(left as ValueNode, right as ValueNode, op.text)) {
                return new Expression(op.text, left as Expression, right as Expression, ctx._op.line, type);
            } else {
                throw new Error('ERROR: The types are not corresponding');
            }
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
        if (isVariableDefined(ctx.VARIABLE().text)) {
            throw new Error('ERROR: The variable ' + ctx.VARIABLE().text + ' is already defined.');
        } else {
            addVariableToSymbolTable(ctx.VARIABLE().text, (this.visit(ctx.expression()) as Expression).type);
            return new AttributionNode(
                ctx.VARIABLE().text,
                this.visit(ctx.expression()) as Expression,
                ctx.VARIABLE().symbol.line
            );
        }
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
        addFunctionToSymbolTable(ctx.VARIABLE().text, parameters);

        return new FunctionNode(
            ctx.VARIABLE().text,
            parameters,
            new StatementsNode(instructions, ctx.FUNCTION().symbol.line),
            new ReturnNode(this.visit(ctx.return_function()), ctx.return_function().start.line),
            ctx.FUNCTION().symbol.line
        );
    }
    visitVariableFunctionCall(ctx: VariableFunctionCallContext): DeclarationNode {
        if (isVariableDefined(ctx.VARIABLE().text)) {
            throw new Error('ERROR: The variable ' + ctx.VARIABLE().text + ' is already defined.');
        } else {
            addVariableToSymbolTable(ctx.VARIABLE().text, (this.visit(ctx.type()) as TypeNode).type_name);
            return new DeclarationNode(
                (this.visit(ctx.type()) as TypeNode).type_name,
                ctx.VARIABLE().text,
                ctx.EQ().text,
                this.visit(ctx.function_call()) as FunctionCallNode,
                ctx.VARIABLE().symbol.line
            );
        }
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

for(let key of Object.keys(symbol_table)) {
    if ((symbol_table[key] as VariableSymbolTable).type === 'parameter') {
        delete symbol_table[key];
    }
}

let symbol_tree = {
    ast,
    symbol_table
}

export default symbol_tree;
fs.writeFileSync('ast_output.json', JSON.stringify(symbol_tree, null, 4));

