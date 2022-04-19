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
	public static readonly FUNCTION = 3;
	public static readonly VARIABLE = 4;
	public static readonly ADD = 5;
	public static readonly SUB = 6;
	public static readonly MUL = 7;
	public static readonly DIV = 8;
	public static readonly REM = 9;
	public static readonly INT = 10;
	public static readonly FLOAT = 11;
	public static readonly STRING = 12;
	public static readonly LIST = 13;
	public static readonly LP = 14;
	public static readonly RP = 15;
	public static readonly EQ = 16;
	public static readonly SEMICOLON = 17;
	public static readonly LSP = 18;
	public static readonly RSP = 19;
	public static readonly COMMA = 20;
	public static readonly LB = 21;
	public static readonly RB = 22;
	public static readonly RETURN = 23;
	public static readonly INT_NUMBER = 24;
	public static readonly FLOAT_NUMBER = 25;
	public static readonly STRING_TEXT = 26;
	public static readonly RULE_start = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_declaration = 2;
	public static readonly RULE_type = 3;
	public static readonly RULE_value = 4;
	public static readonly RULE_expression = 5;
	public static readonly RULE_attribution = 6;
	public static readonly RULE_list_declaration = 7;
	public static readonly RULE_values = 8;
	public static readonly RULE_function_declaration = 9;
	public static readonly RULE_parameter = 10;
	public static readonly RULE_return_function = 11;
	public static readonly RULE_function_call = 12;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "statement", "declaration", "type", "value", "expression", "attribution", 
		"list_declaration", "values", "function_declaration", "parameter", "return_function", 
		"function_call",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'function'", undefined, "'+'", "'-'", 
		"'*'", "'/'", "'%'", "'int'", "'float'", "'string'", "'list'", "'('", 
		"')'", "'='", "';'", "'['", "']'", "','", "'{'", "'}'", "'return'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "WS", "NEWLINE", "FUNCTION", "VARIABLE", "ADD", "SUB", "MUL", 
		"DIV", "REM", "INT", "FLOAT", "STRING", "LIST", "LP", "RP", "EQ", "SEMICOLON", 
		"LSP", "RSP", "COMMA", "LB", "RB", "RETURN", "INT_NUMBER", "FLOAT_NUMBER", 
		"STRING_TEXT",
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
		let _la: number;
		try {
			this.state = 42;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				_localctx = new MultilineProgContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 36;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AlfParser.FUNCTION) | (1 << AlfParser.VARIABLE) | (1 << AlfParser.INT) | (1 << AlfParser.FLOAT) | (1 << AlfParser.STRING) | (1 << AlfParser.LIST) | (1 << AlfParser.LP) | (1 << AlfParser.INT_NUMBER) | (1 << AlfParser.FLOAT_NUMBER) | (1 << AlfParser.STRING_TEXT))) !== 0)) {
					{
					{
					this.state = 26;
					this.statement();
					this.state = 27;
					this.match(AlfParser.SEMICOLON);
					this.state = 31;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === AlfParser.NEWLINE) {
						{
						{
						this.state = 28;
						this.match(AlfParser.NEWLINE);
						}
						}
						this.state = 33;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 38;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 2:
				_localctx = new SinglelineProgContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 39;
				this.statement();
				this.state = 40;
				this.match(AlfParser.SEMICOLON);
				}
				break;
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, AlfParser.RULE_statement);
		try {
			this.state = 49;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				_localctx = new DeclarationRuleContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 44;
				this.declaration();
				}
				break;

			case 2:
				_localctx = new ExpressionRuleContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 45;
				this.expression(0);
				}
				break;

			case 3:
				_localctx = new ListRuleContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 46;
				this.list_declaration();
				}
				break;

			case 4:
				_localctx = new FunctionRuleContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 47;
				this.function_declaration();
				}
				break;

			case 5:
				_localctx = new AttributionRuleContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 48;
				this.attribution();
				}
				break;
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
		this.enterRule(_localctx, 4, AlfParser.RULE_declaration);
		try {
			this.state = 61;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				_localctx = new VariableDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 51;
				this.type();
				this.state = 52;
				this.match(AlfParser.VARIABLE);
				this.state = 53;
				this.match(AlfParser.EQ);
				this.state = 54;
				this.expression(0);
				}
				break;

			case 2:
				_localctx = new VariableFunctionCallContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 56;
				this.type();
				this.state = 57;
				this.match(AlfParser.VARIABLE);
				this.state = 58;
				this.match(AlfParser.EQ);
				this.state = 59;
				this.function_call();
				}
				break;
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
		this.enterRule(_localctx, 6, AlfParser.RULE_type);
		try {
			this.state = 66;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AlfParser.INT:
				_localctx = new TypeIntContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 63;
				this.match(AlfParser.INT);
				}
				break;
			case AlfParser.FLOAT:
				_localctx = new TypeFloatContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 64;
				this.match(AlfParser.FLOAT);
				}
				break;
			case AlfParser.STRING:
				_localctx = new TypeStringContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 65;
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
		this.enterRule(_localctx, 8, AlfParser.RULE_value);
		try {
			this.state = 72;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AlfParser.INT_NUMBER:
				_localctx = new ValueIntContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 68;
				this.match(AlfParser.INT_NUMBER);
				}
				break;
			case AlfParser.FLOAT_NUMBER:
				_localctx = new ValueFloatContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 69;
				this.match(AlfParser.FLOAT_NUMBER);
				}
				break;
			case AlfParser.STRING_TEXT:
				_localctx = new ValueStringContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 70;
				this.match(AlfParser.STRING_TEXT);
				}
				break;
			case AlfParser.VARIABLE:
				_localctx = new ValueVariableContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 71;
				this.match(AlfParser.VARIABLE);
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

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 10;
		this.enterRecursionRule(_localctx, 10, AlfParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 80;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AlfParser.LP:
				{
				_localctx = new ExpressionParanthesisContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 75;
				this.match(AlfParser.LP);
				this.state = 76;
				this.expression(0);
				this.state = 77;
				this.match(AlfParser.RP);
				}
				break;
			case AlfParser.VARIABLE:
			case AlfParser.INT_NUMBER:
			case AlfParser.FLOAT_NUMBER:
			case AlfParser.STRING_TEXT:
				{
				_localctx = new ExpressionValueContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 79;
				this.value();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 99;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 97;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionMultiplyContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpressionMultiplyContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, AlfParser.RULE_expression);
						this.state = 82;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 83;
						(_localctx as ExpressionMultiplyContext)._op = this.match(AlfParser.MUL);
						this.state = 84;
						(_localctx as ExpressionMultiplyContext)._right = this.expression(8);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionDivisionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpressionDivisionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, AlfParser.RULE_expression);
						this.state = 85;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 86;
						(_localctx as ExpressionDivisionContext)._op = this.match(AlfParser.DIV);
						this.state = 87;
						(_localctx as ExpressionDivisionContext)._right = this.expression(7);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionRemContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpressionRemContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, AlfParser.RULE_expression);
						this.state = 88;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 89;
						(_localctx as ExpressionRemContext)._op = this.match(AlfParser.REM);
						this.state = 90;
						(_localctx as ExpressionRemContext)._right = this.expression(6);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionAdditionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpressionAdditionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, AlfParser.RULE_expression);
						this.state = 91;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 92;
						(_localctx as ExpressionAdditionContext)._op = this.match(AlfParser.ADD);
						this.state = 93;
						(_localctx as ExpressionAdditionContext)._right = this.expression(5);
						}
						break;

					case 5:
						{
						_localctx = new ExpressionSubtractionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpressionSubtractionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, AlfParser.RULE_expression);
						this.state = 94;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 95;
						(_localctx as ExpressionSubtractionContext)._op = this.match(AlfParser.SUB);
						this.state = 96;
						(_localctx as ExpressionSubtractionContext)._right = this.expression(4);
						}
						break;
					}
					}
				}
				this.state = 101;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			}
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attribution(): AttributionContext {
		let _localctx: AttributionContext = new AttributionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, AlfParser.RULE_attribution);
		try {
			_localctx = new VariableAttributionContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this.match(AlfParser.VARIABLE);
			this.state = 103;
			this.match(AlfParser.EQ);
			this.state = 104;
			this.expression(0);
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
	public list_declaration(): List_declarationContext {
		let _localctx: List_declarationContext = new List_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, AlfParser.RULE_list_declaration);
		try {
			_localctx = new ListDeclarationContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 106;
			this.match(AlfParser.LIST);
			this.state = 107;
			this.match(AlfParser.VARIABLE);
			this.state = 108;
			this.match(AlfParser.EQ);
			this.state = 109;
			this.match(AlfParser.LSP);
			this.state = 110;
			this.values();
			this.state = 111;
			this.match(AlfParser.RSP);
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
	public values(): ValuesContext {
		let _localctx: ValuesContext = new ValuesContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, AlfParser.RULE_values);
		let _la: number;
		try {
			_localctx = new ListValuesContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AlfParser.VARIABLE) | (1 << AlfParser.INT_NUMBER) | (1 << AlfParser.FLOAT_NUMBER) | (1 << AlfParser.STRING_TEXT))) !== 0)) {
				{
				{
				this.state = 113;
				this.value();
				this.state = 114;
				this.match(AlfParser.COMMA);
				}
				}
				this.state = 120;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
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
	public function_declaration(): Function_declarationContext {
		let _localctx: Function_declarationContext = new Function_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, AlfParser.RULE_function_declaration);
		let _la: number;
		try {
			_localctx = new FunctionContentContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 121;
			this.match(AlfParser.FUNCTION);
			this.state = 122;
			this.match(AlfParser.VARIABLE);
			this.state = 123;
			this.match(AlfParser.LP);
			this.state = 133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AlfParser.INT) | (1 << AlfParser.FLOAT) | (1 << AlfParser.STRING))) !== 0)) {
				{
				{
				this.state = 124;
				this.parameter();
				this.state = 128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === AlfParser.COMMA) {
					{
					{
					this.state = 125;
					this.match(AlfParser.COMMA);
					}
					}
					this.state = 130;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 135;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 136;
			this.match(AlfParser.RP);
			this.state = 137;
			this.match(AlfParser.LB);
			this.state = 143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AlfParser.FUNCTION) | (1 << AlfParser.VARIABLE) | (1 << AlfParser.INT) | (1 << AlfParser.FLOAT) | (1 << AlfParser.STRING) | (1 << AlfParser.LIST) | (1 << AlfParser.LP) | (1 << AlfParser.INT_NUMBER) | (1 << AlfParser.FLOAT_NUMBER) | (1 << AlfParser.STRING_TEXT))) !== 0)) {
				{
				{
				this.state = 138;
				this.statement();
				this.state = 139;
				this.match(AlfParser.SEMICOLON);
				}
				}
				this.state = 145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 146;
			this.return_function();
			this.state = 147;
			this.match(AlfParser.RB);
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
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, AlfParser.RULE_parameter);
		try {
			_localctx = new FunctionParameterContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 149;
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
	public return_function(): Return_functionContext {
		let _localctx: Return_functionContext = new Return_functionContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, AlfParser.RULE_return_function);
		try {
			this.state = 157;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 151;
				this.match(AlfParser.RETURN);
				this.state = 152;
				this.statement();
				this.state = 153;
				this.match(AlfParser.SEMICOLON);
				}
				break;

			case 2:
				_localctx = new EmptyReturnContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 155;
				this.match(AlfParser.RETURN);
				this.state = 156;
				this.match(AlfParser.SEMICOLON);
				}
				break;
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
	public function_call(): Function_callContext {
		let _localctx: Function_callContext = new Function_callContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, AlfParser.RULE_function_call);
		let _la: number;
		try {
			_localctx = new FunctionCallContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 159;
			this.match(AlfParser.VARIABLE);
			this.state = 160;
			this.match(AlfParser.LP);
			this.state = 170;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AlfParser.VARIABLE) | (1 << AlfParser.INT_NUMBER) | (1 << AlfParser.FLOAT_NUMBER) | (1 << AlfParser.STRING_TEXT))) !== 0)) {
				{
				{
				this.state = 161;
				this.value();
				this.state = 165;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === AlfParser.COMMA) {
					{
					{
					this.state = 162;
					this.match(AlfParser.COMMA);
					}
					}
					this.state = 167;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 172;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 173;
			this.match(AlfParser.RP);
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 5:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 7);

		case 1:
			return this.precpred(this._ctx, 6);

		case 2:
			return this.precpred(this._ctx, 5);

		case 3:
			return this.precpred(this._ctx, 4);

		case 4:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1C\xB2\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x03\x02\x03\x02\x03\x02\x07\x02 \n\x02\f\x02\x0E\x02#\v\x02" +
		"\x07\x02%\n\x02\f\x02\x0E\x02(\v\x02\x03\x02\x03\x02\x03\x02\x05\x02-" +
		"\n\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x034\n\x03\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x05\x04@\n\x04\x03\x05\x03\x05\x03\x05\x05\x05E\n\x05\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x05\x06K\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x05\x07S\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x07\x07d\n\x07\f\x07\x0E\x07g\v\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x07\nw\n\n\f\n\x0E" +
		"\nz\v\n\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\x81\n\v\f\v\x0E\v\x84\v\v" +
		"\x07\v\x86\n\v\f\v\x0E\v\x89\v\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\x90" +
		"\n\v\f\v\x0E\v\x93\v\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\r" +
		"\x03\r\x03\r\x03\r\x05\r\xA0\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E" +
		"\xA6\n\x0E\f\x0E\x0E\x0E\xA9\v\x0E\x07\x0E\xAB\n\x0E\f\x0E\x0E\x0E\xAE" +
		"\v\x0E\x03\x0E\x03\x0E\x03\x0E\x02\x02\x03\f\x0F\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A" +
		"\x02\x02\x02\x02\xBE\x02,\x03\x02\x02\x02\x043\x03\x02\x02\x02\x06?\x03" +
		"\x02\x02\x02\bD\x03\x02\x02\x02\nJ\x03\x02\x02\x02\fR\x03\x02\x02\x02" +
		"\x0Eh\x03\x02\x02\x02\x10l\x03\x02\x02\x02\x12x\x03\x02\x02\x02\x14{\x03" +
		"\x02\x02\x02\x16\x97\x03\x02\x02\x02\x18\x9F\x03\x02\x02\x02\x1A\xA1\x03" +
		"\x02\x02\x02\x1C\x1D\x05\x04\x03\x02\x1D!\x07\x13\x02\x02\x1E \x07\x04" +
		"\x02\x02\x1F\x1E\x03\x02\x02\x02 #\x03\x02\x02\x02!\x1F\x03\x02\x02\x02" +
		"!\"\x03\x02\x02\x02\"%\x03\x02\x02\x02#!\x03\x02\x02\x02$\x1C\x03\x02" +
		"\x02\x02%(\x03\x02\x02\x02&$\x03\x02\x02\x02&\'\x03\x02\x02\x02\'-\x03" +
		"\x02\x02\x02(&\x03\x02\x02\x02)*\x05\x04\x03\x02*+\x07\x13\x02\x02+-\x03" +
		"\x02\x02\x02,&\x03\x02\x02\x02,)\x03\x02\x02\x02-\x03\x03\x02\x02\x02" +
		".4\x05\x06\x04\x02/4\x05\f\x07\x0204\x05\x10\t\x0214\x05\x14\v\x0224\x05" +
		"\x0E\b\x023.\x03\x02\x02\x023/\x03\x02\x02\x0230\x03\x02\x02\x0231\x03" +
		"\x02\x02\x0232\x03\x02\x02\x024\x05\x03\x02\x02\x0256\x05\b\x05\x0267" +
		"\x07\x06\x02\x0278\x07\x12\x02\x0289\x05\f\x07\x029@\x03\x02\x02\x02:" +
		";\x05\b\x05\x02;<\x07\x06\x02\x02<=\x07\x12\x02\x02=>\x05\x1A\x0E\x02" +
		">@\x03\x02\x02\x02?5\x03\x02\x02\x02?:\x03\x02\x02\x02@\x07\x03\x02\x02" +
		"\x02AE\x07\f\x02\x02BE\x07\r\x02\x02CE\x07\x0E\x02\x02DA\x03\x02\x02\x02" +
		"DB\x03\x02\x02\x02DC\x03\x02\x02\x02E\t\x03\x02\x02\x02FK\x07\x1A\x02" +
		"\x02GK\x07\x1B\x02\x02HK\x07\x1C\x02\x02IK\x07\x06\x02\x02JF\x03\x02\x02" +
		"\x02JG\x03\x02\x02\x02JH\x03\x02\x02\x02JI\x03\x02\x02\x02K\v\x03\x02" +
		"\x02\x02LM\b\x07\x01\x02MN\x07\x10\x02\x02NO\x05\f\x07\x02OP\x07\x11\x02" +
		"\x02PS\x03\x02\x02\x02QS\x05\n\x06\x02RL\x03\x02\x02\x02RQ\x03\x02\x02" +
		"\x02Se\x03\x02\x02\x02TU\f\t\x02\x02UV\x07\t\x02\x02Vd\x05\f\x07\nWX\f" +
		"\b\x02\x02XY\x07\n\x02\x02Yd\x05\f\x07\tZ[\f\x07\x02\x02[\\\x07\v\x02" +
		"\x02\\d\x05\f\x07\b]^\f\x06\x02\x02^_\x07\x07\x02\x02_d\x05\f\x07\x07" +
		"`a\f\x05\x02\x02ab\x07\b\x02\x02bd\x05\f\x07\x06cT\x03\x02\x02\x02cW\x03" +
		"\x02\x02\x02cZ\x03\x02\x02\x02c]\x03\x02\x02\x02c`\x03\x02\x02\x02dg\x03" +
		"\x02\x02\x02ec\x03\x02\x02\x02ef\x03\x02\x02\x02f\r\x03\x02\x02\x02ge" +
		"\x03\x02\x02\x02hi\x07\x06\x02\x02ij\x07\x12\x02\x02jk\x05\f\x07\x02k" +
		"\x0F\x03\x02\x02\x02lm\x07\x0F\x02\x02mn\x07\x06\x02\x02no\x07\x12\x02" +
		"\x02op\x07\x14\x02\x02pq\x05\x12\n\x02qr\x07\x15\x02\x02r\x11\x03\x02" +
		"\x02\x02st\x05\n\x06\x02tu\x07\x16\x02\x02uw\x03\x02\x02\x02vs\x03\x02" +
		"\x02\x02wz\x03\x02\x02\x02xv\x03\x02\x02\x02xy\x03\x02\x02\x02y\x13\x03" +
		"\x02\x02\x02zx\x03\x02\x02\x02{|\x07\x05\x02\x02|}\x07\x06\x02\x02}\x87" +
		"\x07\x10\x02\x02~\x82\x05\x16\f\x02\x7F\x81\x07\x16\x02\x02\x80\x7F\x03" +
		"\x02\x02\x02\x81\x84\x03\x02\x02\x02\x82\x80\x03\x02\x02\x02\x82\x83\x03" +
		"\x02\x02\x02\x83\x86\x03\x02\x02\x02\x84\x82\x03\x02\x02\x02\x85~\x03" +
		"\x02\x02\x02\x86\x89\x03\x02\x02\x02\x87\x85\x03\x02\x02\x02\x87\x88\x03" +
		"\x02\x02\x02\x88\x8A\x03\x02\x02\x02\x89\x87\x03\x02\x02\x02\x8A\x8B\x07" +
		"\x11\x02\x02\x8B\x91\x07\x17\x02\x02\x8C\x8D\x05\x04\x03\x02\x8D\x8E\x07" +
		"\x13\x02\x02\x8E\x90\x03\x02\x02\x02\x8F\x8C\x03\x02\x02\x02\x90\x93\x03" +
		"\x02\x02\x02\x91\x8F\x03\x02\x02\x02\x91\x92\x03\x02\x02\x02\x92\x94\x03" +
		"\x02\x02\x02\x93\x91\x03\x02\x02\x02\x94\x95\x05\x18\r\x02\x95\x96\x07" +
		"\x18\x02\x02\x96\x15\x03\x02\x02\x02\x97\x98\x05\x06\x04\x02\x98\x17\x03" +
		"\x02\x02\x02\x99\x9A\x07\x19\x02\x02\x9A\x9B\x05\x04\x03\x02\x9B\x9C\x07" +
		"\x13\x02\x02\x9C\xA0\x03\x02\x02\x02\x9D\x9E\x07\x19\x02\x02\x9E\xA0\x07" +
		"\x13\x02\x02\x9F\x99\x03\x02\x02\x02\x9F\x9D\x03\x02\x02\x02\xA0\x19\x03" +
		"\x02\x02\x02\xA1\xA2\x07\x06\x02\x02\xA2\xAC\x07\x10\x02\x02\xA3\xA7\x05" +
		"\n\x06\x02\xA4\xA6\x07\x16\x02\x02\xA5\xA4\x03\x02\x02\x02\xA6\xA9\x03" +
		"\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\xAB\x03" +
		"\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xAA\xA3\x03\x02\x02\x02\xAB\xAE\x03" +
		"\x02\x02\x02\xAC\xAA\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\xAF\x03" +
		"\x02\x02\x02\xAE\xAC\x03\x02\x02\x02\xAF\xB0\x07\x11\x02\x02\xB0\x1B\x03" +
		"\x02\x02\x02\x13!&,3?DJRcex\x82\x87\x91\x9F\xA7\xAC";
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
export class MultilineProgContext extends StartContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AlfParser.SEMICOLON);
		} else {
			return this.getToken(AlfParser.SEMICOLON, i);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AlfParser.NEWLINE);
		} else {
			return this.getToken(AlfParser.NEWLINE, i);
		}
	}
	constructor(ctx: StartContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AlfListener): void {
		if (listener.enterMultilineProg) {
			listener.enterMultilineProg(this);
		}
	}
	// @Override
	public exitRule(listener: AlfListener): void {
		if (listener.exitMultilineProg) {
			listener.exitMultilineProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AlfVisitor<Result>): Result {
		if (visitor.visitMultilineProg) {
			return visitor.visitMultilineProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SinglelineProgContext extends StartContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(AlfParser.SEMICOLON, 0); }
	constructor(ctx: StartContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AlfListener): void {
		if (listener.enterSinglelineProg) {
			listener.enterSinglelineProg(this);
		}
	}
	// @Override
	public exitRule(listener: AlfListener): void {
		if (listener.exitSinglelineProg) {
			listener.exitSinglelineProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AlfVisitor<Result>): Result {
		if (visitor.visitSinglelineProg) {
			return visitor.visitSinglelineProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AlfParser.RULE_statement; }
	public copyFrom(ctx: StatementContext): void {
		super.copyFrom(ctx);
	}
}
export class DeclarationRuleContext extends StatementContext {
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AlfListener): void {
		if (listener.enterDeclarationRule) {
			listener.enterDeclarationRule(this);
		}
	}
	// @Override
	public exitRule(listener: AlfListener): void {
		if (listener.exitDeclarationRule) {
			listener.exitDeclarationRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AlfVisitor<Result>): Result {
		if (visitor.visitDeclarationRule) {
			return visitor.visitDeclarationRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionRuleContext extends StatementContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AlfListener): void {
		if (listener.enterExpressionRule) {
			listener.enterExpressionRule(this);
		}
	}
	// @Override
	public exitRule(listener: AlfListener): void {
		if (listener.exitExpressionRule) {
			listener.exitExpressionRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AlfVisitor<Result>): Result {
		if (visitor.visitExpressionRule) {
			return visitor.visitExpressionRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ListRuleContext extends StatementContext {
	public list_declaration(): List_declarationContext {
		return this.getRuleContext(0, List_declarationContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AlfListener): void {
		if (listener.enterListRule) {
			listener.enterListRule(this);
		}
	}
	// @Override
	public exitRule(listener: AlfListener): void {
		if (listener.exitListRule) {
			listener.exitListRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AlfVisitor<Result>): Result {
		if (visitor.visitListRule) {
			return visitor.visitListRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionRuleContext extends StatementContext {
	public function_declaration(): Function_declarationContext {
		return this.getRuleContext(0, Function_declarationContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AlfListener): void {
		if (listener.enterFunctionRule) {
			listener.enterFunctionRule(this);
		}
	}
	// @Override
	public exitRule(listener: AlfListener): void {
		if (listener.exitFunctionRule) {
			listener.exitFunctionRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AlfVisitor<Result>): Result {
		if (visitor.visitFunctionRule) {
			return visitor.visitFunctionRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AttributionRuleContext extends StatementContext {
	public attribution(): AttributionContext {
		return this.getRuleContext(0, AttributionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AlfListener): void {
		if (listener.enterAttributionRule) {
			listener.enterAttributionRule(this);
		}
	}
	// @Override
	public exitRule(listener: AlfListener): void {
		if (listener.exitAttributionRule) {
			listener.exitAttributionRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AlfVisitor<Result>): Result {
		if (visitor.visitAttributionRule) {
			return visitor.visitAttributionRule(this);
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
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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
export class VariableFunctionCallContext extends DeclarationContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public VARIABLE(): TerminalNode { return this.getToken(AlfParser.VARIABLE, 0); }
	public EQ(): TerminalNode { return this.getToken(AlfParser.EQ, 0); }
	public function_call(): Function_callContext {
		return this.getRuleContext(0, Function_callContext);
	}
	constructor(ctx: DeclarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AlfListener): void {
		if (listener.enterVariableFunctionCall) {
			listener.enterVariableFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: AlfListener): void {
		if (listener.exitVariableFunctionCall) {
			listener.exitVariableFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AlfVisitor<Result>): Result {
		if (visitor.visitVariableFunctionCall) {
			return visitor.visitVariableFunctionCall(this);
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
export class ValueVariableContext extends ValueContext {
	public VARIABLE(): TerminalNode { return this.getToken(AlfParser.VARIABLE, 0); }
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AlfListener): void {
		if (listener.enterValueVariable) {
			listener.enterValueVariable(this);
		}
	}
	// @Override
	public exitRule(listener: AlfListener): void {
		if (listener.exitValueVariable) {
			listener.exitValueVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AlfVisitor<Result>): Result {
		if (visitor.visitValueVariable) {
			return visitor.visitValueVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AlfParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ExpressionMultiplyContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public MUL(): TerminalNode { return this.getToken(AlfParser.MUL, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AlfListener): void {
		if (listener.enterExpressionMultiply) {
			listener.enterExpressionMultiply(this);
		}
	}
	// @Override
	public exitRule(listener: AlfListener): void {
		if (listener.exitExpressionMultiply) {
			listener.exitExpressionMultiply(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AlfVisitor<Result>): Result {
		if (visitor.visitExpressionMultiply) {
			return visitor.visitExpressionMultiply(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionDivisionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public DIV(): TerminalNode { return this.getToken(AlfParser.DIV, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AlfListener): void {
		if (listener.enterExpressionDivision) {
			listener.enterExpressionDivision(this);
		}
	}
	// @Override
	public exitRule(listener: AlfListener): void {
		if (listener.exitExpressionDivision) {
			listener.exitExpressionDivision(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AlfVisitor<Result>): Result {
		if (visitor.visitExpressionDivision) {
			return visitor.visitExpressionDivision(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionRemContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public REM(): TerminalNode { return this.getToken(AlfParser.REM, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AlfListener): void {
		if (listener.enterExpressionRem) {
			listener.enterExpressionRem(this);
		}
	}
	// @Override
	public exitRule(listener: AlfListener): void {
		if (listener.exitExpressionRem) {
			listener.exitExpressionRem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AlfVisitor<Result>): Result {
		if (visitor.visitExpressionRem) {
			return visitor.visitExpressionRem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionAdditionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ADD(): TerminalNode { return this.getToken(AlfParser.ADD, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AlfListener): void {
		if (listener.enterExpressionAddition) {
			listener.enterExpressionAddition(this);
		}
	}
	// @Override
	public exitRule(listener: AlfListener): void {
		if (listener.exitExpressionAddition) {
			listener.exitExpressionAddition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AlfVisitor<Result>): Result {
		if (visitor.visitExpressionAddition) {
			return visitor.visitExpressionAddition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionSubtractionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public SUB(): TerminalNode { return this.getToken(AlfParser.SUB, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AlfListener): void {
		if (listener.enterExpressionSubtraction) {
			listener.enterExpressionSubtraction(this);
		}
	}
	// @Override
	public exitRule(listener: AlfListener): void {
		if (listener.exitExpressionSubtraction) {
			listener.exitExpressionSubtraction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AlfVisitor<Result>): Result {
		if (visitor.visitExpressionSubtraction) {
			return visitor.visitExpressionSubtraction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionParanthesisContext extends ExpressionContext {
	public LP(): TerminalNode { return this.getToken(AlfParser.LP, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RP(): TerminalNode { return this.getToken(AlfParser.RP, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AlfListener): void {
		if (listener.enterExpressionParanthesis) {
			listener.enterExpressionParanthesis(this);
		}
	}
	// @Override
	public exitRule(listener: AlfListener): void {
		if (listener.exitExpressionParanthesis) {
			listener.exitExpressionParanthesis(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AlfVisitor<Result>): Result {
		if (visitor.visitExpressionParanthesis) {
			return visitor.visitExpressionParanthesis(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionValueContext extends ExpressionContext {
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AlfListener): void {
		if (listener.enterExpressionValue) {
			listener.enterExpressionValue(this);
		}
	}
	// @Override
	public exitRule(listener: AlfListener): void {
		if (listener.exitExpressionValue) {
			listener.exitExpressionValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AlfVisitor<Result>): Result {
		if (visitor.visitExpressionValue) {
			return visitor.visitExpressionValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AlfParser.RULE_attribution; }
	public copyFrom(ctx: AttributionContext): void {
		super.copyFrom(ctx);
	}
}
export class VariableAttributionContext extends AttributionContext {
	public VARIABLE(): TerminalNode { return this.getToken(AlfParser.VARIABLE, 0); }
	public EQ(): TerminalNode { return this.getToken(AlfParser.EQ, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: AttributionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AlfListener): void {
		if (listener.enterVariableAttribution) {
			listener.enterVariableAttribution(this);
		}
	}
	// @Override
	public exitRule(listener: AlfListener): void {
		if (listener.exitVariableAttribution) {
			listener.exitVariableAttribution(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AlfVisitor<Result>): Result {
		if (visitor.visitVariableAttribution) {
			return visitor.visitVariableAttribution(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class List_declarationContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AlfParser.RULE_list_declaration; }
	public copyFrom(ctx: List_declarationContext): void {
		super.copyFrom(ctx);
	}
}
export class ListDeclarationContext extends List_declarationContext {
	public LIST(): TerminalNode { return this.getToken(AlfParser.LIST, 0); }
	public VARIABLE(): TerminalNode { return this.getToken(AlfParser.VARIABLE, 0); }
	public EQ(): TerminalNode { return this.getToken(AlfParser.EQ, 0); }
	public LSP(): TerminalNode { return this.getToken(AlfParser.LSP, 0); }
	public values(): ValuesContext {
		return this.getRuleContext(0, ValuesContext);
	}
	public RSP(): TerminalNode { return this.getToken(AlfParser.RSP, 0); }
	constructor(ctx: List_declarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AlfListener): void {
		if (listener.enterListDeclaration) {
			listener.enterListDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: AlfListener): void {
		if (listener.exitListDeclaration) {
			listener.exitListDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AlfVisitor<Result>): Result {
		if (visitor.visitListDeclaration) {
			return visitor.visitListDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValuesContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AlfParser.RULE_values; }
	public copyFrom(ctx: ValuesContext): void {
		super.copyFrom(ctx);
	}
}
export class ListValuesContext extends ValuesContext {
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AlfParser.COMMA);
		} else {
			return this.getToken(AlfParser.COMMA, i);
		}
	}
	constructor(ctx: ValuesContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AlfListener): void {
		if (listener.enterListValues) {
			listener.enterListValues(this);
		}
	}
	// @Override
	public exitRule(listener: AlfListener): void {
		if (listener.exitListValues) {
			listener.exitListValues(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AlfVisitor<Result>): Result {
		if (visitor.visitListValues) {
			return visitor.visitListValues(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_declarationContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AlfParser.RULE_function_declaration; }
	public copyFrom(ctx: Function_declarationContext): void {
		super.copyFrom(ctx);
	}
}
export class FunctionContentContext extends Function_declarationContext {
	public FUNCTION(): TerminalNode { return this.getToken(AlfParser.FUNCTION, 0); }
	public VARIABLE(): TerminalNode { return this.getToken(AlfParser.VARIABLE, 0); }
	public LP(): TerminalNode { return this.getToken(AlfParser.LP, 0); }
	public RP(): TerminalNode { return this.getToken(AlfParser.RP, 0); }
	public LB(): TerminalNode { return this.getToken(AlfParser.LB, 0); }
	public return_function(): Return_functionContext {
		return this.getRuleContext(0, Return_functionContext);
	}
	public RB(): TerminalNode { return this.getToken(AlfParser.RB, 0); }
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AlfParser.SEMICOLON);
		} else {
			return this.getToken(AlfParser.SEMICOLON, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AlfParser.COMMA);
		} else {
			return this.getToken(AlfParser.COMMA, i);
		}
	}
	constructor(ctx: Function_declarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AlfListener): void {
		if (listener.enterFunctionContent) {
			listener.enterFunctionContent(this);
		}
	}
	// @Override
	public exitRule(listener: AlfListener): void {
		if (listener.exitFunctionContent) {
			listener.exitFunctionContent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AlfVisitor<Result>): Result {
		if (visitor.visitFunctionContent) {
			return visitor.visitFunctionContent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AlfParser.RULE_parameter; }
	public copyFrom(ctx: ParameterContext): void {
		super.copyFrom(ctx);
	}
}
export class FunctionParameterContext extends ParameterContext {
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
	constructor(ctx: ParameterContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AlfListener): void {
		if (listener.enterFunctionParameter) {
			listener.enterFunctionParameter(this);
		}
	}
	// @Override
	public exitRule(listener: AlfListener): void {
		if (listener.exitFunctionParameter) {
			listener.exitFunctionParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AlfVisitor<Result>): Result {
		if (visitor.visitFunctionParameter) {
			return visitor.visitFunctionParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Return_functionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AlfParser.RULE_return_function; }
	public copyFrom(ctx: Return_functionContext): void {
		super.copyFrom(ctx);
	}
}
export class ReturnStatementContext extends Return_functionContext {
	public RETURN(): TerminalNode { return this.getToken(AlfParser.RETURN, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(AlfParser.SEMICOLON, 0); }
	constructor(ctx: Return_functionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AlfListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: AlfListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AlfVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EmptyReturnContext extends Return_functionContext {
	public RETURN(): TerminalNode { return this.getToken(AlfParser.RETURN, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(AlfParser.SEMICOLON, 0); }
	constructor(ctx: Return_functionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AlfListener): void {
		if (listener.enterEmptyReturn) {
			listener.enterEmptyReturn(this);
		}
	}
	// @Override
	public exitRule(listener: AlfListener): void {
		if (listener.exitEmptyReturn) {
			listener.exitEmptyReturn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AlfVisitor<Result>): Result {
		if (visitor.visitEmptyReturn) {
			return visitor.visitEmptyReturn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_callContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AlfParser.RULE_function_call; }
	public copyFrom(ctx: Function_callContext): void {
		super.copyFrom(ctx);
	}
}
export class FunctionCallContext extends Function_callContext {
	public VARIABLE(): TerminalNode { return this.getToken(AlfParser.VARIABLE, 0); }
	public LP(): TerminalNode { return this.getToken(AlfParser.LP, 0); }
	public RP(): TerminalNode { return this.getToken(AlfParser.RP, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AlfParser.COMMA);
		} else {
			return this.getToken(AlfParser.COMMA, i);
		}
	}
	constructor(ctx: Function_callContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AlfListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: AlfListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AlfVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


