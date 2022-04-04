// Generated from ./Alf.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { DeclarationStatementContext } from "./AlfParser";
import { TypeIntContext } from "./AlfParser";
import { TypeFloatContext } from "./AlfParser";
import { TypeStringContext } from "./AlfParser";
import { VariableDeclarationContext } from "./AlfParser";
import { ValueIntContext } from "./AlfParser";
import { ValueFloatContext } from "./AlfParser";
import { ValueStringContext } from "./AlfParser";
import { StartContext } from "./AlfParser";
import { DeclarationContext } from "./AlfParser";
import { TypeContext } from "./AlfParser";
import { ValueContext } from "./AlfParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `AlfParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface AlfVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `declarationStatement`
	 * labeled alternative in `AlfParser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarationStatement?: (ctx: DeclarationStatementContext) => Result;

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
	 * Visit a parse tree produced by `AlfParser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;

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
}

