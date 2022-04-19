// Generated from ./Alf.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ExpressionMultiplyContext } from "./AlfParser";
import { ExpressionDivisionContext } from "./AlfParser";
import { ExpressionRemContext } from "./AlfParser";
import { ExpressionAdditionContext } from "./AlfParser";
import { ExpressionSubtractionContext } from "./AlfParser";
import { ExpressionParanthesisContext } from "./AlfParser";
import { ExpressionValueContext } from "./AlfParser";
import { FunctionCallContext } from "./AlfParser";
import { ListValuesContext } from "./AlfParser";
import { ReturnStatementContext } from "./AlfParser";
import { EmptyReturnContext } from "./AlfParser";
import { MultilineProgContext } from "./AlfParser";
import { SinglelineProgContext } from "./AlfParser";
import { TypeIntContext } from "./AlfParser";
import { TypeFloatContext } from "./AlfParser";
import { TypeStringContext } from "./AlfParser";
import { VariableDeclarationContext } from "./AlfParser";
import { VariableFunctionCallContext } from "./AlfParser";
import { ListDeclarationContext } from "./AlfParser";
import { FunctionParameterContext } from "./AlfParser";
import { DeclarationRuleContext } from "./AlfParser";
import { ExpressionRuleContext } from "./AlfParser";
import { ListRuleContext } from "./AlfParser";
import { FunctionRuleContext } from "./AlfParser";
import { AttributionRuleContext } from "./AlfParser";
import { VariableAttributionContext } from "./AlfParser";
import { ValueIntContext } from "./AlfParser";
import { ValueFloatContext } from "./AlfParser";
import { ValueStringContext } from "./AlfParser";
import { ValueVariableContext } from "./AlfParser";
import { FunctionContentContext } from "./AlfParser";
import { StartContext } from "./AlfParser";
import { StatementContext } from "./AlfParser";
import { DeclarationContext } from "./AlfParser";
import { TypeContext } from "./AlfParser";
import { ValueContext } from "./AlfParser";
import { ExpressionContext } from "./AlfParser";
import { AttributionContext } from "./AlfParser";
import { List_declarationContext } from "./AlfParser";
import { ValuesContext } from "./AlfParser";
import { Function_declarationContext } from "./AlfParser";
import { ParameterContext } from "./AlfParser";
import { Return_functionContext } from "./AlfParser";
import { Function_callContext } from "./AlfParser";


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
	 * Visit a parse tree produced by the `expressionValue`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionValue?: (ctx: ExpressionValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionCall`
	 * labeled alternative in `AlfParser.function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by the `listValues`
	 * labeled alternative in `AlfParser.values`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListValues?: (ctx: ListValuesContext) => Result;

	/**
	 * Visit a parse tree produced by the `returnStatement`
	 * labeled alternative in `AlfParser.return_function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `emptyReturn`
	 * labeled alternative in `AlfParser.return_function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyReturn?: (ctx: EmptyReturnContext) => Result;

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
	 * Visit a parse tree produced by the `variableFunctionCall`
	 * labeled alternative in `AlfParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableFunctionCall?: (ctx: VariableFunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by the `listDeclaration`
	 * labeled alternative in `AlfParser.list_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListDeclaration?: (ctx: ListDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionParameter`
	 * labeled alternative in `AlfParser.parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionParameter?: (ctx: FunctionParameterContext) => Result;

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
	 * Visit a parse tree produced by the `listRule`
	 * labeled alternative in `AlfParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListRule?: (ctx: ListRuleContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionRule`
	 * labeled alternative in `AlfParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionRule?: (ctx: FunctionRuleContext) => Result;

	/**
	 * Visit a parse tree produced by the `attributionRule`
	 * labeled alternative in `AlfParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributionRule?: (ctx: AttributionRuleContext) => Result;

	/**
	 * Visit a parse tree produced by the `variableAttribution`
	 * labeled alternative in `AlfParser.attribution`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableAttribution?: (ctx: VariableAttributionContext) => Result;

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
	 * Visit a parse tree produced by the `valueVariable`
	 * labeled alternative in `AlfParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueVariable?: (ctx: ValueVariableContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionContent`
	 * labeled alternative in `AlfParser.function_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionContent?: (ctx: FunctionContentContext) => Result;

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

	/**
	 * Visit a parse tree produced by `AlfParser.attribution`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribution?: (ctx: AttributionContext) => Result;

	/**
	 * Visit a parse tree produced by `AlfParser.list_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList_declaration?: (ctx: List_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by the `values`
	 * labeled alternative in `AlfParser.startstartstatementstatementstatementstatementstatementdeclarationdeclarationtypetypetypevaluevaluevaluevalueexpressionexpressionexpressionexpressionexpressionexpressionexpressionattributionlist_declarationvaluesfunction_declarationparameterreturn_functionreturn_functionfunction_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValues?: (ctx: ValuesContext) => Result;

	/**
	 * Visit a parse tree produced by `AlfParser.function_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_declaration?: (ctx: Function_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `AlfParser.parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `AlfParser.return_function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturn_function?: (ctx: Return_functionContext) => Result;

	/**
	 * Visit a parse tree produced by `AlfParser.function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_call?: (ctx: Function_callContext) => Result;
}

