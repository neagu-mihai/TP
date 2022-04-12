// Generated from ./Python.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { StartContext } from "./PythonParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `PythonParser`.
 */
export interface PythonListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `PythonParser.start`.
	 * @param ctx the parse tree
	 */
	enterStart?: (ctx: StartContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.start`.
	 * @param ctx the parse tree
	 */
	exitStart?: (ctx: StartContext) => void;
}

