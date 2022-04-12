import { CharStreams, CodePointCharStream, CommonTokenStream, Token } from 'antlr4ts';
import { AlfLexer } from './AlfLexer.js';
import { AlfParser, DeclarationRuleContext, ExpressionAdditionContext, ExpressionDivisionContext, ExpressionMultiplyContext, ExpressionParanthesisContext, ExpressionRemContext, ExpressionSubtractionContext, MultilineProgContext, NumberContext, SinglelineProgContext, TypeFloatContext, TypeIntContext, TypeStringContext, ValueFloatContext, ValueIntContext, ValueStringContext, VariableDeclarationContext } from './AlfParser.js';
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

// Parse the input, where `prog` is whatever entry point you defined
let tree = parser.start();
// console.log(tree);

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
    constructor(public readonly variable_type: string, public readonly variable: string, public readonly op: string, public readonly value: string|number) {
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
class MyAlfVisitor extends AbstractParseTreeVisitor<ASTNode> implements AlfVisitor<ASTNode> {
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
        console.log('single')
        return new StatementsNode([this.visit(ctx.statement())]);
    }
    visitVariableDeclaration(ctx: VariableDeclarationContext): DeclarationNode {
        return new DeclarationNode(
            (this.visit(ctx.type()) as TypeNode).type_name,
            ctx.VARIABLE().text,
            ctx.EQ().text,
            (this.visit(ctx.value()) as ValueNode).value
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
    visitNumber(ctx: NumberContext): ValueNode {
        let value = ctx.INT_NUMBER();
        if(value !== undefined) {
		    return new ValueNode(parseInt(value.text));
        } else throw new Error();
	}
}
const visitor = new MyAlfVisitor();
console.log(JSON.stringify(visitor.visit(tree), null, 4));
