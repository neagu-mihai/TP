// Generated from ./Python.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { PythonListener } from "./PythonListener";
import { PythonVisitor } from "./PythonVisitor";


export class PythonParser extends Parser {
	public static readonly LP = 1;
	public static readonly RP = 2;
	public static readonly PLUS = 3;
	public static readonly MINUS = 4;
	public static readonly EGAL = 5;
	public static readonly COLON = 6;
	public static readonly SEMICOLON = 7;
	public static readonly LB = 8;
	public static readonly RB = 9;
	public static readonly LSP = 10;
	public static readonly RSP = 11;
	public static readonly MUL = 12;
	public static readonly DIV = 13;
	public static readonly REM = 14;
	public static readonly FOR = 15;
	public static readonly IF = 16;
	public static readonly ELSE = 17;
	public static readonly WHILE = 18;
	public static readonly CLASS = 19;
	public static readonly BREAK = 20;
	public static readonly DEF = 21;
	public static readonly IN = 22;
	public static readonly WS = 23;
	public static readonly INT = 24;
	public static readonly VARIABLE = 25;
	public static readonly FUNCTION_NAME = 26;
	public static readonly FLOAT = 27;
	public static readonly NEWLINE = 28;
	public static readonly STRING = 29;
	public static readonly RULE_start = 0;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'+'", "'-'", "'='", "':'", "';'", "'{'", "'}'", 
		"'['", "']'", "'*'", "'/'", "'%'", "'for'", "'if'", "'else'", "'while'", 
		"'class'", "'break'", "'def'", "'in'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "LP", "RP", "PLUS", "MINUS", "EGAL", "COLON", "SEMICOLON", 
		"LB", "RB", "LSP", "RSP", "MUL", "DIV", "REM", "FOR", "IF", "ELSE", "WHILE", 
		"CLASS", "BREAK", "DEF", "IN", "WS", "INT", "VARIABLE", "FUNCTION_NAME", 
		"FLOAT", "NEWLINE", "STRING",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(PythonParser._LITERAL_NAMES, PythonParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return PythonParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Python.g4"; }

	// @Override
	public get ruleNames(): string[] { return PythonParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return PythonParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(PythonParser._ATN, this);
	}
	// @RuleVersion(0)
	public start(): StartContext {
		let _localctx: StartContext = new StartContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, PythonParser.RULE_start);
		try {
			this.enterOuterAlt(_localctx, 1);
			// tslint:disable-next-line:no-empty
			{
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1F\x07\x04\x02" +
		"\t\x02\x03\x02\x03\x02\x03\x02\x02\x02\x02\x03\x02\x02\x02\x02\x02\x05" +
		"\x02\x04\x03\x02\x02\x02\x04\x05\x03\x02\x02\x02\x05\x03\x03\x02\x02\x02" +
		"\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!PythonParser.__ATN) {
			PythonParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(PythonParser._serializedATN));
		}

		return PythonParser.__ATN;
	}

}

export class StartContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_start; }
	// @Override
	public enterRule(listener: PythonListener): void {
		if (listener.enterStart) {
			listener.enterStart(this);
		}
	}
	// @Override
	public exitRule(listener: PythonListener): void {
		if (listener.exitStart) {
			listener.exitStart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PythonVisitor<Result>): Result {
		if (visitor.visitStart) {
			return visitor.visitStart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


