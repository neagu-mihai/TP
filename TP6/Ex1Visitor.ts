// Generated from ./Ex1.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ExpressionMultiplyContext } from "./Ex1Parser";
import { ExpressionDivisionContext } from "./Ex1Parser";
import { ExpressionRemContext } from "./Ex1Parser";
import { ExpressionAdditionContext } from "./Ex1Parser";
import { ExpressionSubtractionContext } from "./Ex1Parser";
import { ExpressionParanthesisContext } from "./Ex1Parser";
import { ExpressionValueContext } from "./Ex1Parser";
import { MultilineProgContext } from "./Ex1Parser";
import { SinglelineProgContext } from "./Ex1Parser";
import { DeclarationRuleContext } from "./Ex1Parser";
import { ExpressionRuleContext } from "./Ex1Parser";
import { AttributionRuleContext } from "./Ex1Parser";
import { VariableAttributionContext } from "./Ex1Parser";
import { TypeIntContext } from "./Ex1Parser";
import { TypeFloatContext } from "./Ex1Parser";
import { TypeStringContext } from "./Ex1Parser";
import { VariableDeclarationContext } from "./Ex1Parser";
import { ValueIntContext } from "./Ex1Parser";
import { ValueFloatContext } from "./Ex1Parser";
import { ValueStringContext } from "./Ex1Parser";
import { ValueVariableContext } from "./Ex1Parser";
import { StartContext } from "./Ex1Parser";
import { StatementContext } from "./Ex1Parser";
import { DeclarationContext } from "./Ex1Parser";
import { TypeContext } from "./Ex1Parser";
import { ValueContext } from "./Ex1Parser";
import { ExpressionContext } from "./Ex1Parser";
import { AttributionContext } from "./Ex1Parser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `Ex1Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface Ex1Visitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `expressionMultiply`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionMultiply?: (ctx: ExpressionMultiplyContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionDivision`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionDivision?: (ctx: ExpressionDivisionContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionRem`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionRem?: (ctx: ExpressionRemContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionAddition`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionAddition?: (ctx: ExpressionAdditionContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionSubtraction`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionSubtraction?: (ctx: ExpressionSubtractionContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionParanthesis`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionParanthesis?: (ctx: ExpressionParanthesisContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionValue`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionValue?: (ctx: ExpressionValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `multilineProg`
	 * labeled alternative in `Ex1Parser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultilineProg?: (ctx: MultilineProgContext) => Result;

	/**
	 * Visit a parse tree produced by the `singlelineProg`
	 * labeled alternative in `Ex1Parser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSinglelineProg?: (ctx: SinglelineProgContext) => Result;

	/**
	 * Visit a parse tree produced by the `declarationRule`
	 * labeled alternative in `Ex1Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarationRule?: (ctx: DeclarationRuleContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionRule`
	 * labeled alternative in `Ex1Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionRule?: (ctx: ExpressionRuleContext) => Result;

	/**
	 * Visit a parse tree produced by the `attributionRule`
	 * labeled alternative in `Ex1Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributionRule?: (ctx: AttributionRuleContext) => Result;

	/**
	 * Visit a parse tree produced by the `variableAttribution`
	 * labeled alternative in `Ex1Parser.attribution`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableAttribution?: (ctx: VariableAttributionContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeInt`
	 * labeled alternative in `Ex1Parser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeInt?: (ctx: TypeIntContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeFloat`
	 * labeled alternative in `Ex1Parser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeFloat?: (ctx: TypeFloatContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeString`
	 * labeled alternative in `Ex1Parser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeString?: (ctx: TypeStringContext) => Result;

	/**
	 * Visit a parse tree produced by the `variableDeclaration`
	 * labeled alternative in `Ex1Parser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by the `valueInt`
	 * labeled alternative in `Ex1Parser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueInt?: (ctx: ValueIntContext) => Result;

	/**
	 * Visit a parse tree produced by the `valueFloat`
	 * labeled alternative in `Ex1Parser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueFloat?: (ctx: ValueFloatContext) => Result;

	/**
	 * Visit a parse tree produced by the `valueString`
	 * labeled alternative in `Ex1Parser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueString?: (ctx: ValueStringContext) => Result;

	/**
	 * Visit a parse tree produced by the `valueVariable`
	 * labeled alternative in `Ex1Parser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueVariable?: (ctx: ValueVariableContext) => Result;

	/**
	 * Visit a parse tree produced by `Ex1Parser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;

	/**
	 * Visit a parse tree produced by `Ex1Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Ex1Parser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Ex1Parser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `Ex1Parser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Ex1Parser.attribution`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribution?: (ctx: AttributionContext) => Result;
}

