import { CharStreams, CodePointCharStream, CommonTokenStream, Token } from 'antlr4ts';
import { Ex1Lexer } from './Ex1Lexer.js';
import { Ex1Parser, DeclarationRuleContext, ExpressionAdditionContext, ExpressionDivisionContext, ExpressionMultiplyContext, ExpressionParanthesisContext, ExpressionRemContext, ExpressionSubtractionContext, MultilineProgContext, SinglelineProgContext, TypeFloatContext, TypeIntContext, TypeStringContext, ValueFloatContext, ValueIntContext, ValueStringContext, VariableDeclarationContext, ExpressionValueContext, ValueBooleanContext, TypeBooleanContext, ExpressionOrContext, ExpressionAndContext, ExpressionNotContext, ExpressionBoolParanthesisContext, ExpressionBoolValueContext, ListDeclarationContext, ListValuesContext, ValueVariableContext, FunctionContentContext, FunctionParameterContext, VariableAttributionContext, FunctionCallContext, VariableFunctionCallContext, ReturnStatementContext } from './Ex1Parser.js';
import { Ex1Listener } from './Ex1Listener.js';
import { Ex1Visitor } from './Ex1Visitor.js';
import * as fs from 'fs';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

let input: string = fs.readFileSync('./sample.txt').toString();
let inputStream: CodePointCharStream = CharStreams.fromString(input);
let lexer: Ex1Lexer = new Ex1Lexer(inputStream);
let tokenStream: CommonTokenStream = new CommonTokenStream(lexer);
let parser: Ex1Parser = new Ex1Parser(tokenStream);

let tree = parser.start();

abstract class ASTNode {
    constructor(){};
}

class StatementsNode extends ASTNode {
    constructor(public readonly statements: ASTNode[], public readonly line: number) {
        super();
    }
    toJSON() {
        return {
            id: "statements",
            statements: this.statements,
            line: this.line
        }
    }
}
class DeclarationNode extends ASTNode {
    constructor(public readonly variable_type: string, public readonly variable: string, public readonly op: string, public readonly value: Expression|ValueNode|FunctionCallNode,  public readonly line: number) {
        super();
    }
    toJSON() {
        return {
            id: "declaration",
            variable_type: this.variable_type,
            variable: this.variable,
            value: this.value,
            line: this.line
        }
    }
}

class ValueNode extends ASTNode {
    constructor(public readonly value: number|string|boolean, public readonly line: number) {
        super();
    }
    toJSON() {
        return {
            id: "value",
            value: this.value,
            line: this.line
        }
    }
}
class TypeNode extends ASTNode {
    constructor(public readonly type_name: string, public readonly line: number) {
        super();
    }
    toJSON() {
        return  {
            type: this.type_name,
            line: this.line
        }
    }
}
class Expression extends ASTNode {
    constructor(public readonly op: string, public readonly left: Expression, public readonly right: Expression, public readonly line: number) {
        super();
    }
    toJSON() {
        return {
            id: "expression",
            left: this.left,
            right: this.right,
            op: this.op,
            line: this.line
        }
    }
}
// EX 4
class ListNode extends ASTNode {
    constructor(public readonly type: string, public readonly name: string, public readonly values: ListValuesNode, public readonly line: number) {
        super();
    }
    toJSON() {
        return {
            return: "list_declaration",
            list_type: this.type,
            list_name: this.name,
            values: this.values,
            line: this.line
        }
    }
}
class ListValuesNode extends ASTNode {
    constructor(public readonly values: ValueNode[], public readonly line: number) {
        super();
    }
    toJSON() {
        return {
            values: this.values,
            line: this.line
        }
    }
}
class AttributionNode extends ASTNode {
    constructor(public readonly variable: string, public readonly value: Expression, public readonly line: number) {
        super();
    }
    toJSON() {
        return {
            id: "attribution",
            to: this.variable,
            from: this.value,
            line: this.line
        }
    }
}
//  EX 5
class FunctionNode extends ASTNode {
    constructor(public readonly function_name: string, public readonly parameters: ParameterNode[], public readonly instructions: StatementsNode, public readonly return_node: ReturnNode, public readonly line: number) {
        super();
    }
    toJSON() {
        return {
            id: "function",
            function_name: this.function_name,
            parameters: this.parameters,
            instructions: this.instructions,
            return: this.return_node,
            line: this.line
        }
    }
}
class ParameterNode extends ASTNode {
    constructor(public readonly type: string, public readonly value: string|number|boolean, public readonly line: number) {
        super();
    }
    toJSON() {
        return {
            id: "function_parameter",
            type: this.type,
            value: this.value,
            line: this.line
        }
    }
}
class ReturnNode extends ASTNode {
    constructor(public readonly statement: ASTNode, public readonly line: number) {
        super();
    }
    toJSON() {
        return {
            id: "return_node",
            return_statement: this.statement,
            line: this.line
        }
    }
}
class FunctionCallNode extends ASTNode {
    constructor(public readonly function_name: string, public readonly parameters: ValueNode[], public readonly line: number) {
        super();
    }
    toJSON() {
        return {
            id: "function_call", 
            function: this.function_name,
            parameters: this.parameters,
            line: this.line
        }
    }
}
class MyEx1Visitor extends AbstractParseTreeVisitor<ASTNode> implements Ex1Visitor<ASTNode> {
    defaultResult() {
        return new StatementsNode([], 0);
    }
    visitMultilineProg(ctx: MultilineProgContext): StatementsNode {
        //  EX 2
        let statements = [];
        for(let i = 0; i < ctx.statement().length; i++)
            statements[i] = this.visit(ctx.statement(i));
        if(statements) {
            return new StatementsNode(statements, 1);
        } else {
            throw new Error();
        }
    }
    visitSinglelineProg(ctx: SinglelineProgContext):ASTNode {
        return new StatementsNode([this.visit(ctx.statement())], 1);
    }
    visitVariableDeclaration(ctx: VariableDeclarationContext): DeclarationNode {
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
            ctx.INT_NUMBER().symbol.line
        );
    }
    visitValueVariable(ctx: ValueVariableContext): ValueNode {
        return new ValueNode(
            ctx.VARIABLE().text,
            ctx.VARIABLE().symbol.line
        );
    }
    visitValueFloat(ctx: ValueFloatContext): ValueNode {
        return new ValueNode(
            parseFloat(ctx.FLOAT_NUMBER().text),
            ctx.FLOAT_NUMBER().symbol.line
        );
    }
    visitValueString(ctx: ValueStringContext): ValueNode {
        return new ValueNode(
            ctx.STRING_TEXT().text,
            ctx.STRING_TEXT().symbol.line
        );
    }
    //  EX 1
    visitValueBoolean(ctx: ValueBooleanContext): ValueNode {
        return new ValueNode(
            ctx.BOOL_VALUE().text === "true" ? true : ctx.BOOL_VALUE().text === "false" ? false : ctx.BOOL_VALUE().text,
            ctx.BOOL_VALUE().symbol.line
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
    //  EX 1
    visitTypeBoolean(ctx: TypeBooleanContext): TypeNode {
        return new TypeNode(
            ctx.BOOLEAN().text,
            ctx.BOOLEAN().symbol.line
        )
    }
    visitExpressionMultiply(ctx: ExpressionMultiplyContext): Expression {
		const left = this.visit(ctx.expression(0));
		const right = this.visit(ctx.expression(1));
		const op = ctx._op;

		if(op.text) {
			return new Expression(op.text, left as Expression, right as Expression, ctx._op.line);
		} else throw new Error();
	}
    visitExpressionDivision(ctx: ExpressionDivisionContext): Expression {
		const left = this.visit(ctx.expression(0));
		const right = this.visit(ctx.expression(1));
		const op = ctx._op;

		if(op.text) {
			return new Expression(op.text, left as Expression, right as Expression, ctx._op.line);
		} else throw new Error();
	}
    visitExpressionRem(ctx: ExpressionRemContext): Expression {
		const left = this.visit(ctx.expression(0));
		const right = this.visit(ctx.expression(1));
		const op = ctx._op;

		if(op.text) {
			return new Expression(op.text, left as Expression, right as Expression, ctx._op.line);
		} else throw new Error();
	}
    visitExpressionAddition(ctx: ExpressionAdditionContext): Expression {
		const left = this.visit(ctx.expression(0));
		const right = this.visit(ctx.expression(1));
		const op = ctx._op;

		if(op.text) {
			return new Expression(op.text, left as Expression, right as Expression, ctx._op.line);
		} else throw new Error();
	}
    visitExpressionSubtraction(ctx: ExpressionSubtractionContext): Expression {
		const left = this.visit(ctx.expression(0));
		const right = this.visit(ctx.expression(1));
		const op = ctx._op;

		if(op.text) {
			return new Expression(op.text, left as Expression, right as Expression, ctx._op.line);
		} else throw new Error();
	}
    visitExpressionParanthesis(ctx: ExpressionParanthesisContext) {
        return this.visit(ctx.expression());
    }
    visitExpressionValue(ctx: ExpressionValueContext): ValueNode {
        let value = this.visit(ctx.value());
        if(value !== undefined) {
		    return new ValueNode((this.visit(ctx.value()) as ValueNode).value, ctx.value()._start.line);
        } else throw new Error();
	}
    //  EX1
    visitExpressionOr(ctx: ExpressionOrContext): Expression {
		const left = this.visit(ctx.expression_boolean(0));
		const right = this.visit(ctx.expression_boolean(1));
		const op = ctx._op;

		if(op.text) {
			return new Expression(op.text, left as Expression, right as Expression, ctx._op.line);
		} else throw new Error();
	}
    visitExpressionAnd(ctx: ExpressionAndContext): Expression {
		const left = this.visit(ctx.expression_boolean(0));
		const right = this.visit(ctx.expression_boolean(1));
		const op = ctx._op;

		if(op.text) {
			return new Expression(op.text, left as Expression, right as Expression, ctx._op.line);
		} else throw new Error();
	}
    visitExpressionNot(ctx: ExpressionNotContext): Expression {
		const left = null;
		const right = this.visit(ctx.expression_boolean());
		const op = ctx._op;

		if(op.text) {
			return new Expression(op.text, {} as Expression, right as Expression, ctx._op.line);
		} else throw new Error();
	}
    visitExpressionBoolParanthesis(ctx: ExpressionBoolParanthesisContext) {
        return this.visit(ctx.expression_boolean());
    }
    visitExpressionBoolValue(ctx: ExpressionBoolValueContext): ValueNode {
        let value = this.visit(ctx.value());
        if(value !== undefined) {
		    return new ValueNode((this.visit(ctx.value()) as ValueNode).value, ctx.value()._start.line);
        } else throw new Error();
	}
    //  EX 4
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
        for(let i = 0; i < ctx.value().length; i++) {
            let node = (this.visit(ctx.value(i)) as ValueNode);
            values[i] = new ValueNode(node.value, node.line);
        }
        if(values) {
            return new ListValuesNode(values, values[0].line);
        } else {
            throw new Error();
        }
    }
    visitVariableAttribution(ctx: VariableAttributionContext): AttributionNode {
        return new AttributionNode(
            ctx.VARIABLE().text,
            this.visit(ctx.expression()) as Expression,
            ctx.VARIABLE().symbol.line
        );
    }
    //  EX 5
    visitFunctionContent(ctx: FunctionContentContext): FunctionNode {
        let parameters = [];
        for(let i = 0; i < ctx.parameter().length; i++) {
            let node = (this.visit(ctx.parameter(i)) as ParameterNode);
            parameters[i] = new ParameterNode(node.type, node.value, node.line);
        }
        let instructions: any = [];
        for(let i = 0; i < ctx.statement().length; i++) {
            instructions[i] = this.visit(ctx.statement(i));
        }

        return new FunctionNode(
            ctx.FUNCTION().text,
            parameters,
            new StatementsNode(instructions, ctx.FUNCTION().symbol.line),
            new ReturnNode(this.visit(ctx.return_function()), ctx.return_function().start.line),
            ctx.FUNCTION().symbol.line
        );
    }
    visitReturnStatement(ctx: ReturnStatementContext): ReturnNode {
        return new ReturnNode(
            this.visit(ctx.statement()),
            ctx.RETURN().symbol.line
        )
    }
    visitVariableFunctionCall(ctx: VariableFunctionCallContext): DeclarationNode {
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
        for(let i = 0; i < ctx.value().length; i++) {
            let node = (this.visit(ctx.value(i)) as ValueNode);
            parameters[i] = new ValueNode(node.value, node.line);
        }
        return new FunctionCallNode (
            ctx.VARIABLE().text,
            parameters,
            ctx.VARIABLE().symbol.line
        );
    }
}
const visitor = new MyEx1Visitor();
console.log(JSON.stringify(visitor.visit(tree), null, 4));


