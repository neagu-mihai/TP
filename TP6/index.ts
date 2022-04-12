import { CharStreams, CodePointCharStream, CommonTokenStream, Token } from 'antlr4ts';
import { Ex1Lexer } from './Ex1Lexer.js';
import { Ex1Parser, ExpressionAdditionContext, ExpressionDivisionContext, ExpressionMultiplyContext, ExpressionParanthesisContext, ExpressionRemContext, ExpressionSubtractionContext, MultilineProgContext, SinglelineProgContext, TypeFloatContext, TypeIntContext, TypeStringContext, ValueFloatContext, ValueIntContext, ValueStringContext, VariableDeclarationContext, ExpressionValueContext, ValueVariableContext, VariableAttributionContext } from './Ex1Parser.js';
import { Ex1Visitor } from './Ex1Visitor.js';
import * as fs from 'fs';
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
        }
    }
}
class DeclarationNode extends ASTNode {
    constructor(public readonly variable_type: string, public readonly variable: string, public readonly op: string, public readonly value: Expression|ValueNode,  public readonly line: number) {
        super();
    }
    toJSON() {
        return {
            id: "declaration",
            variable_type: this.variable_type,
            variable: this.variable,
            value: this.value,
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
        }
    }
}
 
/** TODO 4: Create a class for List Nodes which will return a Node with the following properties
     * id => list_declaration
     * list_type => the actual type, which will be set in the Visitor as list
     * list_name => the name of the list
     * values => an array of values
*/
 
 
/** TODO 5: Create a class for Function Nodes which will return a Node with the following properties
 * id => function
 * function_name: the actual name of the function, taken from the variable
 * parameters: the list of the parsed nodes set as parameters
 * instructions: the list of the parsed nodes set as statements in the function
 * return: the parsed return node
 */
 
/** TODO 5: Recommandations for solving this exercice
 * You should create a class for the Parameter Node, with the following properties: 
        * id: function_parameter,
        * type: the type of the parameter from the declaration
        * value: the parsed value assigned to the parameter
 * You should create a class for the Return Node, with the following properties:
        * id: return_node
        * return_statement: the statement that will be parsed in the Visitor 
 */
 
class MyEx1Visitor extends AbstractParseTreeVisitor<ASTNode> implements Ex1Visitor<ASTNode> {
    defaultResult() {
        return new StatementsNode([], 0);
    }
    visitMultilineProg(ctx: MultilineProgContext): StatementsNode {
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
    /** TODO 1: Visit the boolean value */
 
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
    /** TODO 1: Visit the boolean type */
 
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
 
    /**TODO 1: Visit every type of boolean expression */
 
 
    /**TODO 4: Visit list declaration */
    visitVariableAttribution(ctx: VariableAttributionContext): AttributionNode {
        return new AttributionNode(
            ctx.VARIABLE().text,
            this.visit(ctx.expression()) as Expression,
            ctx.VARIABLE().symbol.line
        );
    }
 
    /**TODO 5: Visit function declaration and return node */
 
}
const visitor = new MyEx1Visitor();
console.log(JSON.stringify(visitor.visit(tree), null, 4))