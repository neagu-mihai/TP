import { CharStreams, CodePointCharStream, CommonTokenStream, Token } from 'antlr4ts';
import { Ex4Lexer } from './Ex4Lexer.js';
import { Ex4Parser, DeclarationRuleContext, ExpressionAdditionContext, ExpressionDivisionContext, ExpressionMultiplyContext, ExpressionParanthesisContext, ExpressionRemContext, ExpressionSubtractionContext, MultilineProgContext, SinglelineProgContext, TypeFloatContext, TypeIntContext, TypeStringContext, ValueFloatContext, ValueIntContext, ValueStringContext, VariableDeclarationContext, ExpressionValueContext } from './Ex4Parser.js';
import { Ex4Listener } from './Ex4Listener.js';
import { Ex4Visitor } from './Ex4Visitor.js';
import * as fs from 'fs';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

let input: string = fs.readFileSync('./sample.txt').toString();
let inputStream: CodePointCharStream = CharStreams.fromString(input);
let lexer: Ex4Lexer = new Ex4Lexer(inputStream);
let tokenStream: CommonTokenStream = new CommonTokenStream(lexer);
let parser: Ex4Parser = new Ex4Parser(tokenStream);

let tree = parser.start();

abstract class ASTNode {
    constructor(){};
    
}

class StatementsNode extends ASTNode {
    constructor(public readonly statements: ASTNode[]) {
        super();
    }
    toJSON() {
        return {
            id: "statements",
            statements: this.statements
        }
    }
}
class DeclarationNode extends ASTNode {
    constructor(public readonly variable_type: string, public readonly variable: string, public readonly op: string, public readonly value: Expression|ValueNode) {
        super();
    }
    toJSON() {
        return {
            id: "declaration",
            variable_type: this.variable_type,
            variable: this.variable,
            value: this.value

        }
    }
}

class ValueNode extends ASTNode {
    constructor(public readonly value: number|string) {
        super();
    }
    toJSON() {
        return {
            id: "value",
            value: this.value
        }

    }
}
class TypeNode extends ASTNode {
    constructor(public readonly type_name: string) {
        super();
    }
    toJSON() {
        return  {
            type: this.type_name
        }
    }
    
}
class Expression extends ASTNode {
    constructor(public readonly op: string, public readonly left: Expression, public readonly right: Expression) {
        super();
    }
    toJSON() {
        return {
            left: this.left,
            right: this.right,
            op: this.op
        }
    }
}
class MyEx4Visitor extends AbstractParseTreeVisitor<ASTNode> implements Ex4Visitor<ASTNode> {
    defaultResult() {
        return new StatementsNode([]);
    }
    visitMultilineProg(ctx: MultilineProgContext): StatementsNode {
        let statements = [];
        for(let i = 0; i < ctx.statement().length; i++)
            statements[i] = this.visit(ctx.statement(i));
        if(statements) {
            return new StatementsNode(statements);
        } else {
            throw new Error();
        }
    }
    visitSinglelineProg(ctx: SinglelineProgContext):ASTNode {
        return new StatementsNode([this.visit(ctx.statement())]);
    }
    visitVariableDeclaration(ctx: VariableDeclarationContext): DeclarationNode {
        return new DeclarationNode(
            (this.visit(ctx.type()) as TypeNode).type_name,
            ctx.VARIABLE().text,
            ctx.EQ().text,
            this.visit(ctx.expression()) as Expression
        );
    }
    visitValueInt(ctx: ValueIntContext): ValueNode {
        return new ValueNode(
            parseInt(ctx.INT_NUMBER().text)
        );
    }
    visitValueFloat(ctx: ValueFloatContext): ValueNode {
        return new ValueNode(
            parseInt(ctx.FLOAT_NUMBER().text)
        );
    }
    visitValueString(ctx: ValueStringContext): ValueNode {
        return new ValueNode(
            ctx.STRING_TEXT().text
        );
    }
    visitTypeInt(ctx: TypeIntContext): TypeNode {
        return new TypeNode(
            ctx.INT().text
        )
    }
    visitTypeString(ctx: TypeStringContext): TypeNode {
        return new TypeNode(
            ctx.STRING().text
        )
    }
    visitTypeFloat(ctx: TypeFloatContext): TypeNode {
        return new TypeNode(
            ctx.FLOAT().text
        )
    }
    visitExpressionMultiply(ctx: ExpressionMultiplyContext): Expression {
		const left = this.visit(ctx.expression(0));
		const right = this.visit(ctx.expression(1));
		const op = ctx._op;

		if(op.text) {
			return new Expression(op.text, left as Expression, right as Expression);
		} else throw new Error();
	}
    visitExpressionDivision(ctx: ExpressionDivisionContext): Expression {
		const left = this.visit(ctx.expression(0));
		const right = this.visit(ctx.expression(1));
		const op = ctx._op;

		if(op.text) {
			return new Expression(op.text, left as Expression, right as Expression);
		} else throw new Error();
	}
    visitExpressionRem(ctx: ExpressionRemContext): Expression {
		const left = this.visit(ctx.expression(0));
		const right = this.visit(ctx.expression(1));
		const op = ctx._op;

		if(op.text) {
			return new Expression(op.text, left as Expression, right as Expression);
		} else throw new Error();
	}
    visitExpressionAddition(ctx: ExpressionAdditionContext): Expression {
		const left = this.visit(ctx.expression(0));
		const right = this.visit(ctx.expression(1));
		const op = ctx._op;

		if(op.text) {
			return new Expression(op.text, left as Expression, right as Expression);
		} else throw new Error();
	}
    visitExpressionSubtraction(ctx: ExpressionSubtractionContext): Expression {
		const left = this.visit(ctx.expression(0));
		const right = this.visit(ctx.expression(1));
		const op = ctx._op;

		if(op.text) {
			return new Expression(op.text, left as Expression, right as Expression);
		} else throw new Error();
	}
    visitExpressionParanthesis(ctx: ExpressionParanthesisContext) {
        return this.visit(ctx.expression());
    }
    visitExpressionValue(ctx: ExpressionValueContext): ValueNode {
        let value = this.visit(ctx.value());
        if(value !== undefined) {
		    return new ValueNode((this.visit(ctx.value()) as ValueNode).value);
        } else throw new Error();
	}
}
const visitor = new MyEx4Visitor();
console.log(JSON.stringify(visitor.visit(tree), null, 4));


