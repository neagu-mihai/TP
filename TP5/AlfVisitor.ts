// Generated from ./Alf.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `AlfParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface AlfVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `expressionMultiply`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionMultiply?: (ctx: ExpressionMultiplyContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionDivision`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionDivision?: (ctx: ExpressionDivisionContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionRem`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionRem?: (ctx: ExpressionRemContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionAddition`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionAddition?: (ctx: ExpressionAdditionContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionSubtraction`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionSubtraction?: (ctx: ExpressionSubtractionContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionParanthesis`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionParanthesis?: (ctx: ExpressionParanthesisContext) => Result;

	/**
	 * Visit a parse tree produced by the `number`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by the `variable`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable?: (ctx: VariableContext) => Result;

	/**
	 * Visit a parse tree produced by the `multilineProg`
	 * labeled alternative in `AlfParser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultilineProg?: (ctx: MultilineProgContext) => Result;

	/**
	 * Visit a parse tree produced by the `singlelineProg`
	 * labeled alternative in `AlfParser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSinglelineProg?: (ctx: SinglelineProgContext) => Result;

	/**
	 * Visit a parse tree produced by the `declarationRule`
	 * labeled alternative in `AlfParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarationRule?: (ctx: DeclarationRuleContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionRule`
	 * labeled alternative in `AlfParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionRule?: (ctx: ExpressionRuleContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeInt`
	 * labeled alternative in `AlfParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeInt?: (ctx: TypeIntContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeFloat`
	 * labeled alternative in `AlfParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeFloat?: (ctx: TypeFloatContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeString`
	 * labeled alternative in `AlfParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeString?: (ctx: TypeStringContext) => Result;

	/**
	 * Visit a parse tree produced by the `variableDeclaration`
	 * labeled alternative in `AlfParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by the `valueInt`
	 * labeled alternative in `AlfParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueInt?: (ctx: ValueIntContext) => Result;

	/**
	 * Visit a parse tree produced by the `valueFloat`
	 * labeled alternative in `AlfParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueFloat?: (ctx: ValueFloatContext) => Result;

	/**
	 * Visit a parse tree produced by the `valueString`
	 * labeled alternative in `AlfParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueString?: (ctx: ValueStringContext) => Result;

	/**
	 * Visit a parse tree produced by the `valuaVariable`
	 * labeled alternative in `AlfParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValuaVariable?: (ctx: ValuaVariableContext) => Result;

	/**
	 * Visit a parse tree produced by `AlfParser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;

	/**
	 * Visit a parse tree produced by `AlfParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `AlfParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `AlfParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `AlfParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `AlfParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
}

