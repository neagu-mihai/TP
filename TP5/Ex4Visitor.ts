// Generated from ./Ex4.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ExpressionMultiplyContext } from "./Ex4Parser";
import { ExpressionDivisionContext } from "./Ex4Parser";
import { ExpressionRemContext } from "./Ex4Parser";
import { ExpressionAdditionContext } from "./Ex4Parser";
import { ExpressionSubtractionContext } from "./Ex4Parser";
import { ExpressionParanthesisContext } from "./Ex4Parser";
import { ExpressionValueContext } from "./Ex4Parser";
import { MultilineProgContext } from "./Ex4Parser";
import { SinglelineProgContext } from "./Ex4Parser";
import { DeclarationRuleContext } from "./Ex4Parser";
import { ExpressionRuleContext } from "./Ex4Parser";
import { TypeIntContext } from "./Ex4Parser";
import { TypeFloatContext } from "./Ex4Parser";
import { TypeStringContext } from "./Ex4Parser";
import { VariableDeclarationContext } from "./Ex4Parser";
import { ValueIntContext } from "./Ex4Parser";
import { ValueFloatContext } from "./Ex4Parser";
import { ValueStringContext } from "./Ex4Parser";
import { ValueVariableContext } from "./Ex4Parser";
import { StartContext } from "./Ex4Parser";
import { StatementContext } from "./Ex4Parser";
import { DeclarationContext } from "./Ex4Parser";
import { TypeContext } from "./Ex4Parser";
import { ValueContext } from "./Ex4Parser";
import { ExpressionContext } from "./Ex4Parser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `Ex4Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface Ex4Visitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `expressionMultiply`
	 * labeled alternative in `Ex4Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionMultiply?: (ctx: ExpressionMultiplyContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionDivision`
	 * labeled alternative in `Ex4Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionDivision?: (ctx: ExpressionDivisionContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionRem`
	 * labeled alternative in `Ex4Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionRem?: (ctx: ExpressionRemContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionAddition`
	 * labeled alternative in `Ex4Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionAddition?: (ctx: ExpressionAdditionContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionSubtraction`
	 * labeled alternative in `Ex4Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionSubtraction?: (ctx: ExpressionSubtractionContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionParanthesis`
	 * labeled alternative in `Ex4Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionParanthesis?: (ctx: ExpressionParanthesisContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionValue`
	 * labeled alternative in `Ex4Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionValue?: (ctx: ExpressionValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `multilineProg`
	 * labeled alternative in `Ex4Parser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultilineProg?: (ctx: MultilineProgContext) => Result;

	/**
	 * Visit a parse tree produced by the `singlelineProg`
	 * labeled alternative in `Ex4Parser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSinglelineProg?: (ctx: SinglelineProgContext) => Result;

	/**
	 * Visit a parse tree produced by the `declarationRule`
	 * labeled alternative in `Ex4Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarationRule?: (ctx: DeclarationRuleContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionRule`
	 * labeled alternative in `Ex4Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionRule?: (ctx: ExpressionRuleContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeInt`
	 * labeled alternative in `Ex4Parser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeInt?: (ctx: TypeIntContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeFloat`
	 * labeled alternative in `Ex4Parser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeFloat?: (ctx: TypeFloatContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeString`
	 * labeled alternative in `Ex4Parser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeString?: (ctx: TypeStringContext) => Result;

	/**
	 * Visit a parse tree produced by the `variableDeclaration`
	 * labeled alternative in `Ex4Parser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by the `valueInt`
	 * labeled alternative in `Ex4Parser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueInt?: (ctx: ValueIntContext) => Result;

	/**
	 * Visit a parse tree produced by the `valueFloat`
	 * labeled alternative in `Ex4Parser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueFloat?: (ctx: ValueFloatContext) => Result;

	/**
	 * Visit a parse tree produced by the `valueString`
	 * labeled alternative in `Ex4Parser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueString?: (ctx: ValueStringContext) => Result;

	/**
	 * Visit a parse tree produced by the `valueVariable`
	 * labeled alternative in `Ex4Parser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueVariable?: (ctx: ValueVariableContext) => Result;

	/**
	 * Visit a parse tree produced by `Ex4Parser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;

	/**
	 * Visit a parse tree produced by `Ex4Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Ex4Parser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Ex4Parser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `Ex4Parser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `Ex4Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
}

