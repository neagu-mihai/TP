// Generated from ./Alf.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
	 * Enter a parse tree produced by the `expressionValue`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionValue?: (ctx: ExpressionValueContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionValue`
	 * labeled alternative in `AlfParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionValue?: (ctx: ExpressionValueContext) => void;

	/**
	 * Enter a parse tree produced by the `functionCall`
	 * labeled alternative in `AlfParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `functionCall`
	 * labeled alternative in `AlfParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by the `listValues`
	 * labeled alternative in `AlfParser.values`.
	 * @param ctx the parse tree
	 */
	enterListValues?: (ctx: ListValuesContext) => void;
	/**
	 * Exit a parse tree produced by the `listValues`
	 * labeled alternative in `AlfParser.values`.
	 * @param ctx the parse tree
	 */
	exitListValues?: (ctx: ListValuesContext) => void;

	/**
	 * Enter a parse tree produced by the `returnStatement`
	 * labeled alternative in `AlfParser.return_function`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `returnStatement`
	 * labeled alternative in `AlfParser.return_function`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `emptyReturn`
	 * labeled alternative in `AlfParser.return_function`.
	 * @param ctx the parse tree
	 */
	enterEmptyReturn?: (ctx: EmptyReturnContext) => void;
	/**
	 * Exit a parse tree produced by the `emptyReturn`
	 * labeled alternative in `AlfParser.return_function`.
	 * @param ctx the parse tree
	 */
	exitEmptyReturn?: (ctx: EmptyReturnContext) => void;

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
	 * Enter a parse tree produced by the `variableFunctionCall`
	 * labeled alternative in `AlfParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterVariableFunctionCall?: (ctx: VariableFunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `variableFunctionCall`
	 * labeled alternative in `AlfParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitVariableFunctionCall?: (ctx: VariableFunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by the `listDeclaration`
	 * labeled alternative in `AlfParser.list_declaration`.
	 * @param ctx the parse tree
	 */
	enterListDeclaration?: (ctx: ListDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `listDeclaration`
	 * labeled alternative in `AlfParser.list_declaration`.
	 * @param ctx the parse tree
	 */
	exitListDeclaration?: (ctx: ListDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by the `functionParameter`
	 * labeled alternative in `AlfParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterFunctionParameter?: (ctx: FunctionParameterContext) => void;
	/**
	 * Exit a parse tree produced by the `functionParameter`
	 * labeled alternative in `AlfParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitFunctionParameter?: (ctx: FunctionParameterContext) => void;

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
	 * Enter a parse tree produced by the `listRule`
	 * labeled alternative in `AlfParser.statement`.
	 * @param ctx the parse tree
	 */
	enterListRule?: (ctx: ListRuleContext) => void;
	/**
	 * Exit a parse tree produced by the `listRule`
	 * labeled alternative in `AlfParser.statement`.
	 * @param ctx the parse tree
	 */
	exitListRule?: (ctx: ListRuleContext) => void;

	/**
	 * Enter a parse tree produced by the `functionRule`
	 * labeled alternative in `AlfParser.statement`.
	 * @param ctx the parse tree
	 */
	enterFunctionRule?: (ctx: FunctionRuleContext) => void;
	/**
	 * Exit a parse tree produced by the `functionRule`
	 * labeled alternative in `AlfParser.statement`.
	 * @param ctx the parse tree
	 */
	exitFunctionRule?: (ctx: FunctionRuleContext) => void;

	/**
	 * Enter a parse tree produced by the `attributionRule`
	 * labeled alternative in `AlfParser.statement`.
	 * @param ctx the parse tree
	 */
	enterAttributionRule?: (ctx: AttributionRuleContext) => void;
	/**
	 * Exit a parse tree produced by the `attributionRule`
	 * labeled alternative in `AlfParser.statement`.
	 * @param ctx the parse tree
	 */
	exitAttributionRule?: (ctx: AttributionRuleContext) => void;

	/**
	 * Enter a parse tree produced by the `variableAttribution`
	 * labeled alternative in `AlfParser.attribution`.
	 * @param ctx the parse tree
	 */
	enterVariableAttribution?: (ctx: VariableAttributionContext) => void;
	/**
	 * Exit a parse tree produced by the `variableAttribution`
	 * labeled alternative in `AlfParser.attribution`.
	 * @param ctx the parse tree
	 */
	exitVariableAttribution?: (ctx: VariableAttributionContext) => void;

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
	 * Enter a parse tree produced by the `valueVariable`
	 * labeled alternative in `AlfParser.value`.
	 * @param ctx the parse tree
	 */
	enterValueVariable?: (ctx: ValueVariableContext) => void;
	/**
	 * Exit a parse tree produced by the `valueVariable`
	 * labeled alternative in `AlfParser.value`.
	 * @param ctx the parse tree
	 */
	exitValueVariable?: (ctx: ValueVariableContext) => void;

	/**
	 * Enter a parse tree produced by the `functionContent`
	 * labeled alternative in `AlfParser.function_declaration`.
	 * @param ctx the parse tree
	 */
	enterFunctionContent?: (ctx: FunctionContentContext) => void;
	/**
	 * Exit a parse tree produced by the `functionContent`
	 * labeled alternative in `AlfParser.function_declaration`.
	 * @param ctx the parse tree
	 */
	exitFunctionContent?: (ctx: FunctionContentContext) => void;

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

	/**
	 * Enter a parse tree produced by `AlfParser.attribution`.
	 * @param ctx the parse tree
	 */
	enterAttribution?: (ctx: AttributionContext) => void;
	/**
	 * Exit a parse tree produced by `AlfParser.attribution`.
	 * @param ctx the parse tree
	 */
	exitAttribution?: (ctx: AttributionContext) => void;

	/**
	 * Enter a parse tree produced by `AlfParser.list_declaration`.
	 * @param ctx the parse tree
	 */
	enterList_declaration?: (ctx: List_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `AlfParser.list_declaration`.
	 * @param ctx the parse tree
	 */
	exitList_declaration?: (ctx: List_declarationContext) => void;

	/**
	 * Enter a parse tree produced by the `values`
	 * labeled alternative in `AlfParser.startstartstatementstatementstatementstatementstatementdeclarationdeclarationtypetypetypevaluevaluevaluevalueexpressionexpressionexpressionexpressionexpressionexpressionexpressionattributionlist_declarationvaluesfunction_declarationparameterreturn_functionreturn_functionfunction_call`.
	 * @param ctx the parse tree
	 */
	enterValues?: (ctx: ValuesContext) => void;
	/**
	 * Exit a parse tree produced by the `values`
	 * labeled alternative in `AlfParser.startstartstatementstatementstatementstatementstatementdeclarationdeclarationtypetypetypevaluevaluevaluevalueexpressionexpressionexpressionexpressionexpressionexpressionexpressionattributionlist_declarationvaluesfunction_declarationparameterreturn_functionreturn_functionfunction_call`.
	 * @param ctx the parse tree
	 */
	exitValues?: (ctx: ValuesContext) => void;

	/**
	 * Enter a parse tree produced by `AlfParser.function_declaration`.
	 * @param ctx the parse tree
	 */
	enterFunction_declaration?: (ctx: Function_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `AlfParser.function_declaration`.
	 * @param ctx the parse tree
	 */
	exitFunction_declaration?: (ctx: Function_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `AlfParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `AlfParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;

	/**
	 * Enter a parse tree produced by `AlfParser.return_function`.
	 * @param ctx the parse tree
	 */
	enterReturn_function?: (ctx: Return_functionContext) => void;
	/**
	 * Exit a parse tree produced by `AlfParser.return_function`.
	 * @param ctx the parse tree
	 */
	exitReturn_function?: (ctx: Return_functionContext) => void;

	/**
	 * Enter a parse tree produced by `AlfParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterFunction_call?: (ctx: Function_callContext) => void;
	/**
	 * Exit a parse tree produced by `AlfParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitFunction_call?: (ctx: Function_callContext) => void;
}

