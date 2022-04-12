// Generated from ./Ex1.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `Ex1Parser`.
 */
export interface Ex1Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `expressionMultiply`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionMultiply?: (ctx: ExpressionMultiplyContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionMultiply`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionMultiply?: (ctx: ExpressionMultiplyContext) => void;

	/**
	 * Enter a parse tree produced by the `expressionDivision`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionDivision?: (ctx: ExpressionDivisionContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionDivision`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionDivision?: (ctx: ExpressionDivisionContext) => void;

	/**
	 * Enter a parse tree produced by the `expressionRem`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionRem?: (ctx: ExpressionRemContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionRem`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionRem?: (ctx: ExpressionRemContext) => void;

	/**
	 * Enter a parse tree produced by the `expressionAddition`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionAddition?: (ctx: ExpressionAdditionContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionAddition`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionAddition?: (ctx: ExpressionAdditionContext) => void;

	/**
	 * Enter a parse tree produced by the `expressionSubtraction`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionSubtraction?: (ctx: ExpressionSubtractionContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionSubtraction`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionSubtraction?: (ctx: ExpressionSubtractionContext) => void;

	/**
	 * Enter a parse tree produced by the `expressionParanthesis`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionParanthesis?: (ctx: ExpressionParanthesisContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionParanthesis`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionParanthesis?: (ctx: ExpressionParanthesisContext) => void;

	/**
	 * Enter a parse tree produced by the `expressionValue`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionValue?: (ctx: ExpressionValueContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionValue`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionValue?: (ctx: ExpressionValueContext) => void;

	/**
	 * Enter a parse tree produced by the `multilineProg`
	 * labeled alternative in `Ex1Parser.start`.
	 * @param ctx the parse tree
	 */
	enterMultilineProg?: (ctx: MultilineProgContext) => void;
	/**
	 * Exit a parse tree produced by the `multilineProg`
	 * labeled alternative in `Ex1Parser.start`.
	 * @param ctx the parse tree
	 */
	exitMultilineProg?: (ctx: MultilineProgContext) => void;

	/**
	 * Enter a parse tree produced by the `singlelineProg`
	 * labeled alternative in `Ex1Parser.start`.
	 * @param ctx the parse tree
	 */
	enterSinglelineProg?: (ctx: SinglelineProgContext) => void;
	/**
	 * Exit a parse tree produced by the `singlelineProg`
	 * labeled alternative in `Ex1Parser.start`.
	 * @param ctx the parse tree
	 */
	exitSinglelineProg?: (ctx: SinglelineProgContext) => void;

	/**
	 * Enter a parse tree produced by the `declarationRule`
	 * labeled alternative in `Ex1Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterDeclarationRule?: (ctx: DeclarationRuleContext) => void;
	/**
	 * Exit a parse tree produced by the `declarationRule`
	 * labeled alternative in `Ex1Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitDeclarationRule?: (ctx: DeclarationRuleContext) => void;

	/**
	 * Enter a parse tree produced by the `expressionRule`
	 * labeled alternative in `Ex1Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterExpressionRule?: (ctx: ExpressionRuleContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionRule`
	 * labeled alternative in `Ex1Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitExpressionRule?: (ctx: ExpressionRuleContext) => void;

	/**
	 * Enter a parse tree produced by the `attributionRule`
	 * labeled alternative in `Ex1Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterAttributionRule?: (ctx: AttributionRuleContext) => void;
	/**
	 * Exit a parse tree produced by the `attributionRule`
	 * labeled alternative in `Ex1Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitAttributionRule?: (ctx: AttributionRuleContext) => void;

	/**
	 * Enter a parse tree produced by the `variableAttribution`
	 * labeled alternative in `Ex1Parser.attribution`.
	 * @param ctx the parse tree
	 */
	enterVariableAttribution?: (ctx: VariableAttributionContext) => void;
	/**
	 * Exit a parse tree produced by the `variableAttribution`
	 * labeled alternative in `Ex1Parser.attribution`.
	 * @param ctx the parse tree
	 */
	exitVariableAttribution?: (ctx: VariableAttributionContext) => void;

	/**
	 * Enter a parse tree produced by the `typeInt`
	 * labeled alternative in `Ex1Parser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeInt?: (ctx: TypeIntContext) => void;
	/**
	 * Exit a parse tree produced by the `typeInt`
	 * labeled alternative in `Ex1Parser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeInt?: (ctx: TypeIntContext) => void;

	/**
	 * Enter a parse tree produced by the `typeFloat`
	 * labeled alternative in `Ex1Parser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeFloat?: (ctx: TypeFloatContext) => void;
	/**
	 * Exit a parse tree produced by the `typeFloat`
	 * labeled alternative in `Ex1Parser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeFloat?: (ctx: TypeFloatContext) => void;

	/**
	 * Enter a parse tree produced by the `typeString`
	 * labeled alternative in `Ex1Parser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeString?: (ctx: TypeStringContext) => void;
	/**
	 * Exit a parse tree produced by the `typeString`
	 * labeled alternative in `Ex1Parser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeString?: (ctx: TypeStringContext) => void;

	/**
	 * Enter a parse tree produced by the `variableDeclaration`
	 * labeled alternative in `Ex1Parser.declaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `variableDeclaration`
	 * labeled alternative in `Ex1Parser.declaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by the `valueInt`
	 * labeled alternative in `Ex1Parser.value`.
	 * @param ctx the parse tree
	 */
	enterValueInt?: (ctx: ValueIntContext) => void;
	/**
	 * Exit a parse tree produced by the `valueInt`
	 * labeled alternative in `Ex1Parser.value`.
	 * @param ctx the parse tree
	 */
	exitValueInt?: (ctx: ValueIntContext) => void;

	/**
	 * Enter a parse tree produced by the `valueFloat`
	 * labeled alternative in `Ex1Parser.value`.
	 * @param ctx the parse tree
	 */
	enterValueFloat?: (ctx: ValueFloatContext) => void;
	/**
	 * Exit a parse tree produced by the `valueFloat`
	 * labeled alternative in `Ex1Parser.value`.
	 * @param ctx the parse tree
	 */
	exitValueFloat?: (ctx: ValueFloatContext) => void;

	/**
	 * Enter a parse tree produced by the `valueString`
	 * labeled alternative in `Ex1Parser.value`.
	 * @param ctx the parse tree
	 */
	enterValueString?: (ctx: ValueStringContext) => void;
	/**
	 * Exit a parse tree produced by the `valueString`
	 * labeled alternative in `Ex1Parser.value`.
	 * @param ctx the parse tree
	 */
	exitValueString?: (ctx: ValueStringContext) => void;

	/**
	 * Enter a parse tree produced by the `valueVariable`
	 * labeled alternative in `Ex1Parser.value`.
	 * @param ctx the parse tree
	 */
	enterValueVariable?: (ctx: ValueVariableContext) => void;
	/**
	 * Exit a parse tree produced by the `valueVariable`
	 * labeled alternative in `Ex1Parser.value`.
	 * @param ctx the parse tree
	 */
	exitValueVariable?: (ctx: ValueVariableContext) => void;

	/**
	 * Enter a parse tree produced by `Ex1Parser.start`.
	 * @param ctx the parse tree
	 */
	enterStart?: (ctx: StartContext) => void;
	/**
	 * Exit a parse tree produced by `Ex1Parser.start`.
	 * @param ctx the parse tree
	 */
	exitStart?: (ctx: StartContext) => void;

	/**
	 * Enter a parse tree produced by `Ex1Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `Ex1Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `Ex1Parser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `Ex1Parser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `Ex1Parser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `Ex1Parser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `Ex1Parser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `Ex1Parser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Ex1Parser.attribution`.
	 * @param ctx the parse tree
	 */
	enterAttribution?: (ctx: AttributionContext) => void;
	/**
	 * Exit a parse tree produced by `Ex1Parser.attribution`.
	 * @param ctx the parse tree
	 */
	exitAttribution?: (ctx: AttributionContext) => void;
}

