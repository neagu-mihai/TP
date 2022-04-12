// Generated from ./Alf.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ExpressionMultiplyContext } from "./AlfParser";
import { ExpressionDivisionContext } from "./AlfParser";
import { ExpressionRemContext } from "./AlfParser";
import { ExpressionAdditionContext } from "./AlfParser";
import { ExpressionSubtractionContext } from "./AlfParser";
import { ExpressionParanthesisContext } from "./AlfParser";
import { NumberContext } from "./AlfParser";
import { VariableContext } from "./AlfParser";
import { MultilineProgContext } from "./AlfParser";
import { SinglelineProgContext } from "./AlfParser";
import { DeclarationRuleContext } from "./AlfParser";
import { ExpressionRuleContext } from "./AlfParser";
import { TypeIntContext } from "./AlfParser";
import { TypeFloatContext } from "./AlfParser";
import { TypeStringContext } from "./AlfParser";
import { VariableDeclarationContext } from "./AlfParser";
import { ValueIntContext } from "./AlfParser";
import { ValueFloatContext } from "./AlfParser";
import { ValueStringContext } from "./AlfParser";
import { ValuaVariableContext } from "./AlfParser";
import { StartContext } from "./AlfParser";
import { StatementContext } from "./AlfParser";
import { DeclarationContext } from "./AlfParser";
import { TypeContext } from "./AlfParser";
import { ValueContext } from "./AlfParser";
import { ExpressionContext } from "./AlfParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `AlfParser`.
 */
export interface AlfListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `expressionMultiply`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionMultiply?: (ctx: ExpressionMultiplyContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionMultiply`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionMultiply?: (ctx: ExpressionMultiplyContext) => void;

	/**
	 * Enter a parse tree produced by the `expressionDivision`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionDivision?: (ctx: ExpressionDivisionContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionDivision`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionDivision?: (ctx: ExpressionDivisionContext) => void;

	/**
	 * Enter a parse tree produced by the `expressionRem`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionRem?: (ctx: ExpressionRemContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionRem`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionRem?: (ctx: ExpressionRemContext) => void;

	/**
	 * Enter a parse tree produced by the `expressionAddition`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionAddition?: (ctx: ExpressionAdditionContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionAddition`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionAddition?: (ctx: ExpressionAdditionContext) => void;

	/**
	 * Enter a parse tree produced by the `expressionSubtraction`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionSubtraction?: (ctx: ExpressionSubtractionContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionSubtraction`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionSubtraction?: (ctx: ExpressionSubtractionContext) => void;

	/**
	 * Enter a parse tree produced by the `expressionParanthesis`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionParanthesis?: (ctx: ExpressionParanthesisContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionParanthesis`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionParanthesis?: (ctx: ExpressionParanthesisContext) => void;

	/**
	 * Enter a parse tree produced by the `number`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by the `number`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by the `variable`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 */
	enterVariable?: (ctx: VariableContext) => void;
	/**
	 * Exit a parse tree produced by the `variable`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 */
	exitVariable?: (ctx: VariableContext) => void;

	/**
	 * Enter a parse tree produced by the `multilineProg`
	 * labeled alternative in `AlfParser.start`.
	 * @param ctx the parse tree
	 */
	enterMultilineProg?: (ctx: MultilineProgContext) => void;
	/**
	 * Exit a parse tree produced by the `multilineProg`
	 * labeled alternative in `AlfParser.start`.
	 * @param ctx the parse tree
	 */
	exitMultilineProg?: (ctx: MultilineProgContext) => void;

	/**
	 * Enter a parse tree produced by the `singlelineProg`
	 * labeled alternative in `AlfParser.start`.
	 * @param ctx the parse tree
	 */
	enterSinglelineProg?: (ctx: SinglelineProgContext) => void;
	/**
	 * Exit a parse tree produced by the `singlelineProg`
	 * labeled alternative in `AlfParser.start`.
	 * @param ctx the parse tree
	 */
	exitSinglelineProg?: (ctx: SinglelineProgContext) => void;

	/**
	 * Enter a parse tree produced by the `declarationRule`
	 * labeled alternative in `AlfParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDeclarationRule?: (ctx: DeclarationRuleContext) => void;
	/**
	 * Exit a parse tree produced by the `declarationRule`
	 * labeled alternative in `AlfParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDeclarationRule?: (ctx: DeclarationRuleContext) => void;

	/**
	 * Enter a parse tree produced by the `expressionRule`
	 * labeled alternative in `AlfParser.statement`.
	 * @param ctx the parse tree
	 */
	enterExpressionRule?: (ctx: ExpressionRuleContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionRule`
	 * labeled alternative in `AlfParser.statement`.
	 * @param ctx the parse tree
	 */
	exitExpressionRule?: (ctx: ExpressionRuleContext) => void;

	/**
	 * Enter a parse tree produced by the `typeInt`
	 * labeled alternative in `AlfParser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeInt?: (ctx: TypeIntContext) => void;
	/**
	 * Exit a parse tree produced by the `typeInt`
	 * labeled alternative in `AlfParser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeInt?: (ctx: TypeIntContext) => void;

	/**
	 * Enter a parse tree produced by the `typeFloat`
	 * labeled alternative in `AlfParser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeFloat?: (ctx: TypeFloatContext) => void;
	/**
	 * Exit a parse tree produced by the `typeFloat`
	 * labeled alternative in `AlfParser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeFloat?: (ctx: TypeFloatContext) => void;

	/**
	 * Enter a parse tree produced by the `typeString`
	 * labeled alternative in `AlfParser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeString?: (ctx: TypeStringContext) => void;
	/**
	 * Exit a parse tree produced by the `typeString`
	 * labeled alternative in `AlfParser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeString?: (ctx: TypeStringContext) => void;

	/**
	 * Enter a parse tree produced by the `variableDeclaration`
	 * labeled alternative in `AlfParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `variableDeclaration`
	 * labeled alternative in `AlfParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by the `valueInt`
	 * labeled alternative in `AlfParser.value`.
	 * @param ctx the parse tree
	 */
	enterValueInt?: (ctx: ValueIntContext) => void;
	/**
	 * Exit a parse tree produced by the `valueInt`
	 * labeled alternative in `AlfParser.value`.
	 * @param ctx the parse tree
	 */
	exitValueInt?: (ctx: ValueIntContext) => void;

	/**
	 * Enter a parse tree produced by the `valueFloat`
	 * labeled alternative in `AlfParser.value`.
	 * @param ctx the parse tree
	 */
	enterValueFloat?: (ctx: ValueFloatContext) => void;
	/**
	 * Exit a parse tree produced by the `valueFloat`
	 * labeled alternative in `AlfParser.value`.
	 * @param ctx the parse tree
	 */
	exitValueFloat?: (ctx: ValueFloatContext) => void;

	/**
	 * Enter a parse tree produced by the `valueString`
	 * labeled alternative in `AlfParser.value`.
	 * @param ctx the parse tree
	 */
	enterValueString?: (ctx: ValueStringContext) => void;
	/**
	 * Exit a parse tree produced by the `valueString`
	 * labeled alternative in `AlfParser.value`.
	 * @param ctx the parse tree
	 */
	exitValueString?: (ctx: ValueStringContext) => void;

	/**
	 * Enter a parse tree produced by the `valuaVariable`
	 * labeled alternative in `AlfParser.value`.
	 * @param ctx the parse tree
	 */
	enterValuaVariable?: (ctx: ValuaVariableContext) => void;
	/**
	 * Exit a parse tree produced by the `valuaVariable`
	 * labeled alternative in `AlfParser.value`.
	 * @param ctx the parse tree
	 */
	exitValuaVariable?: (ctx: ValuaVariableContext) => void;

	/**
	 * Enter a parse tree produced by `AlfParser.start`.
	 * @param ctx the parse tree
	 */
	enterStart?: (ctx: StartContext) => void;
	/**
	 * Exit a parse tree produced by `AlfParser.start`.
	 * @param ctx the parse tree
	 */
	exitStart?: (ctx: StartContext) => void;

	/**
	 * Enter a parse tree produced by `AlfParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `AlfParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `AlfParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `AlfParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `AlfParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `AlfParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `AlfParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `AlfParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `AlfParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `AlfParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
}

