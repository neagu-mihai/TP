// Generated from ./Alf.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { AlfListener } from "./AlfListener";
import { AlfVisitor } from "./AlfVisitor";


export class AlfParser extends Parser {
	public static readonly WS = 1;
	public static readonly NEWLINE = 2;
	public static readonly VARIABLE = 3;
	public static readonly ADD = 4;
	public static readonly SUB = 5;
	public static readonly MUL = 6;
	public static readonly DIV = 7;
	public static readonly REM = 8;
	public static readonly INT = 9;
	public static readonly FLOAT = 10;
	public static readonly STRING = 11;
	public static readonly LP = 12;
	public static readonly RP = 13;
	public static readonly EQ = 14;
	public static readonly SEMICOLON = 15;
	public static readonly INT_NUMBER = 16;
	public static readonly FLOAT_NUMBER = 17;
	public static readonly STRING_TEXT = 18;
	public static readonly RULE_start = 0;
	public static readonly RULE_declaration = 1;
	public static readonly RULE_type = 2;
	public static readonly RULE_value = 3;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "declaration", "type", "value",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "'+'", "'-'", "'*'", "'/'", 
		"'%'", "'int'", "'float'", "'string'", "'('", "')'", "'='", "';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "WS", "NEWLINE", "VARIABLE", "ADD", "SUB", "MUL", "DIV", "REM", 
		"INT", "FLOAT", "STRING", "LP", "RP", "EQ", "SEMICOLON", "INT_NUMBER", 
		"FLOAT_NUMBER", "STRING_TEXT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(AlfParser._LITERAL_NAMES, AlfParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return AlfParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Alf.g4"; }

	// @Override
	public get ruleNames(): string[] { return AlfParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return AlfParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(AlfParser._ATN, this);
	}
	// @RuleVersion(0)
	public start(): StartContext {
		let _localctx: StartContext = new StartContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, AlfParser.RULE_start);
		try {
			_localctx = new DeclarationStatementContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 8;
			this.declaration();
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
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, AlfParser.RULE_declaration);
		try {
			_localctx = new VariableDeclarationContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 10;
			this.type();
			this.state = 11;
			this.match(AlfParser.VARIABLE);
			this.state = 12;
			this.match(AlfParser.EQ);
			this.state = 13;
			this.value();
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
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, AlfParser.RULE_type);
		try {
			this.state = 18;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AlfParser.INT:
				_localctx = new TypeIntContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 15;
				this.match(AlfParser.INT);
				}
				break;
			case AlfParser.FLOAT:
				_localctx = new TypeFloatContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 16;
				this.match(AlfParser.FLOAT);
				}
				break;
			case AlfParser.STRING:
				_localctx = new TypeStringContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 17;
				this.match(AlfParser.STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, AlfParser.RULE_value);
		try {
			this.state = 23;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AlfParser.INT_NUMBER:
				_localctx = new ValueIntContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 20;
				this.match(AlfParser.INT_NUMBER);
				}
				break;
			case AlfParser.FLOAT_NUMBER:
				_localctx = new ValueFloatContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 21;
				this.match(AlfParser.FLOAT_NUMBER);
				}
				break;
			case AlfParser.STRING_TEXT:
				_localctx = new ValueStringContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 22;
				this.match(AlfParser.STRING_TEXT);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x14\x1C\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x03\x02\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x05\x04\x15\n" +
		"\x04\x03\x05\x03\x05\x03\x05\x05\x05\x1A\n\x05\x03\x05\x02\x02\x02\x06" +
		"\x02\x02\x04\x02\x06\x02\b\x02\x02\x02\x02\x1B\x02\n\x03\x02\x02\x02\x04" +
		"\f\x03\x02\x02\x02\x06\x14\x03\x02\x02\x02\b\x19\x03\x02\x02\x02\n\v\x05" +
		"\x04\x03\x02\v\x03\x03\x02\x02\x02\f\r\x05\x06\x04\x02\r\x0E\x07\x05\x02" +
		"\x02\x0E\x0F\x07\x10\x02\x02\x0F\x10\x05\b\x05\x02\x10\x05\x03\x02\x02" +
		"\x02\x11\x15\x07\v\x02\x02\x12\x15\x07\f\x02\x02\x13\x15\x07\r\x02\x02" +
		"\x14\x11\x03\x02\x02\x02\x14\x12\x03\x02\x02\x02\x14\x13\x03\x02\x02\x02" +
		"\x15\x07\x03\x02\x02\x02\x16\x1A\x07\x12\x02\x02\x17\x1A\x07\x13\x02\x02" +
		"\x18\x1A\x07\x14\x02\x02\x19\x16\x03\x02\x02\x02\x19\x17\x03\x02\x02\x02" +
		"\x19\x18\x03\x02\x02\x02\x1A\t\x03\x02\x02\x02\x04\x14\x19";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!AlfParser.__ATN) {
			AlfParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(AlfParser._serializedATN));
		}

		return AlfParser.__ATN;
	}

}

export class StartContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AlfParser.RULE_start; }
	public copyFrom(ctx: StartContext): void {
		super.copyFrom(ctx);
	}
}
export class DeclarationStatementContext extends StartContext {
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
	constructor(ctx: StartContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AlfListener): void {
		if (listener.enterDeclarationStatement) {
			listener.enterDeclarationStatement(this);
		}
	}
	// @Override
	public exitRule(listener: AlfListener): void {
		if (listener.exitDeclarationStatement) {
			listener.exitDeclarationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AlfVisitor<Result>): Result {
		if (visitor.visitDeclarationStatement) {
			return visitor.visitDeclarationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AlfParser.RULE_declaration; }
	public copyFrom(ctx: DeclarationContext): void {
		super.copyFrom(ctx);
	}
}
export class VariableDeclarationContext extends DeclarationContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public VARIABLE(): TerminalNode { return this.getToken(AlfParser.VARIABLE, 0); }
	public EQ(): TerminalNode { return this.getToken(AlfParser.EQ, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(ctx: DeclarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AlfListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: AlfListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AlfVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AlfParser.RULE_type; }
	public copyFrom(ctx: TypeContext): void {
		super.copyFrom(ctx);
	}
}
export class TypeIntContext extends TypeContext {
	public INT(): TerminalNode { return this.getToken(AlfParser.INT, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AlfListener): void {
		if (listener.enterTypeInt) {
			listener.enterTypeInt(this);
		}
	}
	// @Override
	public exitRule(listener: AlfListener): void {
		if (listener.exitTypeInt) {
			listener.exitTypeInt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AlfVisitor<Result>): Result {
		if (visitor.visitTypeInt) {
			return visitor.visitTypeInt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeFloatContext extends TypeContext {
	public FLOAT(): TerminalNode { return this.getToken(AlfParser.FLOAT, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AlfListener): void {
		if (listener.enterTypeFloat) {
			listener.enterTypeFloat(this);
		}
	}
	// @Override
	public exitRule(listener: AlfListener): void {
		if (listener.exitTypeFloat) {
			listener.exitTypeFloat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AlfVisitor<Result>): Result {
		if (visitor.visitTypeFloat) {
			return visitor.visitTypeFloat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeStringContext extends TypeContext {
	public STRING(): TerminalNode { return this.getToken(AlfParser.STRING, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AlfListener): void {
		if (listener.enterTypeString) {
			listener.enterTypeString(this);
		}
	}
	// @Override
	public exitRule(listener: AlfListener): void {
		if (listener.exitTypeString) {
			listener.exitTypeString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AlfVisitor<Result>): Result {
		if (visitor.visitTypeString) {
			return visitor.visitTypeString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AlfParser.RULE_value; }
	public copyFrom(ctx: ValueContext): void {
		super.copyFrom(ctx);
	}
}
export class ValueIntContext extends ValueContext {
	public INT_NUMBER(): TerminalNode { return this.getToken(AlfParser.INT_NUMBER, 0); }
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AlfListener): void {
		if (listener.enterValueInt) {
			listener.enterValueInt(this);
		}
	}
	// @Override
	public exitRule(listener: AlfListener): void {
		if (listener.exitValueInt) {
			listener.exitValueInt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AlfVisitor<Result>): Result {
		if (visitor.visitValueInt) {
			return visitor.visitValueInt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ValueFloatContext extends ValueContext {
	public FLOAT_NUMBER(): TerminalNode { return this.getToken(AlfParser.FLOAT_NUMBER, 0); }
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AlfListener): void {
		if (listener.enterValueFloat) {
			listener.enterValueFloat(this);
		}
	}
	// @Override
	public exitRule(listener: AlfListener): void {
		if (listener.exitValueFloat) {
			listener.exitValueFloat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AlfVisitor<Result>): Result {
		if (visitor.visitValueFloat) {
			return visitor.visitValueFloat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ValueStringContext extends ValueContext {
	public STRING_TEXT(): TerminalNode { return this.getToken(AlfParser.STRING_TEXT, 0); }
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AlfListener): void {
		if (listener.enterValueString) {
			listener.enterValueString(this);
		}
	}
	// @Override
	public exitRule(listener: AlfListener): void {
		if (listener.exitValueString) {
			listener.exitValueString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AlfVisitor<Result>): Result {
		if (visitor.visitValueString) {
			return visitor.visitValueString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


